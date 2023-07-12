import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./SkeletonPost.css";

const SkeletonPost = ({ userDevice, Status, Error }) => {

  let skeletonCount = 0;

  if (userDevice === "Phone") {
    skeletonCount = 2;
  } else if (userDevice === "Tablet" || userDevice === "Desktop") {
    skeletonCount = 4;
  } else if (userDevice === "TV") {
    skeletonCount = 8;
  }

  return (
    <>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={uuidv4()} className="item skeleton-post">
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
              <div className="skeleton-image glow-animation"></div>
            </div>
            <div className="post-info">
              <div className="skeleton-category glow-animation"></div>
              <br />
              <div className="skeleton-title glow-animation"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonPost;
