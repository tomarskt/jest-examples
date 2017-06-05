import React from 'react'
import Icon from 'frankel-uk/Icon'

const Link = ({children, href, icon}) => {
    debugger;
    console.log('debug checkpoint');
    return <div>
        <Icon type={icon} />
        {children}
    </div>
}


export default Link