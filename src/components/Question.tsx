import { useHistory } from "react-router";

interface IProps {
  id: number;
  title: string;
  author: string;
}

function Question({ title, author, id}: IProps) {
  const history = useHistory();

  return (
    <button className="border-2 border-black p-4 my-2 w-full rounded" onClick={() => history.push("/question/" + id)}>
      <p className=" text-xl text-left">{ title }</p>
      <p className=" text-gray-500 text-right">{ author }</p>
    </button>
  );
}

export default Question;
