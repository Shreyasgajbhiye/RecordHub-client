import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './mentor.css'
import axios from 'axios'
const Mentor = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const response = await axios.get("http://localhost:8000/api/getAll");
            setUsers(response.data);
        }
        fetchData()
    },[])
  return (
    <div className="userTable">
         
            <Link to={"/add"} className="addButton">Add mentor</Link>  
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>s. No</th>
                        <th>User name</th>
                        <th>email</th>
                        <th>Batch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            users.map((user, index)=>{
                                return(
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.fname} {user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.batch}</td>
                                        <td className="actionButton">
                                            <button>Delete</button>
                                            <Link to={"/edit"}>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        } 
                    </tbody>
            </table>
        </div>
  )
}

export default Mentor