import { getPost } from "@/app/api/blogs";
import Card from "@/Components/blog/Card";
import React from "react";

const page = async () => {
  const posts = await getPost();

  // console.log(posts);
  return (
    <div className="w-full h-auto px-6 md:px-12 lg:px-24  flex items-center flex-col  justify-center py-10  bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 ">

      <div className=" inline-block mt-12    px-4 py-2 text-white  text-3xl font-serif mb-10 rounded  bg-[#1834E7] ">
        All Blogs 
      </div>
      <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ">
        {posts.map((post) => (
          // <li key={post.id}> {post.id} {post.title}</li>
          <Card post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
