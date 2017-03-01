import * as React from 'react'
import RaceTimeStatus from 'Frankel/components/RaceTimeStatus'

export function FKEventHeaderTemplate(props) {
    console.log(RaceTimeStatus)
    return (<div>
       <RaceTimeStatus event={props.event}/>
    </div>)
}