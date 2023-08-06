import { useRef, useState } from "react";
import classes from "../styles/NewProduct.module.css";
import { Button } from "antd";

function NewProduct() {
  const [isInvalid, setIsInvalid] = useState(false);

  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  function addProductHandler(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;

    if (!title || title.trim() === "" || !price || price.trim() === "") {
      setIsInvalid(true);
      return;
    }
    const newProduct = JSON.stringify({ title, price, description });
    fetch("/api/products/", {
      method: "POST",
      body: newProduct,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <form className={classes.form} onSubmit={addProductHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" id="number" ref={priceRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" ref={descriptionRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid title and price</p>}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
}

export default NewProduct;
