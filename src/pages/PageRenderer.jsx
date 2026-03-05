import { useParams } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import SectionRenderer from "../components/SectionRenderer";

const PageRenderer = ({ pageKey }) => {
  const config = useConfig();
  const page = config.pages[pageKey];

 return (
  <div>
    {page.sections.map((section, index) => (
      <SectionRenderer key={index} section={section} />
    ))}
  </div>
);
};

export default PageRenderer;