import { Directions_list } from "components";
import { keys_list_type } from "components/directions_list";

export const Areas_study = ({ keys_list }: keys_list_type) => {
  if (!keys_list || keys_list.length === 0) return null;

  return (
    <div className="container">
      <section className="py-12">
        <div className="w-full max-w-[1080px] m-auto">
          <h2 className="mb-10">
            Направления <span className="head_decor">занятий</span>
          </h2>
          <Directions_list keys_list={keys_list} />
        </div>
      </section>
    </div>
  );
};
