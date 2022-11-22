import React from 'react'
import './Alerts.css'

function Alerts(props) {
    return (
        <div className="alert alert-secondary" role="alert">
            {props.info}
        </div>
    )
}

export default Alerts
