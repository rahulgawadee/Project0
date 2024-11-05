import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.-sc2lvp1SD5mi5NpLyt7NAAAAA&pid=Api&P=0&h=180"
            alt="Shoes"
            className="object-cover h-auto w-full" // Make the image responsive
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"><b>MYSQL Mini Project</b></h2>
          <p>Guide: <b>Prof.Sadafale Sir</b></p>
          <div className="card-actions justify-end">
            {/* Wrap the button with Link for navigation */}
            <Link to="/admin/Login">
            <button className="m-4 box-border h-auto w-auto shadow-md text-red-600 p-2 bg-orange-300">ADMIN LOG-IN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
