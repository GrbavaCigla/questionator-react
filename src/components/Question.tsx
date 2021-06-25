interface IProps {
  title: string;
  author: string;
}

function Question({ title, author}: IProps) {
  return (
    <div className="border-2 border-black p-4 my-2 w-full rounded">
      <p className="font-oswald text-xl">{ title }</p>
      <p className="font-oswald text-gray-500 text-right">{ author }</p>
    </div>
  );
}

export default Question;
