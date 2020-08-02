import React, { useState, useEffect } from "react";
// import axios from "axios";
export default ({ comments }) => {
  // const [comments, setComments] = useState([]);
  // const fetchCommentList = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  // };
  // useEffect(() => {
  //   fetchCommentList();
  // }, []);
  const renderdComments = comments.map((comment) => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'comment is pending';
    }
    if (comment.status === 'rejected') {
      content = 'comment is rejected';
    }
    return <li key={comment.id}>{content}</li>;
  });
  return (
    <div>
      <ul>{renderdComments}</ul>
    </div>
  );
};
