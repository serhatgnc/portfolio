import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem {...item} key={item.id} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
