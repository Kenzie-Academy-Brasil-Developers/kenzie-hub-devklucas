import React from 'react'
import ButtonStyled from './styles'

const Button = ({text,...rest}) => {
    return (
        <ButtonStyled type="submit" {...rest}>{text}</ButtonStyled>
    )
}
export default Button 