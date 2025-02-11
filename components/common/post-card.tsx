import React from "react";
import Image from "next/image";

interface PostCardProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const PostCard = ({ post }: { post: PostCardProps }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center border-[1px] border-gray-300 rounded-md p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-500">{post.content}</p>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default PostCard;
