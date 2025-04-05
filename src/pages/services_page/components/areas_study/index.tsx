import { Areas_study_list } from "components";

export const Areas_study = () => {

  return (
    <section>
      <div className="container">
        <h2 className="mb-10">
          Направления <span className="head_decor">занятий</span>
        </h2>
        <Areas_study_list />
      </div>
    </section>
  );
};
