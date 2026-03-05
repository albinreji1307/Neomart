import { createContext } from "react";
import { appConfig } from "../config/appConfig";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const categories = [
    {
      id: 1,
      name: "Fresh Vegetables",
      img: "https://pngimg.com/uploads/cabbage/cabbage_PNG99122.png",
      products: "125+",
      title: "Vegetables",
      price: 40,
    },
    {
      id: 2,
      name: "Organic Vegetables",
      img: "https://pngimg.com/uploads/onion/onion_PNG99225.png",
      products: "125+",
      title: "Vegetables",
      price: 45,
    },
    {
      id: 3,
      name: "Salads",
      img: "https://pngimg.com/uploads/salad/salad_PNG2815.png",
      products: "125+",
      title: "Vegetables",
      price: 35,
    },

    {
      id: 4,
      name: "Fresh Fruits",
      img: "https://pngimg.com/uploads/avocado/avocado_PNG15498.png",
      products: "125+",
      title: "Fruits",
      price: 50,
    },

    {
      id: 5,
      name: "Fish & Meats",
      img: "https://pngimg.com/uploads/meat/meat_PNG3928.png",
      products: "125+",
      title: "Meat",
      price: 90,
    },
    {
      id: 6,
      name: "Chicken",
      img: "https://pngimg.com/uploads/chicken/chicken_PNG2167.png",
      products: "125+",
      title: "Meat",
      price: 80,
    },
    {
      id: 7,
      name: "Seafood",
      img: "https://pngimg.com/uploads/fish/fish_PNG25141.png",
      products: "125+",
      title: "Meat",
      price: 95,
    },

    {
      id: 8,
      name: "Rice & Grains",
      img: "https://pngimg.com/uploads/rice/rice_PNG3.png",
      products: "125+",
      title: "Grocery",
      price: 30,
    },
    {
      id: 9,
      name: "Noodles",
      img: "https://pngimg.com/uploads/noodle/noodle_PNG65.png",
      products: "125+",
      title: "Grocery",
      price: 25,
    },
    {
      id: 10,
      name: "Pizza",
      img: "https://pngimg.com/uploads/pizza/pizza_PNG44095.png",
      products: "125+",
      title: "Grocery",
      price: 70,
    },
    {
      id: 11,
      name: "Burger",
      img: "https://pngimg.com/uploads/kfc_food/kfc_food_PNG32.png",
      products: "125+",
      title: "Grocery",
      price: 65,
    },
    {
      id: 12,
      name: "Pasta",
      img: "https://pngimg.com/uploads/pasta/pasta_PNG58.png",
      products: "125+",
      title: "Grocery",
      price: 55,
    },

    {
      id: 13,
      name: "Coffee Machine",
      img: "https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG97303.png",
      products: "125+",
      title: "Electronics",
      price: 120,
    },
    {
      id: 14,
      name: "Energy Drinks",
      img: "https://pngimg.com/uploads/fanta/fanta_PNG61.png",
      products: "125+",
      title: "Electronics",
      price: 60,
    },
  ];

  const promoCards = [
    {
      id: 1,
      title: "Everyday Fresh Meat",
      price: "$60.99",
      img: "https://pngimg.com/uploads/beef/beef_PNG91.png",
    },
    {
      id: 2,
      title: "Daily Fresh Vegetables",
      price: "$60.99",
      img: "https://pngimg.com/uploads/cabbage/cabbage_PNG99122.png",
    },
    {
      id: 3,
      title: "Everyday Fresh Milk",
      price: "$60.99",
      img: "https://pngimg.com/uploads/milk/milk_PNG12747.png",
    },
    {
      id: 4,
      title: "Everyday Fresh Fruits",
      price: "$60.99",
      img: "https://pngimg.com/uploads/apple/apple_PNG12490.png",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Milk",
      price: "$10",
      img: "https://pngimg.com/uploads/milk/milk_PNG12747.png",
    },
    {
      id: 2,
      name: "Orange Juice",
      price: "$12",
      img: "https://pngimg.com/uploads/orange_juice/orange_juice_PNG7155.png",
    },
    {
      id: 3,
      name: "Fish",
      price: "$20",
      img: "https://pngimg.com/uploads/fish/fish_PNG25141.png",
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "🏠 Home Address",
      name: "Albin Reji",
      street: "45 Green Street",
      city: "Calicut, Kerala",
      country: "India - 673001",
      email: "albin@123.com",
    },
    {
      id: 2,
      type: "🏢 Office Address",
      name: "Albin Reji",
      street: "Tech Park Building",
      city: "Kochi, Kerala",
      country: "India - 682030",
      email: "albin@199.com",
    },
  ];
  return (
    <AppContext.Provider
      value={{
        config: appConfig,
        categories,
        promoCards,
        products,
        addresses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
