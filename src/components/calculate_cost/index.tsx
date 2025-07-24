import { Coins as IconCoins, Wallet as IconWallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container, Radio_group, Range_slider, Title } from "@/components";

const ANIMATION_STEPS = 20;
const ANIMATION_INTERVAL_MS = 30;

const MONTHS_DECLINATION = {
  ONE: "месяц",
  FEW: "месяца",
  MANY: "месяцев",
} as const;

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
      const step = Math.abs(
        (targetSumRef.current - currentSum) / ANIMATION_STEPS,
      );
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
      }, ANIMATION_INTERVAL_MS);
    };

    animateSum();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [totalCost]);

  const getMonthsDeclination = (months: number): string => {
    if (months === 1) return MONTHS_DECLINATION.ONE;
    if (months >= 2 && months <= 4) return MONTHS_DECLINATION.FEW;
    return MONTHS_DECLINATION.MANY;
  };

  return (
    <Container>
      <section
        id="price-calc"
        className="before:clip-[polygon(0_0,_100%_0,_100%_100%,_0_25%)] relative overflow-hidden rounded-3xl p-4 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#33b0aa] before:opacity-10 before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_100%,_0_25%)] md:p-6 lg:p-8 xl:p-10 2xl:p-12"
      >
        <IconWallet
          className="absolute bottom-[1rem] right-[40rem] -z-10 rotate-45 opacity-5"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <IconCoins
          className="absolute left-[16rem] top-[10rem] -z-10 opacity-5"
          size={348}
          color="#555555"
          strokeWidth={1.5}
        />
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Рассчитать <span className="text-customHeadDecor">стоимость</span>
        </Title>
        <Range_slider onMonthsChange={setSelectedMonths} className="mb-10" />
        <Radio_group
          setTotalSum={setBaseSum}
          className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16"
        />
        <Title headingType="md" className="mb-3 text-xl xl:text-3xl">
          <span className="text-customHeadDecor">Итоговая</span> стоимость:
        </Title>
        <strong className="text-lg">
          <span className="text-2xl text-white">{displayedSum.toFixed(2)}</span>{" "}
          ₽ за{" "}
          <span className="text-xl text-customHeadDecor">{selectedMonths}</span>{" "}
          {getMonthsDeclination(selectedMonths)}
        </strong>
      </section>
    </Container>
  );
};
