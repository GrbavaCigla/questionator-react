import Group from "../components/Group";

function Groups() {
  return (
    <div className="hidden md:block max-w-xs my-2 p-2 flex-auto">
      <h1 className=" text-xl">Groups (coming soon)</h1>
      {Array(6)
        .fill("Test")
        .map((name, index) => (
          <Group name={name} key={index}/>
        ))}
    </div>
  );
}

export default Groups;
