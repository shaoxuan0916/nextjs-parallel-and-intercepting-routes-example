import PostCard from "@/components/common/post-card";
import { posts } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center">
        Next.js Parallel Routes & Interceptors Demo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        {posts.map((post, index) => (
          <Link
            href={`/${post.id}`}
            key={index}
            className="hover:bg-gray-100 transition-all duration-300"
          >
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
