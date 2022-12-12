import { Link } from "react-router-dom"
const About = () =>{
    return(
        <div className="Page2">
            <h1>This is About Page</h1>
            <div className="MyCard"><h1>Good Afternoon!!!</h1></div>
            <button className="Mybutton"> <Link to='/home'>Goto Home</Link></button>
        </div>       
    )
}
export default About