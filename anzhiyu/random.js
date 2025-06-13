var posts=["2025/06/13/hello-world/","2025/02/13/Context/","2024/05/01/摄影日记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };