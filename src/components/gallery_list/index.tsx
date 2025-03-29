import { useState } from "react";

const gallery_list_data = [
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_1.jpg",
      webp: "/images/gallery/gallery_1.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_2.jpg",
      webp: "/images/gallery/gallery_2.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_3.jpg",
      webp: "/images/gallery/gallery_3.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_4.jpg",
      webp: "/images/gallery/gallery_4.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_5.jpg",
      webp: "/images/gallery/gallery_5.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_6.jpg",
      webp: "/images/gallery/gallery_6.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_7.jpg",
      webp: "/images/gallery/gallery_7.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_8.jpg",
      webp: "/images/gallery/gallery_8.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_9.jpg",
      webp: "/images/gallery/gallery_9.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_10.jpg",
      webp: "/images/gallery/gallery_10.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_11.jpg",
      webp: "/images/gallery/gallery_11.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_12.jpg",
      webp: "/images/gallery/gallery_12.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_13.jpg",
      webp: "/images/gallery/gallery_13.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_14.jpg",
      webp: "/images/gallery/gallery_14.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_15.jpg",
      webp: "/images/gallery/gallery_15.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_16.jpg",
      webp: "/images/gallery/gallery_16.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_17.jpg",
      webp: "/images/gallery/gallery_17.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_18.jpg",
      webp: "/images/gallery/gallery_18.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_19.jpg",
      webp: "/images/gallery/gallery_19.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_20.jpg",
      webp: "/images/gallery/gallery_20.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_21.jpg",
      webp: "/images/gallery/gallery_21.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_22.jpg",
      webp: "/images/gallery/gallery_22.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_23.jpg",
      webp: "/images/gallery/gallery_23.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_24.jpg",
      webp: "/images/gallery/gallery_24.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_25.jpg",
      webp: "/images/gallery/gallery_25.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_26.jpg",
      webp: "/images/gallery/gallery_26.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_27.jpg",
      webp: "/images/gallery/gallery_27.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_28.jpg",
      webp: "/images/gallery/gallery_28.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_29.jpg",
      webp: "/images/gallery/gallery_29.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_30.jpg",
      webp: "/images/gallery/gallery_30.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_31.jpg",
      webp: "/images/gallery/gallery_31.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_32.jpg",
      webp: "/images/gallery/gallery_32.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_33.jpg",
      webp: "/images/gallery/gallery_33.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_34.jpg",
      webp: "/images/gallery/gallery_34.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_35.jpg",
      webp: "/images/gallery/gallery_35.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_36.jpg",
      webp: "/images/gallery/gallery_36.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_37.jpg",
      webp: "/images/gallery/gallery_37.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_38.jpg",
      webp: "/images/gallery/gallery_38.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_39.jpg",
      webp: "/images/gallery/gallery_39.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_40.jpg",
      webp: "/images/gallery/gallery_40.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_41.jpg",
      webp: "/images/gallery/gallery_41.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_42.jpg",
      webp: "/images/gallery/gallery_42.webp",
    },
  },
  {
    description: "",
    images_url: {
      jpg: "/images/gallery/gallery_43.jpg",
      webp: "/images/gallery/gallery_43.webp",
    },
  },
];

export const Gallery_list = () => {
  const [visibleShow, setVisibleShow] = useState<number>(6);
  if (!gallery_list_data || gallery_list_data.length === 0) return null;

  const handleVisibleShow = () => {
    if (gallery_list_data.length > visibleShow) {
      setVisibleShow((prev) => prev + 6);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-3 place-items-center gap-4">
        {gallery_list_data
          .slice(0, visibleShow)
          .map(({ description, images_url: { jpg, webp } }, idx: number) => (
            <li key={idx} className="h-full rounded-3xl overflow-hidden">
              <button type="button" className="block h-full">
                <span className="visually-hidden">{description}</span>
                <picture>
                  <source srcSet={jpg} type="image/webp" />
                  <img
                    className="h-full object-cover duration-700 hover:scale-[1.1]"
                    src={jpg}
                    alt={description}
                  />
                </picture>
              </button>
            </li>
          ))}
      </ul>
      {gallery_list_data.length > visibleShow && (
        <button
          onClick={handleVisibleShow}
          type="button"
          className="flex text-white py-4 px-7 mt-10 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
        >
          Показать ещё
        </button>
      )}
    </>
  );
};
