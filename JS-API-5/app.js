
const x = false;
const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve({ username: username, password });
      } else {
        reject("ERROR!!!");
      }
    }, 1000);
  });
};

const getPostByUserName = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3", "post4"]);
    }, 2000);
  });
};

const getPostDetails = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("post details");
    }, 3000);
  });
};

login("melike", "12345")
  .then((user) => {
    console.log(user);
    return getPostByUserName(user.username);
  })
  .then((posts) => {
    console.log(posts);
    return getPostDetails(posts[1]);
  })
  .then((details) => {
    console.log(details);
  })
  .catch((err) => console.log(err));
