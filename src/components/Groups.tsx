import Group from "../components/Group";

function Groups() {
  return (
    <div className="hidden md:block max-w-xs my-2 p-2 flex-auto">
      <h1 className="font-oswald text-xl">Groups</h1>
      {Array(6)
        .fill("Test")
        .map((name) => (
          <Group name={name} />
        ))}
    </div>
  );
}

export default Groups;
