import Feed from "../components/Feed";
import Groups from "../components/Groups";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-start">
        <Feed />
        <Groups />
      </div>
    </>
  );
}

export default Home;
