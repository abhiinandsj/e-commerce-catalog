import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => nav("/"));
  };

  if (!form) return <p>Loading...</p>;

  return (
    // <div className="page">
    <div className="card">
      <h2>Edit Product</h2>
      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={change} /><br/>
        <input name="description" value={form.description} onChange={change} /><br/>
        <input name="price" value={form.price} onChange={change} /><br/>
        <input name="stock" value={form.stock} onChange={change} /><br/>
        <input name="imageUrl" value={form.imageUrl || ""} onChange={change} /><br/>
        <button>Update</button>
      </form>
    </div>
    // </div>
  );
}

export default EditProduct;
