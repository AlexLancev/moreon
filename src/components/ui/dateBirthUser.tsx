import { format, subYears } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DateBirthUserPropsType {
  className?: string;
  value?: string;
  onChange?: (dateStr: string) => void;
}

const minAge = 14;
const maxAge = 99;

export const DateBirthUser = ({
  className,
  value,
  onChange,
}: DateBirthUserPropsType) => {
  const today = new Date();

  const minDate = subYears(today, maxAge);
  const maxDate = subYears(today, minAge);

  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined,
  );

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) {
      setDate(undefined);
      onChange?.("");
      return;
    }

    setDate(selectedDate);

    const formattedDate = format(selectedDate, "yyyy-MM-dd");

    onChange?.(formattedDate);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />

            {date ? (
              format(date, "dd.MM.yyyy", { locale: ru })
            ) : (
              <span>Выберите дату рождения</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            disabled={(date) => date > maxDate || date < minDate}
            defaultMonth={maxDate}
            fromYear={minDate.getFullYear()}
            toYear={maxDate.getFullYear()}
            captionLayout="dropdown"
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
