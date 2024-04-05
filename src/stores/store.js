import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    products: [
      {
        id: 1,
        imageSrc: new URL("../assets/images/Rectangle 3.png", import.meta.url),
        productName: "Phone",
      },
      {
        id: 2,
        imageSrc: new URL("../assets/images/Rectangle 3 (1).png", import.meta.url),
        productName: "Computer",
      },
      {
        id: 3,
        imageSrc: new URL("../assets/images/Rectangle 3 (2).png", import.meta.url),
        productName: "Camera",
      },
      {
        id: 4,
        imageSrc: new URL("../assets/images/Rectangle 3.png", import.meta.url),
        productName: "Phone",
      },

    ]
  }),
  getter: {},
  action: {},
});
