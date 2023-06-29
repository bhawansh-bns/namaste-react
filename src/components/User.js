const User = (props) => {
    console.log("Functional Comp")
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: @bhawansh_bns</h4>
        </div>
    )
}

export default User;