// const btn = document.querySelector("#btn");

// console.log("start");

// const login = (username, password, callback) => {
//   setTimeout(() => {
//     callback({ username: username, email: "melikesultanyaprak84@gail.com" });
//   }, 1000);
// };

// // login("melike", "12345", (user) => {
// //     console.log(user.username);
// //     console.log(user.email);
// //   });

// const getPostByUserName = (username, callback) => {
//   setTimeout(() => {
//     callback(["post1", "post2", "post3"]);
//   }, 2000);
// };

// const getPostDetails = (post, callback) => {
//   setTimeout(() => {
//     console.log(post);
//     callback("post details");
//   }, 3000);
// };

// login("melike", "12345", (user) => {
//   console.log(user.username);
//   //   console.log(user.email);

//   getPostByUserName(user.username, (posts) => {
//     console.log(posts);

//     getPostDetails(posts[0], (details) => {
//       console.log(details);
//     });
//   });
// });

// console.log("end");

// console.log(1);
// const login = (username, parola, callback) => {
//   setTimeout(() => {
//     callback({
//       username: username,
//       email: "melikesultanyaprak84@gmail.com",
//       parola,
//     });
//   }, 1000);
// };
// const getPostByUserName = (username, callback) => {
//   setTimeout(() => {
//     console.log(username);
//     callback(["post1", "post2", "post3", username]);
//   }, 1000);
// };
// const getPostDetails = (posts, callback) => {
//   setTimeout(() => {
//     console.log(posts);
//     callback("post details");
//   }, 2000);
// };
// login("melike", "12345", (user) => {
//   console.log(user.username);
//   console.log(user.email);
//   console.log(user.parola);

//   getPostByUserName("sultan", (post) => {
//     console.log(post[0]);

//     getPostDetails("Bugün çok mutluyum", (details) => {
//       console.log(details);
//     });
//   });
// });
// console.log(2);
function displayCountry(country) {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    setCountry(data[0]);
  });
}

function setCountry(data) {
  const html = `
  <div class="col-4 ">
 <div class="card " style="width: 13rem;">
  <img src="${data.flags.png}" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">${data.name.common}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Population: ${(
          data.population / 1000000
        ).toFixed(1)}</li>
        <li class="list-group-item">Region: ${data.region}</li>
        <li class="list-group-item">Languages: ${Object.values(
          data.languages
        )}</li>
      </ul>
      
  </div>
</div>
</div>
 `;
  document
    .querySelector(".container .row")
    .insertAdjacentHTML("beforeend", html);
}
setTimeout(() => {
  displayCountry("turkey");
}, 1000);

setTimeout(() => {
  displayCountry("france");
}, 2000);

setTimeout(() => {
  displayCountry("usa");
}, 3000);
