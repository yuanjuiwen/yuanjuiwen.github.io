"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/*
 * Each direct child is one slide. Wrap multi-element slides in
 * <div className="contents"> so the slide boundary survives the server/client
 * boundary without adding a layout box.
 */

/** Tracks the selected slide and snap points of the surrounding <Carousel>. */
function useCarouselState() {
  const { api } = useCarousel();
  const [selected, setSelected] = React.useState(0);
  const [snaps, setSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSnaps(api.scrollSnapList());
      setSelected(api.selectedScrollSnap());
    };
    const frame = requestAnimationFrame(sync);
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      cancelAnimationFrame(frame);
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  return { api, selected, snaps };
}

function Dots({
  className,
  dotClassName,
  activeMode,
  label,
  slideLabel,
}: {
  className: string;
  dotClassName: string;
  /** How the original CSS marks the active dot. */
  activeMode: "aria" | "class";
  label: string;
  slideLabel: (n: number) => string;
}) {
  const { api, selected, snaps } = useCarouselState();
  return (
    <div className={className} role="tablist" aria-label={label}>
      {snaps.map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          className={cn(dotClassName, activeMode === "class" && i === selected && "is-active")}
          aria-selected={i === selected}
          aria-label={slideLabel(i + 1)}
          tabIndex={i === selected ? 0 : -1}
          onClick={() => api?.scrollTo(i)}
        />
      ))}
    </div>
  );
}

/** Prev/next arrows that wrap around at the ends, like the original gallery buttons. */
function WrappingArrows({ prevLabel, nextLabel }: { prevLabel: string; nextLabel: string }) {
  const { api } = useCarousel();
  const go = (delta: number) => {
    if (!api) return;
    const count = api.scrollSnapList().length;
    api.scrollTo((api.selectedScrollSnap() + delta + count) % count);
  };
  return (
    <>
      <CarouselPrevious
        className={cn(arrowClass, "left-[0.35rem]")}
        aria-label={prevLabel}
        disabled={false}
        onClick={() => go(-1)}
      />
      <CarouselNext
        className={cn(arrowClass, "right-[0.35rem]")}
        aria-label={nextLabel}
        disabled={false}
        onClick={() => go(1)}
      />
    </>
  );
}

const arrowClass =
  "photo-carousel-arrow absolute top-1/2 z-10 size-9 -translate-y-1/2 rounded-full border-black/10 bg-white/90 text-[#171717] shadow-sm hover:bg-white";

/**
 * Photo gallery (About page and OCULUS galleries).
 * Same look as the original scroll-snap gallery, rebuilt on the shadcn Carousel.
 */
export function PhotoCarousel({
  children,
  labels,
}: {
  children: React.ReactNode;
  labels: { prev: string; next: string; dots: string; /** e.g. "Slide {n}" */ slide: string };
}) {
  const slides = React.Children.toArray(children);
  const slideLabel = (n: number) => labels.slide.replace("{n}", String(n));
  return (
    <Carousel className="photo-carousel" opts={{ align: "start", containScroll: "trimSnaps" }}>
      <CarouselContent viewportClassName="photo-carousel-viewport" className="ml-0 h-full">
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="photo-carousel-slide pl-0" aria-label={slideLabel(i + 1)}>
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>
      <WrappingArrows prevLabel={labels.prev} nextLabel={labels.next} />
      <Dots
        className="photo-carousel-dots"
        dotClassName="photo-carousel-dot"
        activeMode="aria"
        label={labels.dots}
        slideLabel={slideLabel}
      />
    </Carousel>
  );
}

/** Colendar hi-fi screens: a free-scrolling row with position dots. */
export function HiFiCarousel({ children, dotsLabel }: { children: React.ReactNode; dotsLabel: string }) {
  const slides = React.Children.toArray(children);
  return (
    <Carousel opts={{ align: "start", dragFree: true, containScroll: "trimSnaps" }}>
      <CarouselContent viewportClassName="colendar-hifi-prototype__viewport" className="ml-0">
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="colendar-hifi-prototype__slide basis-auto pl-0">
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>
      <Dots
        className="colendar-hifi-prototype__dots"
        dotClassName="colendar-hifi-prototype__dot"
        activeMode="class"
        label={dotsLabel}
        slideLabel={(n) => `Slide ${n}`}
      />
    </Carousel>
  );
}

/** OCULUS market charts: one chart per slide, with arrows (hidden at the ends) and dots. */
export function MarketCarousel({ children }: { children: React.ReactNode }) {
  const slides = React.Children.toArray(children);
  return (
    <Carousel className="project-market-carousel" opts={{ align: "center" }}>
      <CarouselContent
        viewportClassName="project-market-carousel__viewport"
        viewportProps={{ "aria-label": "Market chart gallery" } as React.ComponentProps<"div">}
        className="project-market-carousel__track ml-0"
      >
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="project-market-carousel__slide pl-0">
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Position and size come from the original .project-market-carousel__btn rules. */}
      <CarouselPrevious
        className="project-market-carousel__btn project-market-carousel__prev translate-y-0 disabled:invisible"
        aria-label="Previous chart"
      />
      <CarouselNext
        className="project-market-carousel__btn project-market-carousel__next translate-y-0 disabled:invisible"
        aria-label="Next chart"
      />
      <Dots
        className="project-market-carousel__dots"
        dotClassName="project-market-carousel__dot"
        activeMode="aria"
        label="Choose chart"
        slideLabel={(n) => `Chart ${n}`}
      />
    </Carousel>
  );
}
