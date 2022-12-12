import  React,{Component} from "react";
 
export default class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Comments:0,
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
                {this.state.Comments}<br/>
                <button onClick={this.handleClick}>Add Comment</button>
            </diV>
        )
    }
}