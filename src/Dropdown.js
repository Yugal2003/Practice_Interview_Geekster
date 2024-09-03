import React, { useState } from "react";

const categories = [
  {
    name: "fruits",
    items: ["apple", "banana", "orange"]
  },
  {
    name: "vegetables",
    items: ["carrot", "broccoli", "spinach"]
  },
  {
    name: "dairy",
    items: ["milk", "cheese", "yogurt"]
  },
  {
    name: "chicken",
    items: ["bakra","murghi","aanda"]
  }
];

const Dropdown = () => {
  const [categoryName,setCategoryName] = useState(null);
  const [categoryItem,setCategoryItem] = useState([]);

  return (
    <div>
        <select onChange={(e) => { setCategoryName(e.target.value)
          const category = categories.find(c => c.name === e.target.value)
          setCategoryItem(category ? category.items : [])
        }}>
          <option value="">Select an Name</option>
          {
            categories.map((item) => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))
          }
        </select>    

        <select disabled={!categoryName}>
          <option>Select an Item</option>
          {
            categoryItem.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
    </div>
  );
};

export default Dropdown;


