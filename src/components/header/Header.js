import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const isDark = this.props.isDark;
    const toggleTheme = this.props.toggleTheme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className={`header${isDark ? " header-dark" : ""}`} style={{ backgroundColor: theme.body }}>
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.imageHighlight }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>{greeting.logo_name}</span>
            <span style={{ color: theme.imageHighlight }}>/&gt;</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" style={{ background: theme.text }}></span>
          </label>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {["home","education","experience","projects","contact"].map((page) => (
              <li key={page}>
                <NavLink
                  to={`/${page}`}
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.imageHighlight }}
                  style={{ color: theme.text }}
                  className="nav-link"
                >
                  {page === "contact" ? "Contact Me" : page.charAt(0).toUpperCase() + page.slice(1)}
                </NavLink>
              </li>
            ))}
            <li className="toggle-li">
              <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </li>
          </ul>
        </header>
      </Fade>
    );
  }
}
export default Header;
