import { PhoneOutlined } from "@ant-design/icons";

export const Feedback = () => {
  return (
    <div className="flex items-center justify-end gap-x-6 text-xs text-[rgba(255,255,255,0.8)]">
      <address className="flex items-center gap-x-2">
        <picture>
          <source width={13} srcSet="/images/map.svg" type="image/svg+xml" />
          <img width={17} src="/images/map.png" alt="" aria-hidden />
        </picture>
        <a
          href="https://yandex.ru/maps/org/fitnes_moreon/1731221367/?ll=37.527184%2C55.597246&z=16.82"
          className="transition duration-300 hover:text-[rgb(255,255,255)] 2xl:text-[1.25rem]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть яндекс карты"
          title="Открыть яндекс карты"
        >
          г. Москва, м. Ясенево, ул. Голубинская д. 16
        </a>
      </address>
      <div className="flex items-center gap-x-1">
        <PhoneOutlined style={{ fontSize: "17px" }} />
        <a
          href="tel:+74958590372"
          className="transition duration-300 hover:text-[rgb(255,255,255)] 2xl:text-[1.25rem]"
          aria-label="Позвонить нам"
          title="Позвонить нам"
        >
          +7 (495) 859-03-72
        </a>
      </div>
    </div>
  );
};
