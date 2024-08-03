//Controlled elements:
//  The Input field and select which maintain there own state inside the DOM,it makes hard to read there values,so it's not ideal.In react we will keep states in on central place inside the react application not inside the DOM, we use the technique called controlled elements,it is React who controls and owns the state of these input field and no longer DOM,To keep this input the data we need state to store the data,and the form data will change overtime so we use state to be sync with data.
//To perform the controlled elements teq, there are three steps
//1.Create the a piece of state   2.now we the value of state as input    3.connect the state
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: true },
// ]; //we create the object 'initialItems' and initialize the values
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onToggleitem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats item={items} />
    </div>
  );
}
