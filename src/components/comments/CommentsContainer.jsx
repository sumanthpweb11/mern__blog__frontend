import { useEffect, useState } from "react";
import { getCommentsData } from "../../data/comments";

import CommentForm from "./CommentForm";
import Comment from "./Comment";

const CommentsContainer = ({ className, loggedInUserId }) => {
  const [comments, setComments] = useState([]);
  // Get Main Comments i.e not the replied comments
  const mainComments = comments.filter((comment) => comment.parent === null);

  const [affectedComment, setAffectedComment] = useState(null);

  console.log("comments", comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };

    setComments((currState) => {
      return [newComment, ...currState];
    });

    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return {
          ...comment,
          desc: value,
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const deletedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(deletedComments);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };
  return (
    <div className={` ${className} `}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />

      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              comment={comment}
              loggedInUserId={loggedInUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandler}
              updateComment={updateCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={getRepliesHandler(comment._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsContainer;
