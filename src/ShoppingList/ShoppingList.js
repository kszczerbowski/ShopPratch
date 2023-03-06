import {StyledShoppingList} from './ShoppingList.styled'

export const ShoppingList = ({children}) => {
    return <StyledShoppingList>
        {children}
    </StyledShoppingList>
}