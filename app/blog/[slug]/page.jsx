import React from 'react'

export const metadata = {
    title: "Post 1",
    description: "",
  };
  

const Post = ({params}) => {

  return (
    <div>Post : {params.slug}</div>
  )
}

export default Post