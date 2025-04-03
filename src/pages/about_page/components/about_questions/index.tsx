import { Questions } from "components";

const about_questions_data = [
  {
    head: "Что входит в клубную карту",
    description: "Что входит в клубную карту",
  },
  {
    head: "Можно ли посещать Термы и СПА",
    description: "Можно ли посещать Термы и СПА",
  },
  { head: "Есть ли заморозка", description: "Есть ли заморозка" },
  { head: "Есть ли рассрочка", description: "Есть ли рассрочка" },
  { head: "Корпоративное членство", description: "Корпоративное членство" },
  {
    head: "Входят ли занятия с тренером в карту",
    description: "Входят ли занятия с тренером в карту",
  },
  {
    head: "Какой срок действия клубной карты",
    description: "Какой срок действия клубной карты",
  },
];

export const About_questions = () => {
  if (!about_questions_data || about_questions_data.length === 0) return null;

  return (
      <div className="container">
    <section className="about_questions">
        <h2 className="mb-10">
          Часто задаваемые <span className="head_decor">вопросы</span>
        </h2>
        <Questions questions_list={about_questions_data} />
    </section>
      </div>
  );
};
