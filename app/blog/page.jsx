import React from "react";
import Post from "./components/Post";

const blog = () => {
  return (
    <>
      {/* <!-- Blog Subpage --> */}
      <div className="page-title">
        <h2>Blog</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="blog-masonry two-columns clearfix">
              <Post/>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Subpage --> */}
    </>
  );
};

export default blog;
