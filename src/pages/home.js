import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        home
        <button><Link to="/contact">Contact</Link></button>
        <button><Link to="/services"></Link>Services</button>
        </div>
  )
}
 export default Home