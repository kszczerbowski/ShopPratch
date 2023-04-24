import "./App.css";
import React, { useState } from "react";
import { StyledContainer } from "./App.styled";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import { ShoppingListItem } from "./ShoppingListItem/ShoppingListItem";
import { ShoppingForm } from "./ShoppingForm/ShoppingForm";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(
      "https://64465c570431e885f00fd919.mockapi.io/products"
    );
    const products = response.data;
    setShoppingList(products);
  };

  const addItem = async (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form.elements.itemInput.value;
    const response = await axios.post(
      "https://64465c570431e885f00fd919.mockapi.io/products",
      { productName: item }
    );
    const newProduct = response.data;
    setShoppingList([...shoppingList, newProduct]);
    form.reset();
  };

  const deleteItem = async (id) => {
    const response = await axios.delete(`https://64465c570431e885f00fd919.mockapi.io/products/${id}`)
    console.log(`Deleted product "${response.data.productName}" with id ${response.data.id}!`)
    setShoppingList(shoppingList.filter((item) => item.id !== id));
  };

  const markAsBought = (event) => {
    console.log('event.target === li: ',event.target === 'LI')
    const item = event.target;
    item.classList.toggle('bought')
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledContainer>
      <ShoppingForm onSubmit={addItem} />
      <ShoppingList>
        {!!shoppingList.length &&
          shoppingList.map((item) => (
            <ShoppingListItem key={item.id} id={item.id} item={item.productName} onDelete={deleteItem} onClick={markAsBought}/>
          ))}
      </ShoppingList>
    </StyledContainer>
  );
};

export default App;
