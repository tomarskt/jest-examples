import React from 'react'
import RaceTimeStatus from 'Frankel/components/RaceTimeStatus'

export function FKEventHeaderTemplate(props) {

    return (<div>
        <RaceTimeStatus event={props.event} />      
    </div>)
}