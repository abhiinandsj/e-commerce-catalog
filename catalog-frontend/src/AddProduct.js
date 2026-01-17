import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: ""
  });
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("stock", form.stock);
    if (image) data.append("image", image);

    fetch("http://localhost:8080/api/products", {
      method: "POST",
      body: data
    }).then(() => nav("/admin"));
  };

 return (
  // <div className="page">
    <div className="card">
      <h2>Add Product</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={change} />
        <input name="description" placeholder="Description" onChange={change} />
        <input name="price" placeholder="Price" onChange={change} />
        <input name="stock" placeholder="Stock" onChange={change} />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <button>Add</button>
      </form>
    </div>
  // </div>
);

}

export default AddProduct;
