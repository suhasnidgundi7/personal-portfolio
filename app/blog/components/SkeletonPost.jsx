import React from "react";

const SkeletonPost = ({ userDevice }) => {
  let skeletonCount = 0;

  if (userDevice === "Phone") {
    skeletonCount = 2;
  } else if (userDevice === "Tablet" || userDevice === "Desktop") {
    skeletonCount = 4;
  } else if (userDevice === "TV") {
    skeletonCount = 8;
  }

  return (
    <div>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index} className="item post-1">
          <div
            className="blog-card glow-animation"
            style={{ borderRadius: "25px" }}
          >
            <div
              className="media-block"
              style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
            >
              <div
                className="skeleton-image glow-animation"
                style={{ height: "150px", width: "100%" }}
              ></div>
            </div>
            <div className="post-info">
              <div className="skeleton-category glow-animation" style={{height:"20px", width:"50%"}}></div>
              <br />
              <div className="skeleton-title glow-animation" style={{height:"20px"}}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPost;
