"use client";

import { useInfiniteQuery } from "react-query";
import { useGlobalContext } from "@/context/GlobalContext";
import PostList from "../utils/PostList";
import SkeletonPost from "./SkeletonPost/SkeletonPost";
import fetchPost, { PostPerPage } from "../utils/fetchPost";

const Post = ({ Posts }) => {
  const { userDevice } = useGlobalContext();

  const initialPostsPerPage = PostPerPage(userDevice);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "query",
    async ({ pageParam = 1 }) => {
      const response = await fetchPost(Posts, userDevice, pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [Posts.slice(0, initialPostsPerPage)],
        pageParams: [1],
      },
    }
  );

  console.table([
    {
      "Data : ": data,
      "Error : ": error,
      "Has Next Page : ": hasNextPage,
      "Is Fetching : ": isFetching,
      "Is Fetching Next Page : ": isFetchingNextPage,
      "Status : ": status,
    },
  ]);

  return (
    <>
      <PostList posts={data?.pages.flatMap((page) => page)} />

      {isFetchingNextPage && (
        <SkeletonPost Status={status} Error={error} userDevice={userDevice} />
      )}

      <button
        onClick={fetchNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading More..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load..."}
      </button>
    </>
  );
};

export default Post;
