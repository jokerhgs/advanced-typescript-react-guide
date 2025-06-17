"use client";
import { useOptimistic, useState, useRef } from "react";

type CommentProps = {
  text: string;
  isPending: boolean;
};

export const CommentForm = () => {
  const [comments, setComments] = useState<CommentProps[]>([
    { text: "loved the optimistic", isPending: false },
  ]);
  const [newComment, setNewComment] = useState<string>("");
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: string) => [
      ...state,
      { text: newComment, isPending: true },
    ]
  );
  const formRef = useRef(null);

  const addComment = async () => {
    addOptimisticComment(newComment);
    await submitToServer(newComment);
    setComments([...comments, { text: newComment, isPending: false }]);
  };

  return (
    <div className="w-96 mx-auto mt-4 shadow p-10">
      <form
        className="flex flex-row gap-4 w-auto"
        action={addComment}
        ref={formRef}
      >
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewComment(e.target.value);
          }}
          className="border border-gray-500 px-4 rounded-md"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>

      <div className="mt-10">
        {optimisticComments.map((comment, index) => (
          <div
            className="w-64 flex flex-row justify-between border-b border-gray-600"
            key={index}
          >
            <span>{comment.isPending ? "Pending" : comment.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const submitToServer = async (text: string) => {
  console.log(text, "is added to database");
  return await new Promise((r) => setTimeout(r, 1000));
};
