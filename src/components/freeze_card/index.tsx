import { Container } from "@/components";

export const Freeze_card = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          Заморозь свою карту <span className="head_decor">Moreon</span>
        </h2>
        <div className="flex justify-between gap-x-8">
          <div className="w-full max-w-[525px]">
            <p>
              Если у вас появилась потребность заморозить клубную карту, вы
              можете сделать это в приложении, на сайте, через вашего
              персонального менеджера, если данная услуга предусмотрена
              Договором.
            </p>
            <p className="mb-5">
              Минимальная продолжительность приостановления действия Клубной
              карты составляет 10 календарных дней.
            </p>
            <p className="mb-10">
              Заморозка – лучший помощник в ситуациях, когда нужно отложить
              занятия фитнесом.
            </p>
            <button
              type="button"
              className="text-white py-4 px-7 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            >
              Заморозить карту
            </button>
          </div>
          <div className="freeze_decor">
            <picture>
              <source
                srcSet="/images/freeze_card/freez.webp"
                type="image/webp"
              />
              <img
                width={639}
                height={283}
                src="/images/freeze_card/freez.png"
                alt=""
                aria-hidden
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};
