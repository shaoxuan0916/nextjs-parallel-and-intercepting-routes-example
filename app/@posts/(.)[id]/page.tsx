"use client";

import PostCard from "@/components/common/post-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { posts } from "@/lib/data";
import { useRouter } from "next/navigation";
import React, { use } from "react";

const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const post = posts.find((post) => post.id === resolvedParams.id);
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Post Page</DialogTitle>
        </DialogHeader>
        {post && <PostCard post={post} />}
      </DialogContent>
    </Dialog>
  );
};

export default PostPage;
