import React from 'react'
import Icon from 'frankel-uk/Icon'

const Link = ({children, href, icon}) =>
 (<div>
    <Icon type={icon} />
    {children}
 </div>)

export default Link