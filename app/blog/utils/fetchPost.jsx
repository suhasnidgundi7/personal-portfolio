export const PostPerPage = (userDevice) => {
  let postsPerPage = 4; // Default number of posts per page

  // Adjust the number of posts per page based on the userDevice
  if (userDevice === "Phone") {
    postsPerPage = 2;
  } else if (userDevice === "Tablet" || userDevice === "Desktop") {
    postsPerPage = 4;
  } else if (userDevice === "TV") {
    postsPerPage = 8;
  }

  return postsPerPage;
};

const fetchPost = async (Posts, userDevice, page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const postsPerPage = PostPerPage(userDevice);

  return Posts.slice((page - 1) * postsPerPage, page * postsPerPage);
};

export default fetchPost;
