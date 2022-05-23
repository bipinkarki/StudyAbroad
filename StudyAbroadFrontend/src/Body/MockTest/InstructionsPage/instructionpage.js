import { Component } from "react";
import { Link } from 'react-router-dom'

class InstructionPage extends Component{
    render(){
        return(
            <>
            <h1>Instruction page</h1>
            <button><Link to={'/test/reading'}>START TEST</Link></button>
            </>
        )
    }
}

export default InstructionPage