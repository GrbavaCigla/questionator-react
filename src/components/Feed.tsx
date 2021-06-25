import { useState, useEffect, Component } from "react";
import { supabase } from "../supabaseClient";
import Question from "./Question";

interface IQuestion {
  id: number;
  title: string;
  profiles: { username: string };
}

function Feed() {
  let [feed, setFeed] = useState<IQuestion[]>([]);
  let [question, setQuestion] = useState("");

  useEffect(() => {
    supabase
      .from("questions")
      .select("id, title, profiles ( username )")
      .range(0, 10)
      .then(({ error, data }) => setFeed(data ? data : []));
  }, []);

  async function submitQuestion() {
    const { data, error } = await supabase
      .from("questions")
      .insert([{ title: question, author_id: supabase.auth.user()?.id }]);
  }

  return (
    <div className="flex flex-col mx-auto max-w-2xl px-2">
      <div className="rounded border-2 border-black p-2">
        <textarea
          className="w-full p-2 font-oswald focus:outline-none border-2 rounded border-black resize-none h-32"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Do you have a question? Write it!"
        ></textarea>
        <button
          className="rounded float-right bg-red-600 px-3 py-1 mt-1 text-white font-oswald text-md"
          onClick={submitQuestion}
        >
          Submit
        </button>
      </div>
      {feed.map(({ id, title, profiles }) => (
        <Question key={id} title={title} author={profiles.username} />
      ))}
    </div>
  );
}

export default Feed;
