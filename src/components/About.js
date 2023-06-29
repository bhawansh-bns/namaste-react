import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy Location",
                avatar_url: "default",
            }
        }

        // console.log("Parent Constructor")

    }
    async componentDidMount() {
        // console.log("Parent componentDidMount")
        const data = await fetch(" https://api.github.com/users/bhawansh-bns");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(this.state.userInfo);

    }

    render(){
        // console.log("Parent Render")
        const { name } = this.state.userInfo;
        return (
            <div>
              <h1> About Class Component</h1>
              <h2> Learning Class Based Components.</h2>
              {/* <User name={"Bhawansh (funtional)"} /> */}
              <UserClass name={name} />

            </div>
          );
    }
}
  export default About;
  