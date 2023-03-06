import {StyledForm, StyledInput, StyledButton} from './ShoppingForm.styled'

export const ShoppingForm = ({onSubmit}) => {
    return <StyledForm onSubmit={onSubmit}>
        <StyledInput name="itemInput"/>
        <StyledButton>Add</StyledButton>
    </StyledForm>
}