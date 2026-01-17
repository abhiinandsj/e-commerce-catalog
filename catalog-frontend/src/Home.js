import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  return (
    // <div className="page">
      <div className="card" style={{textAlign:"center"}}>
        <h1>Product Catalog</h1>
        <p>Select your role</p>
        <button onClick={() => nav("/admin")}>Admin</button>
        <button onClick={() => nav("/user")}>User</button>
      </div>
//   </div>
  );
}


export default Home;
