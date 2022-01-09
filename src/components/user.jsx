// const User = (props) =>{
//    return(
//        <div>
//            <h1>{props.name}</h1>
//            <h4>{props.description}</h4>
//        </div>
//    );
// }

// export default User;

import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            planet:"earth",
        }
        console.log("Hey I am from constructor");
    }

    componentDidMount(){
        console.log("Hey i am from ComponentDidMount");
        this.setState({planet:"Mars"});
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("I am from get derived state from props.");
    //     return {planet:"Mars"};
    // }

    shouldComponentUpdate(nextProp, nextState){
        console.log("I am from should component update.");
        console.log({
            nextProp,nextState,
        });
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("I am from get snapshot before update.");
        console.log({
            prevProp,prevState
        });
        return true;
    }

    componentDidUpdate(){
        console.log("Hey i am from componet did update.")
        console.log(this.state);
    }
    render() {
        console.log("Hey i am from render()");
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.description}
                </p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}

export default User;