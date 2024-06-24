import Image from "next/image";
import { PinContainer } from "./ui/3dPin";
import { IoHeart, IoTime } from "react-icons/io5";
import { FaComment } from "react-icons/fa6";

type Blog = {
  id: number;
  title: string;
  url: string;
  description: string;
  comments_count: number;
  positive_reactions_count: number;
  reading_time_minutes: number;
  social_image: string;
  tag_list: string[];
};

export const Blogs = async () => {
  const response = await fetch(
    "https://dev.to/api/articles?username=serhatgenc"
  );
  const blogData = (await response.json()) as Array<Blog>;

  return (
    <section id="blogs">
      <div className="w-full py-20">
        <h1 className="heading font-bold text-center text-[#d90368] relative z-20">
          Blogs
        </h1>
        <div className="flex flex-wrap items-center justify-center sm:gap-24 sm:mt-10">
          {blogData.map(
            ({
              id,
              title,
              social_image,
              description,
              url,
              positive_reactions_count,
              comments_count,
              reading_time_minutes,
              tag_list,
            }) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={id}
              >
                <PinContainer title={url} href={url}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[10rem] sm:h-[14rem] mb-5">
                    <Image
                      src={social_image}
                      alt="cover"
                      className="z-10 absolute top-0 rounded-2xl"
                      width={1000}
                      height={500}
                    />
                  </div>
                  <h1 className="font-bold text-lg lg:text-xl xl:text-2xl line-clamp-1">
                    {title}
                  </h1>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {description}
                  </p>
                  <div className="flex my-3 gap-1">
                    {tag_list.map((item) => (
                      <div
                        className="sm:text-xs text-[0.5rem] py-1 px-2 border bg-[#d90368] rounded-xl"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                      <IoHeart color="red" />
                      {positive_reactions_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaComment />
                      {comments_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <IoTime />
                      {`${reading_time_minutes} min`}
                    </div>
                  </div>
                </PinContainer>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
