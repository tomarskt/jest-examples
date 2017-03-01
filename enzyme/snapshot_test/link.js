import React from 'react'
import Icon from './Icon'

const Link = ({children, href, icon}) =>
 (<a  >
    <Icon type={icon} />
    {children}
 </a>)

export default Link