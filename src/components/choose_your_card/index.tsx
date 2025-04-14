const choose_your_result_card_data = {
  fitness: {
    head: "Фитнесс",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_1.jpeg",
      webp: "/images/choose_your_card/result_card_1.webp",
    },
  },
  fitness_spa: {
    head: "Фитнесс+SPA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_2.jpeg",
      webp: "/images/choose_your_card/result_card_2.webp",
    },
  },
  corporate_card: {
    head: "Корпоративная карта",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_3.jpeg",
      webp: "/images/choose_your_card/result_card_3.webp",
    },
  },
  flexible: {
    head: "Гибкая",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_4.jpeg",
      webp: "/images/choose_your_card/result_card_4.webp",
    },
  },
  premium: {
    head: "Премиум",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_5.jpeg",
      webp: "/images/choose_your_card/result_card_5.webp",
    },
  },
};

export const Choose_your_card = () => {
  if (!choose_your_result_card_data) return null;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Выберите свою <span className="head_decor">карту</span>
        </h2>
      </div>
    </section>
  );
};
