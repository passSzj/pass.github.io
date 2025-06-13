var posts=["2025/06/13/hello-world/","2025/06/13/Context/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };