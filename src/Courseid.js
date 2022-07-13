import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Courseid = () => {
    const navigate = useNavigate();
    const {courseid} = useParams();
  return (
    <div>
        <h1>URL Param is: {courseid} </h1>
        <button
            onClick={() =>{
                navigate("/dashboard", {state: courseid})
            }}
            className="btn btn-warning"
        >
            Price
        </button>
        <Link to="/dashboard" state={"DJANGO"} >Test Link</Link>
    </div>
  )
}

export default Courseid