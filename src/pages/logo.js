import React from "react"
import logo from '../assets/logo.png'

class Logo extends React.Component {
    reder () {
        return (
            <img src={logo}  alt="Finansig"/>
        )
    }
}

export default Logo