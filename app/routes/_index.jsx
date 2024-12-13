import Navbar from "../Components/Navbar";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <div className="container mt-5 mx-auto">
      <div className="card  border mx-auto">
        <div className="card-body m-5">
          <h5 className="card-title text-[25px]">Hello Remix</h5>
          <p className="card-text">This is a Home page</p>
          <a href="/about" className="btn bg-blue-400 p-3 mt-8 inline-block text-white">
            Learn More
          </a>
        </div>
      </div>
    </div>
    </>

  );
}
