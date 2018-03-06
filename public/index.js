/* global axios */

axios.get("http://localhost:3000/posts").then(function(response) {
  var posts = response.data;
  console.log(posts);

  var template = document.querySelector("#post-card");
  var postContainer = document.querySelector(".card-deck");

  posts.forEach(function(post) {
    var clone = template.content.cloneNode(true);

    clone.querySelector(".card-title").innerText = post.title;
    clone.querySelector(".card-text").innerText = post.body;

    postContainer.appendChild(clone);
  });
});
