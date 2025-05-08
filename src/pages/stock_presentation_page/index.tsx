import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import xss from "xss";

import { stock_store } from "@/stores/data_store";

export const Stock_presentation_page = observer(() => {
  const { data, isLoading, isError } = stock_store;
  const { id } = useParams();
  const numeric_Id = Number(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!data || data.length === 0 || !numeric_Id) return null;

  const stock = data.find((el) => el.id === numeric_Id);
  const { description, description_promotion, url_images } = stock ?? {};

  if (!description || !description_promotion || !url_images) return null;

  const sanitized_description = xss(description_promotion);

  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="flex justify-center gap-10">
            <picture>
              <source srcSet={url_images?.webp} type="image/webp" />
              <img src={url_images?.jpg} alt={description} />
            </picture>
            <div
              className="ab"
              dangerouslySetInnerHTML={{ __html: sanitized_description }}
            ></div>
          </div>
        </div>
      </section>
      
    </>
  );
});
