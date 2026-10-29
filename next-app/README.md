# Kevin Wen — Portfolio (Next.js)

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui，靜態匯出到 GitHub Pages。
畫面、字體（League Spartan）、排版和動畫都與原本的 HTML 網站一致。

## 開發

```bash
cd next-app
npm install
npm run dev      # http://localhost:3000
npm run build    # 輸出靜態網站到 out/
npm run lint
```

需要 Node.js 20.9 以上。

## 專案結構

```
src/
  app/
    (home)/ (about)/ (colendar)/ …   每頁一個 route group，各自的 layout 設定 <body> 的 class
    globals.css                      Tailwind（不含 Preflight）+ shadcn 色彩變數
    fonts.ts                         League Spartan（自行託管）
  components/
    pages/*.tsx                      各頁內容，由原本的 HTML 轉成 JSX，class 與結構完全保留
    site/                            導覽列、頁尾、輪播、文件外殼
    ui/                              shadcn/ui 元件（button、carousel…）
  legacy/*.ts                        原網站的 JS 行為（開場動畫、換頁淡出、目錄、圖表），邏輯原封不動
  locales/                           中英文字串（Colendar 頁可切換語言）
  styles/
    site.css                         原網站的 styles.css
    components.css                   讓原樣式套在 shadcn 輪播上的少量調整
public/
  assets/                            圖片與影片（與舊站相同）
  *.html                             舊網址（例如 project-colendar.html）自動轉到新頁面
```

### 修改內容

- 文字和圖片：直接改 `src/components/pages/` 裡對應的檔案，寫法和原本的 HTML 幾乎一樣（`class` 寫成 `className`）。
- 有 `t("...")` 的文字來自 `src/locales/en.json`（和 `zh-Hant.json`），改那裡即可。
- 樣式：改 `src/styles/site.css`；新寫的部分可以直接用 Tailwind class。

### Tailwind 注意事項

為了不改變原本的排版，`globals.css` 沒有載入 Tailwind 的 Preflight（瀏覽器樣式重設），原網站本來就沒有使用 reset。
`site.css` 不在任何 layer 裡，所以同一個屬性它會優先於 Tailwind utility。

### 新增 shadcn 元件

`components.json` 已設定好：

```bash
npx shadcn@latest add dialog
```

shadcn 元件依賴的少量重設樣式限定在 `[data-slot]` 元素上（見 `globals.css`），不影響其他部分。

### 內部連結

站內連結刻意使用一般的 `<a>`（而不是 `next/link`），因為原本的換頁淡出動畫和「從專案頁返回首頁時略過開場」都依賴完整的頁面載入。

## 部署

`.github/workflows/deploy-next.yml`（在 repo 根目錄）會建置 `next-app/` 並發佈到 GitHub Pages。它目前只能手動執行，所以舊的 HTML 網站會一直在線上，直到你決定切換：

1. GitHub repo → Settings → Pages → Source 改為 **GitHub Actions**。
2. Actions 分頁 → **Deploy Next.js site** → Run workflow。
3. 確認沒問題後，可在 workflow 的 `on:` 加上 `push`，之後每次 push 到 main 就會自動部署。
