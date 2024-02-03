import React from 'react'
import {Link} from 'react-router-dom'
import './mentor.css'
const Mentor = () => {
  return (
    <div className="userTable">
         {/* we cant use html link hence we use "Link from react dom" */}
         
            <Link to={"/add"} className="addButton">Add mentor</Link>  
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>s. No</th>
                        <th>User name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Shreyash</td>
                            <td>s@gmai.com</td>
                            <td className="actionButton">
                                <button>Delete</button>
                                <Link to={"/edit"}>Edit</Link>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
  )
}

export default Mentor