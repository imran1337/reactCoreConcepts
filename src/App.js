import React, { useState } from "react";
import "./App.css";

const products = [
  { name: "Photoshop", price: 90.99 },
  { name: "Adobe", price: 80.99 },
  { name: "Illustrator", price: 60.92 },
  { name: "Adobe Reader", price: 8.92 },
];
function App() {
  const myName = "Imran Khan";
  const style = {
    color: "red",
    textAlign: "center",
    marginTop: "50px",
  };
  // const frndList = ["imran", "sobuj", "sojib"];
  const lo = true;
  return (
    <div>
      <Counter></Counter>
      <h1 style={style}>My Heading {myName}</h1>
      <h3 style={{ color: "blue", fontSize: "60px", textAlign: "center" }}>
        Hello
      </h3>
      {/* {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))} */}
      {products
        .filter((p) => p.price > 50)
        .map((product) => (
          <Product name={product.name} price={product.price}></Product>
        ))}
      {/* {lo && frndList.map(n => <Person name={n}></Person>)} */}
    </div>
  );
}

const Product = (props) => {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "20px",
    textAlign: "center",
  };
  const { name, price } = props;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>US${price}</h1>
      <button>Buy now</button>
    </div>
  );
};

function Person(props) {
  const { name, data } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
      <h4>La la la {data}</h4>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      {count > 0 && (
        <button onClick={() => setCount(count - 1)}>decrease</button>
      )}
    </div>
  );
};

export default App;
