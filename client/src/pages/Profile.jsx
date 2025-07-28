import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar';

const Profile = () => {
      const [users, setUsers] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3000/users') 
          .then(response => response.json())
          .then(data => setUsers(data));
      }, []);
  return (
 <>
 <h1>Profile Page</h1>
 {/* Navbar */}
 <Navbar/>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name:
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                </th>
             
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {users.map(user => (
                  <p key={user.id}>{user.username} </p>
                ))}
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {users.map(user => (
                  <p key={user.id}>{user.useremail} </p>
                ))}
                </td>
                <td className="px-6 py-4">
                    <a href="/editform" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
      
        </tbody>
    </table>
</div>

 </>
  )
}

export default Profile