import Image from "next/image";
import React from "react";
import "../blog.css"

const post = () => {
  return (
    <>
      {/* <!-- Blog Post 1 --> */}
      <div className="item post-1" >
        <div className="blog-card " style={{borderRadius:"25px"}} >
          <div className="media-block" style={{borderTopLeftRadius:"25px", borderTopRightRadius:"25px"}}>
            <div className="category">
              <a href="/blog/asdf" title="View all posts in Design">
                Design
              </a>
            </div>
            <a href="">
              <Image
              
                  width={100}
                  height={100}
                  src="/assets/images/blog/blog_post_1.jpg"
                  alt="Why I Switched to Sketch For UI Design"
                  title=""
                  className="blog-img"
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
