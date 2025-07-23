import { format, subYears } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DateBirthUserPropsType = {
  className?: string;
  value?: string;
  onChange?: (dateStr: string) => void;
};

const minAge = 14;
const maxAge = 99;

export const DateBirthUser = ({
  className,
  value,
  onChange,
}: DateBirthUserPropsType) => {
  const today = new Date();

  const minDate = subYears(today, maxAge); // Самая ранняя допустимая дата (99 лет назад)
  const maxDate = subYears(today, minAge); // Самая поздняя допустимая дата (14 лет назад)

  // Состояние для хранения выбранной даты
  const [date, setDate] = useState<Date | undefined>(
    // Преобразуем строку "YYYY-MM-DD" в объект Date при инициализации
    value ? new Date(value) : undefined,
  );

  // Обработчик выбора даты
  const handleDateSelect = (selectedDate: Date | undefined) => {
    // Если дата не выбрана (например, при сбросе)
    if (!selectedDate) {
      setDate(undefined);
      onChange?.(""); // Оповещаем родительский компонент
      return;
    }

    // Обновляем состояние
    setDate(selectedDate);

    // Форматируем дату в строку "YYYY-MM-DD"
    const formattedDate = format(selectedDate, "yyyy-MM-dd");

    // Передаем отформатированную дату родительскому компоненту
    onChange?.(formattedDate);
  };

  // Рендер компонента
  return (
    <div className={cn("grid gap-2", className)}>
      {/* Поповер (всплывающее окно) для календаря */}
      <Popover>
        {/* Триггер для открытия поповера (кнопка) */}
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground", // Стиль если дата не выбрана
            )}
          >
            {/* Иконка календаря */}
            <CalendarIcon className="mr-2 h-4 w-4" />

            {/* Отображение выбранной даты или плейсхолдера */}
            {date ? (
              format(date, "dd.MM.yyyy", { locale: ru }) // Для отображения используем русский формат
            ) : (
              <span>Выберите дату рождения</span>
            )}
          </Button>
        </PopoverTrigger>

        {/* Содержимое поповера (календарь) */}
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single" // Режим выбора одной даты
            selected={date} // Выбранная дата
            onSelect={handleDateSelect} // Обработчик выбора
            disabled={(date) => date > maxDate || date < minDate} // Блокировка недопустимых дат
            defaultMonth={maxDate} // Месяц по умолчанию (14 лет назад)
            fromYear={minDate.getFullYear()} // Начальный год в селекторе (99 лет назад)
            toYear={maxDate.getFullYear()} // Конечный год в селекторе (14 лет назад)
            captionLayout="dropdown" // Вид селектора года (выпадающий список)
            initialFocus // Автофокус при открытии
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
