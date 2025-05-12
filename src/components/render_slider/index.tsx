import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Render_slider = ({
  data,
  path,
  type,
}: {
  data: News_type[];
  path: number;
  type: string;
}) => {
  if (!data || !path || !type) return null;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {data
        .filter(({ id }) => id !== path)
        .map(
          (
            { id, description_picture, description, url_images: { jpg, webp } },
            idx: number,
          ) => (
            <SwiperSlide key={idx} className="rounded-3xl overflow-hidden">
              <Link to={`/${type}/${id}`}>
                <picture>
                  <source srcSet={webp} type="image/webp" />
                  <img
                    width={500}
                    src={jpg}
                    alt={description_picture}
                    aria-label={description_picture}
                  />
                </picture>
                {description && (
                  <strong className="text-[rgb(176,176,176)] px-1 text-center">
                    {description}
                  </strong>
                )}
              </Link>
            </SwiperSlide>
          ),
        )}
    </Swiper>
  );
};
