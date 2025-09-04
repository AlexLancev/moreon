export const OpeningHours = () => {
  return (
    <div>
      <strong className="mb-4 block xl:text-xl 2xl:text-2xl 3xl:text-3xl">
        Время работы:
      </strong>
      <ul className="mb-3 *:xl:text-xl *:2xl:text-2xl *:3xl:text-3xl">
        <li className="mb-1 2xl:mb-4">Будни: 07:00 — 24:00</li>
        <li>Бассейн: 07:00 — 23:45</li>
      </ul>
      <ul className="mb-3 *:xl:text-xl *:2xl:text-2xl *:3xl:text-3xl">
        <li className="mb-1 2xl:mb-4">Выходные: 09:00 — 24:00</li>
        <li>Бассейн: 09:00 — 23:45</li>
      </ul>
      <ul className="*:xl:text-xl *:2xl:text-2xl *:3xl:text-3xl">
        <li>Отдел продаж: 10:00 — 22:00</li>
      </ul>
    </div>
  );
};
