import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList({ admin }) {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

  const load = () => {
    fetch("http://localhost:8080/api/products")
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to load products:", err));
  };

  useEffect(() => {
    load();
  }, []);

  const del = (id) => {
    if (!window.confirm("Delete this product?")) return;
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "DELETE"
    }).then(load);
  };

  return (
    <div className="product-card">
      <h2>
        Product Catalog
        {admin && <button onClick={() => nav("/add")}>Add Product</button>}
      </h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            {admin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan={admin ? 5 : 4} align="center">
                No products found
              </td>
            </tr>
          )}

          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price} Rs</td>
              <td>{p.stock}</td>
              <td>{p.status}</td>
              {admin && (
                <td>
                  <button onClick={() => nav(`/edit/${p.id}`)}>Edit</button>
                  <button onClick={() => del(p.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
