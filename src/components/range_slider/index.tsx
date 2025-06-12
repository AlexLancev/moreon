import { useState } from "react";

import classNames from "classnames";

import { Slider } from "../ui/slider";
import { Input } from "../ui/input";

type Range_slider_props_type = {
  onMonthsChange: (months: number) => void;
  className?: string;
};

export const Range_slider = ({
  onMonthsChange,
  className,
}: Range_slider_props_type) => {
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
    onMonthsChange(value[0]); // Передаем значение в родительский компонент
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    const parsedValue = parseInt(newValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12) {
      setSliderValue([parsedValue]);
      onMonthsChange(parsedValue); // Передаем значение в родительский компонент
    }
  };

  const [idx] = sliderValue;
  return (
    <div className={classNames("", className)}>
      <strong className="text-xl block mb-5">Количество месяцев</strong>
      <div className="flex items-center gap-x-5 max-w-[600px]">
        <Input
          className="max-w-[50px] text-center"
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

        <div className="flex items-center gap-x-1">
          <b>{idx}</b>
          <span>{renderMonth(idx)}</span>
        </div>
      </div>
    </div>
  );
};
