import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";
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
import { MessageCircleQuestion } from "lucide-react";
import { ReactNode } from "react";

type RenderQuestionType = {
  children: ReactNode;
};

export const RenderQuestion = ({ children }: RenderQuestionType) => {
  const innerWidth = useGettingWindowWidth();

  return innerWidth > 768 ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" className="-translate-y-2">
          <MessageCircleQuestion size={14} strokeWidth={1.5} />
        </button>
      </TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  ) : (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="-translate-y-2">
          <MessageCircleQuestion size={14} strokeWidth={1.5} />
        </button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
