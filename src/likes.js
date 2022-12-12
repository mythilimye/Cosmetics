import  React,{Component} from "react";
 import Hoc from "./hoc";
 class Likes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0,
        }
    }

    handleClick=()=>{
        this.setState({
            likes:this.state.likes+1
        })
    }
    render(){
        return(
            <diV>
                {this.state.likes}<br/>
                <button onClick={this.handleClick}>Likes!</button>
            </diV>
        )
    }
}
const EnhancedLikes=Hoc(Likes);
export default EnhancedLikes;