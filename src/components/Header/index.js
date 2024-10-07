// Write your code here
import Popup from 'reactjs-popup'

import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <navbar>
    <div className="navbar_container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website_logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menuIcon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="menu_container">
              <button
                type="button"
                className="trigger-close-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="closeIcon" />
              </button>
              <ul className="list_container">
                <Link to="/">
                  <li className="iconContainer">
                    <AiFillHome />
                    <p className="iconTag_name">Home</p>
                  </li>
                </Link>
                <Link to="/about">
                  <li className="iconContainer">
                    <BsInfoCircleFill />
                    <p className="iconTag_name">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
    <hr className="lineBreak" />
  </navbar>
)

export default withRouter(Header)
