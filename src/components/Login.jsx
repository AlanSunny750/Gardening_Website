import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  let url = 'http://localhost:3000';
  let appUrl = 'http://localhost:5173';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = () => {

    fetch(url + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        if (data === '1') {
          alert('Incorrect email');
        } else if (data === '2') {
          alert('Incorrect password');
        } else if (data === '4') {
          window.location.href = appUrl + '/user_page';
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="main">
      <div className="header w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 mb-4">Accounts</h1>
        <p>Thanks for choosing us!</p>
      </div>

      <div className="signUp flex flex-col items-center mt-32">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-blueGray-700 px-4 py-2 rounded-md mb-4 w-[280px]"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-blueGray-700 px-4 py-2 rounded-md mb-4 w-[280px]"
        />

        <div className="go flex gap-10 items-center w-[280px]">
          <div
            className="btn bg-green-600 hover:bg-green-500 transition duration-400 text-white text-lg w-20 h-10 flex items-center justify-center rounded-md cursor-pointer font-bold"
            onClick={HandleLogin}
          > Login </div>
          
          <Link to="/signup" className="ml-4 underline text-blue-700">Register?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
