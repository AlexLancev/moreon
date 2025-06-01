import * as React from "react";
import { addDays, format, isBefore } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const handleDateSelect = (range: DateRange | undefined) => {
    if (!range?.from) return;

    const minEndDate = addDays(range.from, 10);
    if (!range.to || isBefore(range.to, minEndDate)) {
      setDate({ from: range.from, to: minEndDate });
    } else {
      setDate(range);
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: ru })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: ru })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: ru })
              )
            ) : (
              <span>Выберите дату</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-[rgba(14,14,19,1)] border-[rgb(115,115,115)] text-white"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            locale={ru}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}