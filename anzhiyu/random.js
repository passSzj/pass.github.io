var posts=["2025/06/13/hello-world/","2025/06/13/Context/","2025/06/13/摄影日记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };