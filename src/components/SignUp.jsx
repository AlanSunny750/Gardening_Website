import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
let url = 'http://localhost:3000';
let appUrl = 'http://localhost:5173';

const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassord] = useState('')

const [cofnirmPassword, setConfirmPassword] = useState('')

// 
const SubmitData = () => {
  console.log({name, lastName, email, password, cofnirmPassword})

  fetch(url + '/signup', {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json'
      },
    body: JSON.stringify({name, lastName, email, password})
  }).then(response => response.text())
  .then(info => {

  if(info == "0") {
      alert('An account with this email already exists!')
  } 
  else if(info == "3") {
      window.location.href = appUrl + '/login'
  }

  })
  .catch(error => console.log('Error: ' + error))

}

  return (
    <div className="main">
      <div className="header w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 mb-4">Accounts</h1>
        <p>Thanks for choosing us!</p>
      </div>

      <div className="signUp flex flex-col gap-5 items-center mt-16">
        <div className="name flex gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            className="border border-blueGray-700 px-4 py-2 rounded-md w-[130px]"
            onChange={(e) => {setName(e.target.value)}}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-blueGray-700 px-4 py-2 rounded-md w-[130px]"
            onChange={(e) => {setLastName(e.target.value)}}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
          onChange={(e) => {setPassord(e.target.value)}}

        />
        <input
          type="password"
          placeholder="Confirm password"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
          onChange={(e) => {setConfirmPassord(e.target.value)}}
        />

        <div className="go flex gap-[15px] items-center w-[280px]">
          <div
            className="btn bg-green-600 hover:bg-green-500 transition duration-400 text-white text-lg w-20 h-10 flex items-center justify-center rounded-md cursor-pointer px-[10px] font-bold"
            onClick={SubmitData}
          >
            Register
          </div>
          <Link to="/login" className="underline text-blue-700">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

