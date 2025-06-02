import { useEffect, useRef, useState } from "react";

import { Radio_group, Range_slider } from "@/components";


export const Calculate_cost = () => {
  const [baseSum, setBaseSum] = useState<number>(0); // Базовая сумма из Radio_group
  const [selectedMonths, setSelectedMonths] = useState<number>(1); // Количество месяцев
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

    // Очистка интервала при размонтировании компонента
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [totalCost]); // Запускаем анимацию при изменении totalCost

  return (
    <>
      <Radio_group setTotalSum={setBaseSum} />
      <Range_slider onMonthsChange={setSelectedMonths} />
      <div>
        <h3>Итоговая стоимость:</h3>
        <p>
          {displayedSum.toFixed(2)} ₽ за {selectedMonths}{" "}
          {selectedMonths > 1 && selectedMonths < 5
            ? "месяца"
            : selectedMonths === 1
            ? "месяц"
            : "месяцев"}
        </p>
      </div>
    </>
  );
};