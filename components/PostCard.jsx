import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  // console.log(post)
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className=" overflow-hidden shadow-md pb-8 mb-6 ">
        <img
          src={post.featuredImage.url}
          alt=""
          className="object-cover  w-full h-80  object-center shadow-lg rounded-t-lg lg:rounded-lg"
        />
        <h1
          className="transition duration-100 mt-8 text-center mb-0 cursor-pointer text-3xl text-gray-800
    hover:text-pink-600 font-semibold
    "
        >
          <Link href={`/post/${post.slug}`} className="">
            {post.title}
          </Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height={"30px"}
              width="30px"
            />
            <p className="inline align-middle text-gray-500 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-500">
            <span>{moment(post.createdAt).format("MMM DD YYYY")}</span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>
        <div className="text-center">
        <Link href={'/post/${post.slug'}>
          <span className="transition duration-500 transform bg-pink-600 hover:-translate-y-1 inline-block text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
          Continue Reading
          </span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
