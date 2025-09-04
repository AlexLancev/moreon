import { useState } from "react";

import { cn } from "@/lib/utils";

import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

type RangeSliderPropsType = {
  onMonthsChange: (months: number) => void;
  className?: string;
};

export const RangeSlider = ({
  onMonthsChange,
  className,
}: RangeSliderPropsType) => {
  const [sliderValue, setSliderValue] = useState<number[]>([3]);
  const [inputValue, setInputValue] = useState<string>("3");

  const renderMonth = (idx: number) => {
    if (idx > 1 && idx < 5) return "месяца";
    if (idx >= 5) return "месяцев";
    return "месяц";
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setInputValue(value[0].toString());
    onMonthsChange(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    const parsedValue = parseInt(newValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12) {
      setSliderValue([parsedValue]);
      onMonthsChange(parsedValue);
    }
  };

  const [idx] = sliderValue;
  return (
    <div className={cn("", className)}>
      <strong className="mb-5 block text-xl xl:mb-6 xl:text-2xl 2xl:text-3xl">
        Количество месяцев
      </strong>
      <div className="flex max-w-[600px] items-center gap-x-5">
        <Input
          className="max-w-[50px] text-center lg:text-xl"
          type="text"
          pattern="\d*"
          maxLength={2}
          placeholder="3"
          value={inputValue}
          onChange={handleInputChange}
        />

        <Slider
          className="w-[240px] cursor-pointer py-3"
          defaultValue={[1]}
          min={1}
          max={12}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
        />

        <div className="flex items-center gap-x-1 lg:text-xl 2xl:text-2xl">
          <b>{idx}</b>
          <span>{renderMonth(idx)}</span>
        </div>
      </div>
    </div>
  );
};
