import "./App.css";
import React, { useState } from "react";
import { StyledContainer } from "./App.styled";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import { ShoppingListItem } from "./ShoppingListItem/ShoppingListItem";
import { ShoppingForm } from "./ShoppingForm/ShoppingForm";

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  function addItem(event) {
    event.preventDefault();
    const form = event.target
    const item = form.elements.itemInput.value;
    setShoppingList([...shoppingList, item]);
    form.reset()
  }

  function deleteItem(itemToDelete) {
    setShoppingList(shoppingList.filter(item=>item!==itemToDelete))
  }

  return (
    <StyledContainer>
      <ShoppingList>
        {!!shoppingList.length &&
          shoppingList.map((item) => <ShoppingListItem key={item} item={item} onDelete={deleteItem}/>)}
      </ShoppingList>
      <ShoppingForm onSubmit={addItem} />
    </StyledContainer>
  );
};

export default App;
