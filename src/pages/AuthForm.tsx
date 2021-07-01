import { useState } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../supabaseClient";

interface IProps {
  _login?: boolean;
}

const defaultProps: IProps = {
  _login: false,
};

function AuthForm({ _login }: IProps) {
  let [login, setLogin] = useState(_login);

  const history = useHistory();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorState, setError] = useState<Error | null>(null);

  async function submit() {
    if (login) {
      let { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });

      if (error) {
        setError(error);
        return;
      }
    } else {
      let { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        setError(error);
        return;
      }
    }

    history.push("/");
  }

  return (
    <div className="p-4 w-full sm:w-min absolute inset-1/2 transform -translate-x-1/2">
      <div className="transform -translate-y-1/2">
        <h1 className=" my-2 text-3xl text-center">
          {login ? "Log in" : "Register"}
        </h1>
        <input
          className="rounded  italic text-xl p-2 border-2 border-black focus:outline-none focus:ring-4 ring-red-600 w-full sm:w-96 my-2"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-Mail"
        />
        <input
          className="rounded  italic text-xl p-2 border-2 border-black focus:outline-none focus:ring-4 ring-red-600 w-full sm:w-96 my-2"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <p className="{error ? block : hidden} text-red-500  text-center">
          {errorState?.message}
        </p>
        <button
          className="rounded bg-red-600 w-full py-2 text-white  text-2xl my-2 cursor-pointer"
          onClick={submit}
        >
          {login ? "Log in" : "Register"}
        </button>
        <p className=" text-center">
          {login ? "Don't" : "Already"} have an account?{" "}
          <button
            onClick={() => setLogin(!login)}
            className="text-blue-400 font-bold"
          >
            {login ? "Register" : "Log in"}
          </button>{" "}
          instead!
        </p>
      </div>
    </div>
  );
}

AuthForm.defaultProps = defaultProps;

export default AuthForm;
