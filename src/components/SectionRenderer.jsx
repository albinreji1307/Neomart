import ProductCard from "./ProductCard";
import Profile from "./ProfileCard";
import CategoryScroll from "./Elements/CategoryScroll";
import PromoCards from "./Elements/PromoCards";
import Hero from "./Hero";

const componentMap = {
  hero: Hero,
  categoryScroll: CategoryScroll,
  promoCards: PromoCards,
  productList: ProductCard,
  profile: Profile,
};

const SectionRenderer = ({ section }) => {
  const Component = componentMap[section.type];

  if (!Component) return null;

  return <Component {...section} />;
};

export default SectionRenderer;
