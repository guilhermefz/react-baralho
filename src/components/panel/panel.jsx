import { Component } from "react";
import './panel.css'

class Panel extends Component{
    constructor(){
        super()
        this.state = {
            title: 'Titulo del panel'
        }
    }

    render(){
        return(
            <section className="panel">
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel