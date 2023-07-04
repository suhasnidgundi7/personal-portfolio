import React from "react";
import Post from "./components/Post";

const Posts = [
  {
    id: 1,
    category: "Design",
    image: "/assets/images/blog/blog_post_1.jpg",
    date: "05 Mar 2023",
    title: "Posts 1",
    slug: "posts-1",
  },
  {
    id: 2,
    category: "Design",
    image: "/assets/images/blog/blog_post_2.jpg",
    date: "10 Apr 2023",
    title: "Posts 2",
    slug: "posts-2",
  },
  {
    id: 3,
    category: "Design",
    image: "/assets/images/blog/blog_post_3.jpg",
    date: "15 May 2023",
    title: "Posts 3",
    slug: "posts-3",
  },
  {
    id: 4,
    category: "Design",
    image: "/assets/images/blog/blog_post_4.jpg",
    date: "20 Jun 2023",
    title: "Posts 4",
    slug: "posts-4",
  },
  {
    id: 5,
    category: "Design",
    image: "/assets/images/blog/blog_post_1.jpg",
    date: "25 Jul 2023",
    title: "Posts 5",
    slug: "posts-5",
  },
  {
    id: 6,
    category: "Design",
    image: "/assets/images/blog/blog_post_2.jpg",
    date: "30 Aug 2023",
    title: "Posts 6",
    slug: "posts-6",
  },
  {
    id: 7,
    category: "Design",
    image: "/assets/images/blog/blog_post_3.jpg",
    date: "04 Sep 2023",
    title: "Posts 7",
    slug: "posts-7",
  },
  {
    id: 8,
    category: "Design",
    image: "/assets/images/blog/blog_post_4.jpg",
    date: "09 Oct 2023",
    title: "Posts 8",
    slug: "posts-8",
  },
];

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
              <Post Posts={Posts}/>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Subpage --> */}
    </>
  );
};

export default blog;
