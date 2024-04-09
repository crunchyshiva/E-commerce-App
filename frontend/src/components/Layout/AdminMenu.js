import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaBox, FaClipboardList, FaUser, FaHome } from 'react-icons/fa';

const AdminMenu = () => {
  return (
    <div className="container">
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4 className="mb-4">Admin Panel</h4>
          <NavLink
            to="/dashboard/admin"
            className="list-group-item border d-flex justify-content-between align-items-center bg-secondary"
          >
            <span>Home</span>
            <FaHome />
          </NavLink>

          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            activeClassName="active"
          >
            <span>Create Category</span>
            <FaPlus />
          </NavLink>

          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            activeClassName="active"
          >
            <span>Create Product</span>
            <FaBox />
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            activeClassName="active"
          >
            <span>Products</span>
            <FaClipboardList />
          </NavLink>

          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            activeClassName="active"
          >
            <span>Orders</span>
            <FaClipboardList />
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            activeClassName="active"
          >
            <span>Users</span>
            <FaUser />
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
