import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { RadioGroup as RadioGroupComponent, RadioGroupItem } from "../ui/radio-group";

import { RenderQuestion } from "./components/renderQuestion";

type OptionsDataType = {
  id: number;
  label: string;
  sum?: number;
  coefficient?: number;
  answerQuestion?: string;
};

type CalculateCostDataType = {
  title: string;
  options: OptionsDataType[];
};

const calculateCostData: CalculateCostDataType[] = [
  {
    title: "Какие зоны хотите посетить:",
    options: [
      {
        id: 1,
        label: "Фитнес",
        sum: 2500,
      },
      {
        id: 2,
        label: "Фитнес+СПА",
        sum: 3200,
        answerQuestion:
          "Не включает такие услуги как массаж, иглоукалывание, глина, медицинские пиявки.",
      },
    ],
  },
  {
    title: "Нужна ли Вам рассрочка?",
    options: [
      {
        id: 1,
        label: "Нет",
        coefficient: 1,
      },
      {
        id: 2,
        label: "Да",
        coefficient: 1.12,
        answerQuestion: "Рассрочка на 3 месяца равными долями.",
      },
    ],
  },
  {
    title: "Когда удобно посещать занятия?",
    options: [
      {
        id: 1,
        label: "Утром (06:00-12:00)",
        coefficient: 1,
      },
      {
        id: 2,
        label: "Днем (12:00-18:00)",
        coefficient: 1.1,
      },
      {
        id: 3,
        label: "Вечером (18:00-24:00)",
        coefficient: 1.4,
      },
      {
        id: 4,
        label: "Только в выходные (07:00-23:00)",
        coefficient: 1,
      },
      {
        id: 5,
        label: "В любое время (06:00-24:00)",
        coefficient: 2,
      },
    ],
  },
  {
    title: "Нужен ли персональный тренер (кол-во занятий указанно за 1 месяц)?",
    options: [
      {
        id: 1,
        label: "Да, подобрать позже",
        coefficient: 1.1,
        answerQuestion: "Минимальное кол-во в месяц (6 занятий по 60 минут)",
      },
      {
        id: 2,
        label: "Премиум тренер (6 занятий по 60 минут)",
        coefficient: 2.8,
      },
      {
        id: 3,
        label: "Элит тренер (6 занятий по 60 минут)",
        coefficient: 2.4,
      },
      {
        id: 4,
        label: "Мастер тренер (6 занятий по 60 минут)",
        coefficient: 2,
      },
      {
        id: 5,
        label: "Нет",
        coefficient: 1,
      },
    ],
  },
  {
    title: "Есть ли действующая карта другого фитнес-клуба?",
    options: [
      {
        id: 1,
        label: "Нет",
        coefficient: 1,
      },
      {
        id: 2,
        label: "Да",
        coefficient: 1.3,
        answerQuestion:
          "Срок действия карты другого фитнес-клуба должен быть не менее 28 дней",
      },
    ],
  },
];

type RadioGroupPropsType = {
  setTotalSum: (value: number) => void;
  className?: string;
};

export const RadioGroup = ({ setTotalSum, className }: RadioGroupPropsType) => {
  const [selectedValues, setSelectedValues] = useState<
    Record<string, OptionsDataType>
  >(() => {
    const initialValues: Record<string, OptionsDataType> = {};
    calculateCostData.forEach(({ title, options }) => {
      if (options.length > 0) {
        initialValues[title] = options[0];
      }
    });
    return initialValues;
  });

  const calculateResult = () => {
    let baseSum = 0;
    let totalCoefficient = 1;

    Object.values(selectedValues).forEach((option) => {
      if (option.sum !== undefined) {
        baseSum += option.sum;
      }
      if (option.coefficient !== undefined && option.coefficient !== 1.3) {
        totalCoefficient *= option.coefficient;
      }
    });

    const hasDiscount = Object.values(selectedValues).some(
      (option) => option.coefficient === 1.3,
    );

    const finalResult = hasDiscount
      ? (baseSum * totalCoefficient) / 1.3
      : baseSum * totalCoefficient;

    return finalResult;
  };

  const [, setResult] = useState<number>(calculateResult());

  useEffect(() => {
    const newResult = calculateResult();
    setResult(newResult);
    setTotalSum(newResult);
  }, [selectedValues]);

  if (!calculateCostData || calculateCostData.length === 0) return null;

  return (
    <ul className={cn("gap-y-6 md:grid md:grid-cols-2", className)}>
      {calculateCostData.map(({ title, options }, idx: number) => {
        if (!title || !options || options.length === 0) return null;

        return (
          <li key={idx} className="mb-8 last:mb-0">
            <strong className="mb-3 block text-xl xl:mb-6 xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              {title}
            </strong>
            <ul>
              <RadioGroupComponent
                defaultValue={options[0]?.label}
                onValueChange={(value) => {
                  const selectedOption = options.find(
                    (option) => option.label === value,
                  );
                  if (selectedOption) {
                    setSelectedValues((prev) => ({
                      ...prev,
                      [title]: selectedOption,
                    }));
                  }
                }}
              >
                {options.map(({ label, id, answerQuestion }) => {
                  return (
                    <li key={id}>
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value={label}
                          id={`${title}-${label}`}
                          className="peer data-[state=checked]:cursor-default"
                        />
                        <Label
                          className="text-lg duration-300 peer-hover:text-white peer-data-[state=checked]:cursor-default peer-data-[state=checked]:text-white xl:text-xl 2xl:text-2xl 3xl:text-3xl"
                          htmlFor={`${title}-${label}`}
                        >
                          {label}
                        </Label>
                        {answerQuestion && answerQuestion.length !== 0 && (
                          <RenderQuestion>
                            <p className="max-w-[280px] rounded-md bg-[#eaeaea] px-2 py-1 text-xs text-[#505050]">
                              {answerQuestion}
                            </p>
                          </RenderQuestion>
                        )}
                      </div>
                    </li>
                  );
                })}
              </RadioGroupComponent>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
