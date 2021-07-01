import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../supabaseClient";

function Account() {
  async function getProfileUsername() {
    return await supabase.from("profiles").select("username").eq("id", supabase.auth.user()?.id).limit(1);
  }

  useEffect(() => {
    getProfileUsername().then(({ error, data }) => setUsername(data![0].username));
  }, []);

  const [usernameState, setUsername] = useState("");

  return (
    <>
      <Header />
      <div className="container border-2 border-black rounded p-2 my-2 mx-auto">
        <div className="w-full flex justify-center">
          <p className="text-xl">Username: </p>
          <div className="w-4"></div>
          <input className="text-md p-1 focus:outline-none border-2 border-black rounded" value={ usernameState } />
        </div>
        <button
          className="rounded float-right bg-red-600 px-3 py-1 mt-1 text-white  text-md"
        >
          Submit
        </button>
        <h2 className="text-xl text-center pt-4">More to come soon...</h2>
      </div>
    </>
  );
}

export default Account;
