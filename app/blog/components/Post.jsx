"use client";

import React, { useEffect, useRef } from "react";
import "../blog.css";
import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { useIntersection } from "@mantine/hooks";
import { useGlobalContext } from "@/context/GlobalContext";
import SkeletonPost from "./SkeletonPost";

const Post = ({ Posts }) => {
  const { userDevice } = useGlobalContext();

  const fetchPost = async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let postsPerPage = 4; // Default number of posts per page

    // Adjust the number of posts per page based on the userDevice
    if (userDevice === "Phone") {
      postsPerPage = 2;
    } else if (userDevice === "Tablet" || userDevice === "Desktop") {
      postsPerPage = 4;
    } else if (userDevice === "TV") {
      postsPerPage = 8;
    }

    return Posts.slice((page - 1) * postsPerPage, page * postsPerPage);
  };

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
      const response = await fetchPost(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1; // Updated to increase the page number correctly
      },
      initialData: undefined, // Updated to indicate no initial data
    }
  );

  const lastPostRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((post) => (
            <div key={post.id} className="item post-1">
              <div className="blog-card " style={{ borderRadius: "25px" }}>
                <div
                  className="media-block"
                  style={{
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                  }}
                >
                  <div className="category">
                    <a href="/blog/asdf" title="View all Posts in Design">
                      {post.category}
                    </a>
                  </div>
                  <a href="">
                    <Image
                      width={100}
                      height={100}
                      src={post.image}
                      alt="Why I Switched to Sketch For UI Design"
                      title=""
                      className="blog-img"
                    />

                    <div className="mask"></div>
                  </a>
                </div>
                <div className="post-info">
                  <div className="post-date">{post.date}</div>
                  <a href="blog-post-1.html">
                    <h4 className="blog-item-title">{post.title}</h4>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {isFetching && <SkeletonPost userDevice={userDevice} />}

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
