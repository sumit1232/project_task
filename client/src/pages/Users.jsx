import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  // Sample API
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users Page</h1>
<Navbar/>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name:
              </th>
              <th scope="col" class="px-6 py-3">
                Email:
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {users.map(user => (
                  <p key={user.id}>{user.name} </p>
                ))}
              </td>
              <td class="px-6 py-4">
                  {users.map(user => (
                  <p key={user.id}>{user.email} </p>
                ))}
              </td>
               <td class="px-6 py-4">
                  {users.map(user => (
                  <p key={user.id}>{user.username} </p>
                ))}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  )
}

export default Users