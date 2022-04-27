import React from 'react'
import sucess from '../../assets/sucess.png'
import error from '../../assets/error.png'
import {MessageBox} from './styles'

const MessageStatus = ({status}) =>{
    return (
        <MessageBox src={status === 'sucess' ? sucess : error } alt='status registro'/>
    )
}
export default MessageStatus