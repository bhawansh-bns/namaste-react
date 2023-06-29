import React, { createContext } from "react"
import User from "./User";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        // console.log(this.props.name + " Child Constructor")
    }

    componentDidMount() {
        // console.log(this.props.name + " Child componentDidMount")
        //API calls 
    }


    render(){
        // console.log(this.props.name + " Child Render")

        return(
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @bhawansh_bns</h4>
                <h4>{this.state.count} </h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+2,
                    })
                }}>COUNT!</button>

            </div>
        )
    }
}

export default UserClass;