import React from 'react'
import ButtonStyled from './styles'

const Button = ({children,...rest}) => {
    return (
        <ButtonStyled type="submit" {...rest}>{children}</ButtonStyled>
    )
}
export default Button 