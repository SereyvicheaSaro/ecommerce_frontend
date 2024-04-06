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

    ],
    carts: [
      {
        id: 1,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 2,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 3,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 4,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 5,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 6,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 7,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 8,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 9,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 10,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 11,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 12,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 13,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 14,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 15,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },
      {
        id: 16,
        imageSrc: new URL("../assets/images/Rectangle 6.png", import.meta.url),
        title: "iPhone",
        price: "1000.99",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        color: "red"
      },

    ]
  }),
  getter: {},
  action: {},
});
