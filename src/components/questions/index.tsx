import { observer } from "mobx-react-lite";
import { useState } from "react";

import xss from "xss";

import { ContentLoader, Title } from "@/components";
import { SkeletonClubCardFAQ } from "@/constans";
import { cn } from "@/lib/utils";
import { aboutQuestionsStore } from "@/stores/dataStore";

import { AccessibleButton } from "../ui/accessibleButton";

export const Questions = observer(() => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const { data } = aboutQuestionsStore;

  return (
    <ul className="py-5">
      <ContentLoader
        currentStore={aboutQuestionsStore}
        skeletonComponent={SkeletonClubCardFAQ}
        initialVisibleCount={7}
      >
        {data?.map(({ head, description }, idx: number) => {
          if (!head && !description) return null;

          const sanitizedDescription = xss(description);

          return (
            <li key={idx} className="mb-2">
              <AccessibleButton
                key={idx}
                className={cn(
                  "w-full rounded-2xl bg-tabs-gradient-custom p-3 pr-10 text-left hover:bg-tabs-hover-gradient-custom xl:p-4 xl:pr-12 2xl:p-6 2xl:pr-14",
                )}
                onClick={() =>
                  setVisibleIndex(visibleIndex === idx ? null : idx)
                }
              >
                <Title
                  className={cn(
                    "relative text-sm before:absolute before:-right-5 before:top-1/2 before:h-2.5 before:w-4 before:-translate-y-1/2 before:bg-[url('/images/list__blue.webp')] before:bg-[center_center] before:bg-no-repeat before:duration-150 xs:text-base xl:text-lg xl:before:-right-4 2xl:text-xl 2xl:before:h-6 2xl:before:w-8 2xl:before:bg-[auto_16px] 3xl:text-2xl",
                    visibleIndex === idx && "before:rotate-180",
                  )}
                >
                  {head}
                </Title>
                <div
                  className={cn(
                    "customInsertHTML overflow-hidden transition-opacity duration-300",
                    visibleIndex === idx && "h-auto pt-4",
                    visibleIndex !== idx && "invisible h-0 p-0 opacity-0",
                  )}
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                ></div>
              </AccessibleButton>
            </li>
          );
        })}
      </ContentLoader>
    </ul>
  );
});
