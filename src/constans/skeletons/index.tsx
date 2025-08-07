import { SwiperSlide } from "swiper/react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const SkeletonBabySwimmingSection = ({
  className,
}: {
  className?: string;
}) => (
  <div className={cn("flex flex-col md:flex-row", className)}>
    {/* Левая колонка (изображение) */}
    <div className="relative h-[400px] w-full overflow-hidden md:w-1/2">
      <Skeleton className="h-full w-full rounded-lg" />
    </div>

    {/* Правая колонка (текст) */}
    <div className="flex flex-col p-4 md:w-1/2">
      {/* Заголовок */}
      <Skeleton className="mb-4 h-8 w-56" />

      {/* Основной текст */}
      <Skeleton className="mb-4 h-8 w-1/2" />
      <Skeleton className="mb-4 h-8 w-3/4" />
      <Skeleton className="mb-4 h-8 w-2/3" />
      <Skeleton className="mb-4 h-8 w-1/2" />

      {/* Кнопка "Подробнее" */}
      <button className="mt-8 inline-flex items-center gap-2 rounded-md py-2">
        <Skeleton className="h-12 w-[200px]" />
      </button>
    </div>
  </div>
);

export const SkeletonFitnessClubCard = ({
  className,
}: {
  className?: string;
}) => (
  <div className={cn("flex flex-col md:flex-row", className)}>
    <div className="flex flex-col items-start justify-center p-4 md:w-1/2">
      <Skeleton className="mb-4 h-8 w-56" />
      <Skeleton className="mb-4 h-8 w-32" />
      <Skeleton className="mb-4 h-8 w-1/2" />
      <Skeleton className="mb-4 h-8 w-3/4" />
      <Skeleton className="mb-4 h-8 w-2/3" />
      <Skeleton className="mb-4 h-8 w-1/2" />
      <Skeleton className="mb-4 h-8 w-3/4" />
      <Skeleton className="mb-4 h-8 w-2/3" />
      <Skeleton className="mb-4 h-8 w-1/2" />
    </div>

    <div className="relative h-[400px] w-full overflow-hidden md:w-1/2">
      <Skeleton className="h-full w-full rounded-lg" />
    </div>
  </div>
);

export const SkeletonFitnessCard = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-start md:flex-row", className)}>
    <div className="relative mx-auto h-[400px] w-[280px] overflow-hidden md:w-1/2">
      <Skeleton className="h-full w-full rounded-lg" />
    </div>

    <div className="flex flex-col items-start justify-center p-4 md:w-1/2">
      {/* Заголовок */}
      <Skeleton className="rounding-2xl mb-4 h-8 w-56" />

      {/* Первый абзац */}
      <Skeleton className="rounding-2xl mb-4 h-8 w-1/2" />
      <Skeleton className="rounding-2xl mb-4 h-8 w-3/4" />

      {/* Второй подраздел */}
      <Skeleton className="rounding-2xl mb-4 h-8 w-32" />
      <ul className="mb-4 ml-8 list-none space-y-2">
        <li>
          <Skeleton className="rounding-2xl h-8 w-32" />
        </li>
        <li>
          <Skeleton className="rounding-2xl h-8 w-32" />
        </li>
        <li>
          <Skeleton className="rounding-2xl h-8 w-48" />
        </li>
        <li>
          <Skeleton className="rounding-2xl h-8 w-32" />
        </li>
        <li>
          <Skeleton className="rounding-2xl h-8 w-32" />
        </li>
      </ul>

      {/* Последний абзац */}
      <Skeleton className="rounding-2xl mb-4 h-8 w-1/2" />
      <Skeleton className="rounding-2xl mb-4 h-8 w-3/4" />
      <Skeleton className="rounding-2xl mb-4 h-8 w-2/3" />
    </div>
  </div>
);

export const SkeletonGymSection = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col md:flex-row", className)}>
    <div className="flex flex-col items-start justify-center p-4 md:w-1/2">
      <div className="w-full space-y-4">
        <Skeleton className="h-8 w-[280px] md:w-48" />
        <Skeleton className="h-8 w-[270px] md:w-1/2" />
        <Skeleton className="h-8 w-[250px] md:w-3/4" />
        <Skeleton className="h-8 w-[260px] md:w-2/3" />
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-md px-4 py-2">
        <Skeleton className="h-12 w-[200px]" />
      </button>
    </div>

    <div className="relative h-[400px] w-full overflow-hidden md:w-1/2">
      <Skeleton className="h-full w-full rounded-2xl" />
    </div>
  </div>
);

