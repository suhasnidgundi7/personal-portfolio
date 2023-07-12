import React from "react";
import Image from "next/image";

const PostItem = ({ post }) => {
  return (
    <div className="item post-1">
      <div className="blog-card" style={{ borderRadius: "25px" }}>
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
  );
};

export default PostItem;
