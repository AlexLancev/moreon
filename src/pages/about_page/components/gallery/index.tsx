import { Gallery_list } from "components";

export const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">Фотогалерея</h2>
        <Gallery_list />
      </div>
    </section>
  );
};
