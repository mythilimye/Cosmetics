import { Link } from "react-router-dom"
const Home = () =>{
    return(
        <div className="Page1">
            <h1>This is Home Page</h1>
            <div className="MyCard"><h1>Hello Sckt CSE Students !!</h1></div>
            <button className="Mybutton"> <Link to='/about'>Goto Page 2</Link></button>
        </div>
    )
}
export default Home