import Swiper from "swiper/bundle";
import { sayHello } from "../utils/sayHello";
import { Dropdown } from "../components/dropdown";

export function TeamMembers() {
  const swiper = new Swiper(".team-members__swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: ".team-members .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".team-members .swiper-button-next",
      prevEl: ".team-members .swiper-button-prev",
    },
  });

  Dropdown({ root: "#john-dropdown" });
  Dropdown({ root: "#jane-dropdown" });

  sayHello("team-members.js");

  return swiper;
}
