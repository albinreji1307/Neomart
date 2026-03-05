export const appConfig = {
  theme: {
    primary: "bg-blue-600",
    secondary: "bg-gray-100",
  },

  pages: {
    home: {
      path: "/",
      title: "Home",

      sections: [
        {
          type: "topbar",
          sale: "Buy one get one free on first order",
        },

        {
          type: "hero",
          subtitle: "Save Up To 50% Off On Your First Order",
          title: "Daily Grocery Order and Get Express Delivery",
          price: "$60.99",
        },
      ],
    },

    products: {
      path: "/products",
      title: "Products",
      sections: [{ type: "productList" }],
    },

    profile: {
      path: "/profile",
      title: "Profile",
      sections: [{ type: "profile" }],
    },
  },
};
