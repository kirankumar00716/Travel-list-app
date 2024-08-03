import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); //creating the state for input text feild using description value
  const [quantity, setQuantity] = useState(1); //creating the state for quantity

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} //setting the quantity values using setQuantity function dynamically
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (
            num //this will create the numbers from 1-20 and we use map function to generate the option values
          ) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
