import React from "react";
import { posts } from "@/lib/data";
import PostCard from "@/components/common/post-card";

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const post = posts.find((post) => post.id === resolvedParams.id);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="w-full h-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <h3 className="text-2xl font-bold">Post Page</h3>
      <p className="text-sm text-gray-500">This is a post page</p>
      <PostCard post={post} />
    </div>
  );
};

export default PostPage;
