import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Question from "./Question";

interface IQuestion {
  id: number;
  title: string;
  author: { username: string };
}

function Feed() {
  let [feed, setFeed] = useState<IQuestion[]>([]);
  let [question, setQuestion] = useState("");

  useEffect(() => {
    supabase
      .from("questions")
      .select("id, title, author:author_id ( username )")
      .order("date", { ascending: false })
      .then(({ error, data }) => {setFeed(oldFeed => data ? [...oldFeed, ...data] : []); console.log(error)});
  }, []);

  async function submitQuestion() {
    const { data, error } = await supabase
      .from("questions")
      .insert([{ title: question, author_id: supabase.auth.user()?.id }]);
  }

  return (
    <div className="flex flex-col max-w-2xl px-2 flex-auto" id="feed">
      <div className="rounded border-2 border-black p-2 my-2">
        <textarea
          className="w-full p-2  focus:outline-none border-2 rounded border-black resize-none h-32"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Do you have a question? Write it!"
        ></textarea>
        <button
          className="rounded float-right bg-red-600 px-3 py-1 mt-1 text-white  text-md"
          onClick={submitQuestion}
        >
          Submit
        </button>
      </div>
      {feed.map(({ id, title, author }) => (
        <Question key={id} id={id} title={title} author={author.username} />
      ))}
    </div>
  );
}

export default Feed;
