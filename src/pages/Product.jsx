import React, { useState } from "react";
import "./product.css";

function Productform() {
  const [Form, setForm] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_category: "",
    product_image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "product_image") {
      setForm({ ...Form, product_image: files[0] });
    } else {
      setForm({ ...Form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", Form.product_name);
    formData.append("product_description", Form.product_description);
    formData.append("product_price", Form.product_price);
    formData.append("product_category", Form.product_category);
    formData.append("product_image", Form.product_image);

    try {
      const res = await fetch("https://login-signup-backend-2aw2.onrender.com/product", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="product_name"
              value={Form.product_name}
              onChange={handleChange}
              required
            />
            <label>Product Name</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="product_description"
              value={Form.product_description}
              onChange={handleChange}
              required
            />
            <label>Description</label>
          </div>

          <div className="input-box">
            <input
              type="number"
              name="product_price"
              value={Form.product_price}
              onChange={handleChange}
              required
            />
            <label>Price</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="product_category"
              value={Form.product_category}
              onChange={handleChange}
              required
            />
            <label>Category</label>
          </div>

          <div className="file-box">
            <label>Upload Image</label>
            <input
              type="file"
              name="product_image"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Productform;