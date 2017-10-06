import React from 'react'; // for typescript to work, module must have module.exports.default={xyz}
import RaceTimeStatus from 'Frankel/components/RaceTimeStatus'

export function FKEventHeaderTemplate(props) {
    console.log(RaceTimeStatus)
    return (<div>
       <RaceTimeStatus event={props.event}/>
    </div>)
}