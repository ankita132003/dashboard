import React from "react";
import "../style.css/login.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function Login() {


  
  return (
    <>
      <div className="display">
        <div className="login_back ">
          <h1 className="text">Board.</h1>
        </div>
        <div className="login_form">

          <div className="w-full max-w-xs">
            <h1 className="form-heading">Sign In</h1>
            <p className="form-para">Sign in to your account</p>
            
            <div className="mb-4 signin">
            <GoogleOAuthProvider clientId="262140295007-slu042c24l1jtag9jpdnuhj3skc9pleg.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                var decoded= jwt_decode(credentialResponse.credential);
                console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
          </div>

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 large-form"  >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="john@gmail.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="......" />
                <a className="pass text-xs lato"> Forgot Password? </a>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-grow bg-black text-white font-bold py-2 px-4 rounded" type="button">
                  Sign In
                </button>

              </div>
            </form>
            <p className="form-footer flex ">Don’t have an account?
              <p className="regis">Register here</p></p>
          </div>
          


        </div>
      </div>
    </>

  );
}

export default Login;