export const SkeletonBathAndPoolsSection = ({
  className,
}: {
  className?: string;
}) => (
  <div className={cn("flex flex-col-reverse md:flex-row", className)}>
    <div className="flex flex-col items-start justify-center rounded-2xl py-4 md:w-1/2">
      <div className="w-full space-y-4">
        <Skeleton className="h-8 w-[275px] rounded-xl md:w-48" />
        <Skeleton className="h-8 w-[280px] rounded-xl md:w-1/2" />
        <Skeleton className="h-8 w-[270px] rounded-xl md:w-3/4" />
        <Skeleton className="h-8 w-[250px] rounded-xl md:w-2/3" />
        <Skeleton className="h-8 w-[270px] rounded-xl md:w-1/2" />
        <Skeleton className="h-8 w-[220px] rounded-xl md:w-3/4" />
        <Skeleton className="h-8 w-[240px] rounded-xl md:w-2/3" />
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-2xl">
        <Skeleton className="h-12 w-[200px]" />
      </button>
    </div>

    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:w-1/2">
      <Skeleton className="h-full w-full" />
    </div>
  </div>
);

export const SkeletonServiceCard = ({ className }: { className?: string }) => (
  <SwiperSlide
    className={cn(
      "relative flex min-h-[331px] flex-col items-start overflow-hidden rounded-2xl bg-[#031817] p-4 text-sm before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[120px] before:w-full before:rotate-180 before:bg-[url('/images/decor_serv.svg')] before:bg-cover before:bg-no-repeat before:opacity-15 2xl:before:h-[140px] 3xl:p-10 3xl:before:h-[160px]",
      className,
    )}
  >
    <Skeleton className="mb-7 h-8 w-3/4 text-lg uppercase 2xl:h-10 2xl:text-2xl 3xl:h-12 3xl:text-3xl" />
    <div className="mb-5 w-full flex-auto space-y-2 2xl:mb-7 3xl:mb-10">
      <Skeleton className="h-5 w-full lg:h-6 2xl:h-7 3xl:h-8" />
      <Skeleton className="h-5 w-5/6 lg:h-6 2xl:h-7 3xl:h-8" />
      <Skeleton className="h-5 w-4/6 lg:h-6 2xl:h-7 3xl:h-8" />
    </div>

    <Skeleton className="h-6 w-40 text-lg md:h-7 md:text-xl 2xl:h-8 2xl:text-2xl 3xl:h-10 3xl:text-3xl" />
    <div className="absolute bottom-3 right-0 -z-10 opacity-5">
      <Skeleton className="h-[200px] w-[200px] text-[#00a887]" />
    </div>
  </SwiperSlide>
);

export const SkeletonFitnessSection = ({
  className,
}: {
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col items-start gap-4 md:flex-row lg:gap-10",
      className,
    )}
  >
    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:w-1/2">
      <Skeleton className="h-full w-full rounded-lg" />
    </div>

    <div className="flex flex-col items-start justify-center p-4 md:w-1/2">
      <Skeleton className="mb-4 h-8 w-[270px] rounded-2xl md:w-3/4" />
      <Skeleton className="mb-4 h-8 w-[260px] rounded-2xl md:w-1/2" />
      <Skeleton className="mb-4 h-8 w-[250px] rounded-2xl md:w-1/3" />
      <Skeleton className="mb-4 h-8 w-[260px] rounded-2xl md:w-2/3" />
      <Skeleton className="mb-4 h-8 w-[220px] rounded-2xl md:w-3/4" />
      <Skeleton className="mb-4 h-8 w-[200px] rounded-2xl md:w-1/2" />

      <button className="mt-8 inline-flex items-center gap-2 rounded-2xl">
        <Skeleton className="h-12 w-[200px]" />
      </button>
    </div>
  </div>
);

export const SkeletonTeam = ({ className }: { className?: string }) => (
  <SwiperSlide className={cn("flex flex-col gap-4", className)}>
    <div className="relative overflow-hidden rounded-2xl">
      <Skeleton className="h-[451px] w-full" />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative z-10 mx-4 mb-4 flex h-16 w-5/6 items-center justify-start rounded-2xl">
          <Skeleton className="h-8 w-3/4" />
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-2xl shadow-md">
      <Skeleton className="h-[451px] w-full" />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative z-10 mx-4 mb-4 flex h-16 w-5/6 items-center justify-start rounded-2xl">
          <Skeleton className="h-8 w-3/4" />
        </div>
      </div>
    </div>
  </SwiperSlide>
);

