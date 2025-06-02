import { useState, useEffect } from "react";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type Options_data_type = {
  id: number;
  label: string;
  sum?: number;
  coefficient?: number;
};

type Calculate_cost_data_type = {
  title: string;
  options: Options_data_type[];
};

const calculate_cost_data: Calculate_cost_data_type[] = [
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
      },
    ],
  },
];

type Radio_group_props_type = {
  setTotalSum: (value: number) => void;
};

export const Radio_group = ({ setTotalSum }: Radio_group_props_type) => {
  const [selectedValues, setSelectedValues] = useState<
    Record<string, Options_data_type>
  >(() => {
    const initialValues: Record<string, Options_data_type> = {};
    calculate_cost_data.forEach(({ title, options }) => {
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

  const [result, setResult] = useState<number>(calculateResult());

  useEffect(() => {
    const newResult = calculateResult();
    setResult(newResult);
    setTotalSum(newResult);
  }, [selectedValues]);

  if (!calculate_cost_data || calculate_cost_data.length === 0) return null;

  return (
    <div>
      <ul>
        {calculate_cost_data.map(({ title, options }, idx: number) => {
          if (!title || !options || options.length === 0) return null;

          return (
            <li key={idx}>
              <strong>{title}</strong>
              <ul>
                <RadioGroup
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
                  {options.map(({ label, id }) => {
                    return (
                      <li key={id}>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            value={label}
                            id={`${title}-${label}`}
                          />
                          <Label htmlFor={`${title}-${label}`}>{label}</Label>
                        </div>
                      </li>
                    );
                  })}
                </RadioGroup>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
