import {StyledShoppingListItem} from './ShoppingListItem.styled'

export const ShoppingListItem = ({item, onDelete}) => {
    return <StyledShoppingListItem>
        {item}
        <button type='button' onClick={()=>{onDelete(item)}}>Delete</button>
    </StyledShoppingListItem>
}