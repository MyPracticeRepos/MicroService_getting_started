import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className={"card"}
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList  comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  return <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
  </div>;
};
