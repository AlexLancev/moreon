import { useState } from "react";

const team_data = [
  {
    name: "martial_arts",
    type: {
      martial_arts: true,
    //   gym: true,
    //   group_training: true,
    //   pool: true,
    },
    url_images: {
      jpg: "/images/team/coach_.jpg",
      webp: "/images/team/coach_.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "<ul></ul>",
      education: "<ul></ul>",
      achievements: "<ul></ul>",
    },
  },
  {
    name: "gym",
    type: {
    //   martial_arts: true,
      gym: true,
    //   group_training: true,
    //   pool: true,
    },
    url_images: {
      jpg: "/images/team/coach_.jpg",
      webp: "/images/team/coach_.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "<ul></ul>",
      education: "<ul></ul>",
      achievements: "<ul></ul>",
    },
  },

  {
    name: "gym",
    type: {
    //   martial_arts: true,
      gym: true,
    //   group_training: true,
    //   pool: true,
    },
    url_images: {
      jpg: "/images/team/coach_.jpg",
      webp: "/images/team/coach_.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "<ul></ul>",
      education: "<ul></ul>",
      achievements: "<ul></ul>",
    },
  },

  {
    name: "group_training",
    type: {
    //   martial_arts: true,
    //   gym: true,
      group_training: true,
    //   pool: true,
    },
    url_images: {
      jpg: "/images/team/coach_.jpg",
      webp: "/images/team/coach_.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "<ul></ul>",
      education: "<ul></ul>",
      achievements: "<ul></ul>",
    },
  },
  {
    name: "pool",
    type: {
    //   martial_arts: true,
    //   gym: true,
    //   group_training: true,
      pool: true,
    },
    url_images: {
      jpg: "/images/team/coach_.jpg",
      webp: "/images/team/coach_.webp",
    },
    about_coach: {
      qualification: "",
      work_experience: "",
      contacts: { phone: "" },
      specialization: "<ul></ul>",
      education: "<ul></ul>",
      achievements: "<ul></ul>",
    },
  },
];

export const Team_list = () => {
    const [types, setTypes] = useState('gym');
  const a = team_data?.filter(({ type }) => type[types]);
  console.log(a);
  return null;
};
