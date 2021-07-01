interface IGroup {
  name: string;
}

function Group(props: IGroup) {
  return (
    <div className="rounded p-2 my-1 border-2 border-black w-full" style={{ marginRight: "auto" }}>
      <h1 className="">{props.name}</h1>
    </div>
  );
}

export default Group;
