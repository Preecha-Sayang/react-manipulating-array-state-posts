import { postData } from "../raw-data/post-data";
import { useState } from "react";



function Posts() {

  const [love, islove] =useState(postData.map(() => 0))

  function addlike(index){
    islove(prev => prev.map((like, i) => i === index ? like + 1 : like))
  }
  function dislike(index){
    islove(prev => prev.map((like, i) => i === index ? Math.max(like - 1, 0) : like))
  }



  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">

        {postData.map((item, index) => {
        return(
        <div class="post-item" key={item.id}>
          <div class="post-header">
            <h2>{item.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{love[index]}</span>
            </div>
          </div>
          <p class="post-content">
            {item.content}
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={()=> addlike(index)}>Like</button>
            <button class="dislike-button" onClick={()=> dislike(index)}>Dislike</button>
          </div>
        </div>
      )})}
      </div>
    </div>
  );
}

export default Posts;
