import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { MessageCircleQuestion as IconMessageCircleQuestion } from "lucide-react";
import { ReactNode } from "react";

import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";
import { AccessibleButton } from "@/components/ui/accessibleButton";

type RenderQuestionType = {
  children: ReactNode;
};

export const RenderQuestion = ({ children }: RenderQuestionType) => {
  const innerWidth = useGettingWindowWidth();

  return innerWidth > 768 ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <AccessibleButton className="-translate-y-2">
          <IconMessageCircleQuestion size={14} strokeWidth={1.5} />
        </AccessibleButton>
      </TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  ) : (
    <Popover>
      <PopoverTrigger asChild>
        <AccessibleButton className="-translate-y-2">
          <IconMessageCircleQuestion size={14} strokeWidth={1.5} />
        </AccessibleButton>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
