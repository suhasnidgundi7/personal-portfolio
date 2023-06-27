import React from "react";

const post = () => {
  return (
    <>
      {/* <!-- Blog Post 1 --> */}
      <div className="item post-1">
        <div className="blog-card">
          <div className="media-block">
            <div className="category">
              <a href="index.html#" title="View all posts in Design">
                Design
              </a>
            </div>
            <a href="">
              <img
                src="assets/images/blog/blog_post_1.jpg"
                className="size-blog-masonry-image-two-c"
                alt="Why I Switched to Sketch For UI Design"
                title=""
              />
              <div className="mask"></div>
            </a>
          </div>
          <div className="post-info">
            <div className="post-date">05 Mar 2020</div>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Why I Switched to Sketch For UI Design
              </h4>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Post 1 --> */}
    </>
  );
};

export default post;
