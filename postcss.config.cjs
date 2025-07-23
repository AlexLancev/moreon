import autoprefixer from "autoprefixer";
import postcssSorting from "postcss-sorting";
import tailwindcss from "tailwindcss";

const sortingOptions = {
  "properties-order": [
    "position",
    "z-index",
    "top",
    "right",
    "bottom",
    "left",

    "display",
    "flex",
    "grid",
    "align-items",
    "justify-content",
    "margin",
    "padding",
    "border",
    "rounded",
    "width",
    "height",
    "min-width",
    "min-height",
    "max-width",
    "max-height",
    "box-sizing",

    "font",
    "text",
    "line-height",
    "letter-spacing",
    "text-align",
    "text-decoration",
    "color",

    "background",
    "opacity",
    "shadow",

    "transform",
    "transition",
    "animation",
  ],
  "unspecified-properties-position": "bottom",
  "empty-lines-between-children-rules": 1,
};

export default {
  plugins: [tailwindcss, autoprefixer, postcssSorting(sortingOptions)],
};
