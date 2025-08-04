import { SwiperSlide } from "swiper/react";

import { Skeleton } from "@/components/ui/skeleton";

export const ServiceCardSkeleton = () => (
  <SwiperSlide className="relative flex min-h-[331px] flex-col items-start overflow-hidden rounded-3xl bg-[#031817] p-4 text-sm before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[120px] before:w-full before:rotate-180 before:bg-[url('/images/decor_serv.svg')] before:bg-cover before:bg-no-repeat 2xl:before:h-[140px] before:opacity-15 3xl:p-10 3xl:before:h-[160px]">
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

export const SkeletonHero = () => (
  <SwiperSlide className="relative h-screen w-full">
    <div className="absolute top-32 z-10 w-full space-y-4 xxs:left-5">
      <Skeleton className="h-10 w-[300px] rounded-md lg:w-1/3" />
      <Skeleton className="h-10 w-[270px] rounded-md lg:w-1/4" />
      <Skeleton className="h-10 w-[250px] rounded-md lg:w-1/5" />
      <Skeleton className="h-10 w-[270px] rounded-md lg:w-1/4" />
    </div>
    <Skeleton className="h-full w-full rounded-none" />
    <div className="absolute bottom-20 z-10 grid w-full translate-y-[1rem] items-center gap-3 xxs:grid-cols-2 lg:left-5 lg:flex lg:-translate-y-[6rem] 2xl:-translate-y-[12rem]">
      <Skeleton className="h-12 w-full rounded-xl lg:w-[200px]" />
      <Skeleton className="h-12 w-full rounded-xl lg:w-[200px]" />
    </div>
  </SwiperSlide>
);

export const SkeletonGalleryGrid = () => (
  <li className="h-[300px] w-full">
    <Skeleton className="h-full rounded-3xl" />
  </li>
);

export const SkeletonPerformance = () => (
  <li className="relative flex flex-col-reverse gap-10 overflow-hidden bg-[90%_0] bg-no-repeat px-0 py-5 after:absolute after:left-0 after:top-0 after:font-familyGroticTitulOtlHv after:text-5xl after:text-[rgba(23,101,97,0.1)] after:content-[attr(data-decor)] md:flex-row md:justify-center md:py-8 md:*:w-1/2 md:after:left-auto md:after:right-10 md:odd:flex-row-reverse md:odd:after:left-10 lg:after:text-7xl xl:py-10 xl:after:text-8xl 3xl:py-12">
    <div className="mx-0 pb-16 lg:pb-20 2xl:pb-24">
      <Skeleton className="h-[293px] w-full rounded-3xl" />
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
