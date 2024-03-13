import { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Ett kilo äpplen",
    },
    {
      id: 2,
      checked: false,
      item: "kakor",
    },
    {
      id: 3,
      checked: false,
      item: "Kalles Kaviar",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Grocery list" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
