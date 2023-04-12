import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div className="drawer drawer-end drawer-mobile mt-20">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto gap-2 w-50 bg-primary rounded text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="font-bold">
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            {/* {!admin && ( */}
            <>
              <li className="font-bold">
                <Link to="/Dashboard/all-requested-club-forum">
                  All Requested Club&Forum
                </Link>
              </li>
              <li className="font-bold">
                <Link to="/Dashboard/request-for-room-booking">
                  Request for Room Booking
                </Link>
              </li>
              <li className="font-bold">
                <Link to="/dashboard/addReviews">Add new Event</Link>
              </li>
              <li className="font-bold">
                <Link to="/dashboard/addReviews">Add News</Link>
              </li>
              <li className="font-bold">
                <Link to="/dashboard/addReviews">Add New Blogs</Link>
              </li>
            </>
            {/* )} */}

            {/* admin role only */}

            {/* {admin && ( */}
            <>
              <li className="font-bold">
                <Link to="/dashboard/volunteerRequest">Manage All Volunteer Request</Link>
              </li>
              
            </>
            {/* )} */}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;