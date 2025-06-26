import { useEffect, useRef, useState } from "react";

import { Coins, Wallet } from "lucide-react";

import { Container, Radio_group, Range_slider } from "@/components";

export const Calculate_cost = () => {
  const [baseSum, setBaseSum] = useState<number>(0); // Базовая сумма из Radio_group
  const [selectedMonths, setSelectedMonths] = useState<number>(3); // Количество месяцев
  const [displayedSum, setDisplayedSum] = useState<number>(0); // Отображаемая сумма
  const targetSumRef = useRef<number>(0); // Целевая сумма для анимации

  // Вычисляем целевую сумму
  const totalCost = baseSum * selectedMonths;

  useEffect(() => {
    // Устанавливаем новую целевую сумму
    targetSumRef.current = totalCost;

    // Очищаем предыдущий интервал, если он существует
    let interval: NodeJS.Timeout | null = null;

    // Функция для анимированного изменения суммы
    const animateSum = () => {
      let currentSum = displayedSum; // Текущая отображаемая сумма
      const step = Math.abs((targetSumRef.current - currentSum) / 20); // Шаг изменения
      const direction = targetSumRef.current > currentSum ? 1 : -1; // Направление изменения (увеличение или уменьшение)

      interval = setInterval(() => {
        currentSum += step * direction;

        // Если текущая сумма достигла или превысила целевую, останавливаем анимацию
        if (
          (direction === 1 && currentSum >= targetSumRef.current) ||
          (direction === -1 && currentSum <= targetSumRef.current)
        ) {
          clearInterval(interval!);
          setDisplayedSum(targetSumRef.current); // Устанавливаем точное значение
        } else {
          setDisplayedSum(currentSum); // Обновляем отображаемую сумму
        }
      }, 30); // Интервал обновления (в миллисекундах)
    };

    animateSum();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [totalCost]); // Запускаем анимацию при изменении totalCost

  return (
    <Container>
      <section
        id="price-calc"
        className="relative py-12 px-16 fitnes_decor rounded-3xl overflow-hidden"
      >
        <Wallet
          className="absolute bottom-[1rem] right-[40rem] opacity-5 rotate-45 -z-10"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <Coins
          className="absolute top-[10rem] left-[16rem] opacity-5 -z-10"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <h2 className="mb-10">
          Рассчитать <span className="head_decor">стоимость</span>
        </h2>
        <Range_slider onMonthsChange={setSelectedMonths} className="mb-10" />
        <Radio_group setTotalSum={setBaseSum} className="mb-16" />
        <h3 className="mb-3">
          <span className="head_decor">Итоговая</span> стоимость:
        </h3>
        <strong className="text-lg">
          <span className="text-white text-2xl">{displayedSum.toFixed(2)}</span>{" "}
          ₽ за <span className="head_decor text-xl">{selectedMonths}</span>{" "}
          {selectedMonths > 1 && selectedMonths < 5
            ? "месяца"
            : selectedMonths === 1
              ? "месяц"
              : "месяцев"}
        </strong>
      </section>
    </Container>
  );
};
