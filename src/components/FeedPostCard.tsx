"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { GET_PUBLIC_POSTS } from "../../graphql/queries/publicPost";
import { useQuery } from "@apollo/client";

export default function FeedPostCard() {

  const { data, loading, error } = useQuery(GET_PUBLIC_POSTS);

  if (loading) return <p className="text-center py-8">Loading posts...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error loading posts.</p>;

  console.log("Public Posts Data:", data);
  return (
    <div>
      {data?.publicPosts?.map((post: any) => (
        <div key={post.id}
          className="bg-white p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-stretch">
          {/* Left: Post Image */}
          <div className="w-full md:w-40 relative rounded-2xl overflow-hidden border">
            <Image
              src={post.image || "/assets/images/post1.webp"}
              alt="Post preview"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle: Post Details */}
          <div className="flex-1 flex flex-col justify-between space-y-3">
            {/* Post Title */}
            <div className="flex flex-row md:flex-row gap-4 items-start md:items-start">
              <h3 className="font-semibold text-gray-800 leading-snug text-[15px] md:text-[16px]">
              {post.title}
              </h3>

              {/* Right: Like Button */}
              <div className="self-start md:self-center">
                <button className="text-gray-300 hover:text-red-500 text-xl">
                  <FaHeart />
                </button>
              </div>
            </div>


            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500">finance</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500">bitcoin</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500">crypto</span>
            </div>

            {/* User Info + Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 pt-2 gap-2">
              {/* Left: User */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden">
                  <Image
                    src="/assets/images/avatar.heic"
                    alt="User avatar"
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-gray-700 text-sm">{post.user?.name || "Unknown User"}</span>
                <span>· {new Date(post.created_at).toLocaleDateString()}</span>
              </div>

              {/* Right: Stats */}
              <div className="flex gap-4 flex-wrap">
                <span>651,324 Views</span>
                <span>36,654 Likes</span>
                <span>56 Comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}
