type Blog = {
  id: number;
  created_at: string;
  title: string;
  url: string;
  description: string;
  comments_count: number;
  positive_reactions_count: number;
  reading_time_minutes: number;
  cover_image: string;
  tag_list: string[];
};

const Blogs = async () => {
  const response = await fetch(
    "https://dev.to/api/articles?username=serhatgenc"
  );
  const blogData = (await response.json()) as Array<Blog>;

  return (
    <section id="blogs">
      <div className="w-full py-20">
        <h1 className="heading text-[#d90368]">My Blogs</h1>

        <div className="w-full mt-12 grid grid-cols-1 gap-10">
          {/* {blogData.map((blog) => (
            
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
