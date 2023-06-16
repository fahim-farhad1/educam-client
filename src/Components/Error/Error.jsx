import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="404 Error" className="w-96" />
        <h1 className="text-4xl font-bold mt-8">404 Error - Page Not Found</h1>
        <p className="text-gray-600 text-lg mt-4">The page you are looking for does not exist.</p>
        <Link to='/'><button className='btn btn-success'>Home</button></Link>
      </div>
    );
};

export default Error;