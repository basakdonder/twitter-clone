import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  return (
    <div className="Navbar">
      <table>
        <tr>
          <td colSpan="2">
            <NavLink to="/">
              <i class="fa-brands fa-twitter"></i>
            </NavLink>
          </td>
        </tr>
        <tr>
          <NavLink to="/">
            <td>
              <i class="fa-solid fa-house"></i>
            </td>
            <td>Home</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/explore">
            <td>
              <i class="fa-solid fa-hashtag"></i>
            </td>
            <td>Explore</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/notifications">
            <td>
              <i class="fa-solid fa-bell"></i>
            </td>
            <td>Notifications</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/messages">
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
            <td>Messages</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/bookmarks">
            <td>
              <i class="fa-solid fa-bookmark"></i>
            </td>
            <td>Bookmarks</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/lists">
            <td>
              <i class="fa-solid fa-table-list"></i>
            </td>
            <td>Lists</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/profile">
            <td>
              <i class="fa-solid fa-user"></i>
            </td>
            <td>Profile</td>
          </NavLink>
        </tr>
        <tr>
          <NavLink to="/more">
            <td>
              <i class="fa-solid fa-ellipsis"></i>
            </td>
            <td>More</td>
          </NavLink>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="tweet-btn">
              <i class="fa-solid fa-plus"></i>
            </button>
          </td>
        </tr>
      </table>
      <div className="account-wrap">
        <table>
          <tr>
            <td>
              <div className="account-img"></div>
            </td>
            <td>
              <span>
                Başak Dönder <br />
                @basakdonder
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Navbar;