export const SkeletonHero = ({ className }: { className?: string }) => (
  <SwiperSlide className={cn("relative h-screen w-full", className)}>
    <div className="absolute top-32 z-10 w-full space-y-4 xxs:left-5">
      <Skeleton className="h-10 w-[300px] rounded-md lg:w-1/3" />
      <Skeleton className="h-10 w-[270px] rounded-md lg:w-1/4" />
      <Skeleton className="h-10 w-[250px] rounded-md lg:w-1/5" />
      <Skeleton className="h-10 w-[270px] rounded-md lg:w-1/4" />
    </div>
    <Skeleton className="h-full w-full rounded-none" />
    <div className="absolute bottom-20 z-10 grid w-full translate-y-[1rem] items-center gap-3 xxs:grid-cols-2 lg:left-5 lg:flex lg:-translate-y-[6rem] 2xl:-translate-y-[12rem]">
      <Skeleton className="h-12 w-full rounded-2xl lg:w-[200px]" />
      <Skeleton className="h-12 w-full rounded-2xl lg:w-[200px]" />
    </div>
  </SwiperSlide>
);

export const SkeletonVideoReviews = ({ className }: { className?: string }) => (
  <SwiperSlide
    className={cn(
      "relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[530px] 2xl:h-[800px]",
      className,
    )}
  >
    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Skeleton className="h-20 w-20 rounded-full" />
    </div>
  </SwiperSlide>
);

export const SkeletonGalleryGrid = ({ className }: { className?: string }) => (
  <li className={cn("h-[300px] w-full", className)}>
    <Skeleton className="h-full rounded-2xl" />
  </li>
);

export const SkeletonAboutUs = ({ className }: { className?: string }) => (
  <SwiperSlide className={cn("flex flex-col gap-3 lg:gap-5", className)}>
    {[...Array(4)].map((_, idx) => (
      <Skeleton key={idx} className="h-14 w-full" />
    ))}
  </SwiperSlide>
);

export const SkeletonTabsGrid = ({ className }: { className?: string }) => (
  <li className={cn("h-12 w-[300px]", className)}>
    <Skeleton className="h-full w-full rounded-2xl" />
  </li>
);

export const SkeletonGrid = ({ className }: { className?: string }) => (
  <SwiperSlide className={cn("h-[400px] w-full", className)}>
    <Skeleton className="h-full w-full rounded-2xl" />
  </SwiperSlide>
);

export const SkeletonPerformance = ({ className }: { className?: string }) => (
  <li
    className={cn(
      "relative flex flex-col-reverse gap-10 overflow-hidden bg-[90%_0] bg-no-repeat px-0 py-5 after:absolute after:left-0 after:top-0 after:font-familyGroticTitulOtlHv after:text-5xl after:text-[rgba(23,101,97,0.1)] after:content-[attr(data-decor)] md:flex-row md:justify-center md:py-8 md:*:w-1/2 md:after:left-auto md:after:right-10 md:odd:flex-row-reverse md:odd:after:left-10 lg:after:text-7xl xl:py-10 xl:after:text-8xl 3xl:py-12",
      className,
    )}
  >
    <div className="mx-0 pb-16 lg:pb-20 2xl:pb-24">
      <Skeleton className="h-[293px] w-full rounded-2xl" />
      <div className="mt-4 flex justify-center gap-2">
        {[...Array(4)].map((_, idx) => (
          <Skeleton key={idx} className="h-5 w-5 rounded-full" />
        ))}
      </div>
    </div>

    <div className="space-y-6">
      <Skeleton className="h-8 w-3/4 lg:h-10 xl:h-12 3xl:h-16" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full lg:h-5 xl:h-6" />
        <Skeleton className="h-4 w-5/6 lg:h-5 xl:h-6" />
        <Skeleton className="h-4 w-4/6 lg:h-5 xl:h-6" />
        <Skeleton className="h-4 w-3/6 lg:h-5 xl:h-6" />
        <Skeleton className="h-4 w-5/6 lg:h-5 xl:h-6" />
      </div>
    </div>
  </li>
);
