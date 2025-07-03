import { useEffect, useRef, useState } from "react";

import { Coins, Wallet } from "lucide-react";

import { Container, Radio_group, Range_slider, Title } from "@/components";
import { useGetResponsiveValue } from "@/utils";
import { sizeTitleData } from "@/constans";

export const Calculate_cost = () => {
  const [baseSum, setBaseSum] = useState<number>(0);
  const [selectedMonths, setSelectedMonths] = useState<number>(3);
  const [displayedSum, setDisplayedSum] = useState<number>(0);
  const targetSumRef = useRef<number>(0);
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

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
        className="relative py-12 px-16 rounded-3xl overflow-hidden before:absolute before:top-0 before:left-0 before:bg-[#33b0aa] before:w-full before:h-full before:opacity-10 before:clip-[polygon(0_0,_100%_0,_100%_100%,_0_25%)] before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_100%,_0_25%)] before:pointer-events-none before:z-10"
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
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          Рассчитать <span className="customHeadDecor">стоимость</span>
        </Title>
        <Range_slider onMonthsChange={setSelectedMonths} className="mb-10" />
        <Radio_group setTotalSum={setBaseSum} className="mb-16" />
        <Title fontSize="lg" headingType="md" className="mb-3">
          <span className="customHeadDecor">Итоговая</span> стоимость:
        </Title>
        <strong className="text-lg">
          <span className="text-white text-2xl">{displayedSum.toFixed(2)}</span>{" "}
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
