import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
const RegisterForm = () => {
  const [userData,setUserData] = useState({
    username:'',
    useremail:'',
    password:'',
    confirmPassword:''
  })

const formHandler = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post('http://localhost:3000/users', userData);
    setUserData({
      username: '',
      useremail: '',
      password: '',
      confirmPassword: ''
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log('Form Handling');
};
  const changeEventData = (e) => {
  const { name, value } = e.target;
  setUserData((prev) => ({ ...prev, [name]: value }));
  console.log('changeEventData Handling', name);
};
  return (
    
    <>
    <h1>Registration page</h1>
<Navbar/>

<form className="max-w-md mx-auto" onSubmit={formHandler}>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="username"
      value={userData.username}
      id="username"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="Enter Full Name"
      onChange={changeEventData}
      required
    />
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="email"
      name="useremail"
      id="useremail"
      value={userData.useremail}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="Enter Email"
      onChange={changeEventData}
      required
    />
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="password"
      name="password"
      id="password"
      value={userData.password}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="Enter Your Password"
      onChange={changeEventData}
      required
    />
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="password"
      name="confirmPassword"
      id="confirmPassword"
      value={userData.confirmPassword}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="Enter Your Confirm Password"
      onChange={changeEventData}
      required
    />
  </div>

  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
 >
    Submit
  </button>
</form>

    </>
  )
}

export default RegisterForm