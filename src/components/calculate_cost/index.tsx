import { useEffect, useRef, useState } from "react";

import { Coins, Wallet } from "lucide-react";

import { Container, Radio_group, Range_slider, Title } from "@/components";

export const Calculate_cost = () => {
  const [baseSum, setBaseSum] = useState<number>(0);
  const [selectedMonths, setSelectedMonths] = useState<number>(3);
  const [displayedSum, setDisplayedSum] = useState<number>(0);
  const targetSumRef = useRef<number>(0);

  const totalCost = baseSum * selectedMonths;

  useEffect(() => {
    targetSumRef.current = totalCost;

    let interval: NodeJS.Timeout | null = null;

    const animateSum = () => {
      let currentSum = displayedSum;
      const step = Math.abs((targetSumRef.current - currentSum) / 20);
      const direction = targetSumRef.current > currentSum ? 1 : -1;

      interval = setInterval(() => {
        currentSum += step * direction;

        if (
          (direction === 1 && currentSum >= targetSumRef.current) ||
          (direction === -1 && currentSum <= targetSumRef.current)
        ) {
          clearInterval(interval!);
          setDisplayedSum(targetSumRef.current);
        } else {
          setDisplayedSum(currentSum);
        }
      }, 30);
    };

    animateSum();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [totalCost]);

  return (
    <Container>
      <section
        id="price-calc"
        className="before:clip-[polygon(0_0,_100%_0,_100%_100%,_0_25%)] relative overflow-hidden rounded-3xl p-4 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#33b0aa] before:opacity-10 before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_100%,_0_25%)] md:p-6 lg:p-8 xl:p-10 2xl:p-12"
      >
        <Wallet
          className="absolute bottom-[1rem] right-[40rem] -z-10 rotate-45 opacity-5"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <Coins
          className="absolute left-[16rem] top-[10rem] -z-10 opacity-5"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Рассчитать <span className="customHeadDecor">стоимость</span>
        </Title>
        <Range_slider onMonthsChange={setSelectedMonths} className="mb-10" />
        <Radio_group
          setTotalSum={setBaseSum}
          className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16"
        />
        <Title headingType="md" className="mb-3 text-xl xl:text-3xl">
          <span className="customHeadDecor">Итоговая</span> стоимость:
        </Title>
        <strong className="text-lg">
          <span className="text-2xl text-white">{displayedSum.toFixed(2)}</span>{" "}
          ₽ за <span className="customHeadDecor text-xl">{selectedMonths}</span>{" "}
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
