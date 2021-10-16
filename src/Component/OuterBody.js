import React, { Component } from 'react';
import "./../App.css";
import logo from "./../Images/home.png";
import { FaListUl } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { AiFillLike} from 'react-icons/ai';
import { FaRegistered } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { connect } from "react-redux";

import {
  midPage,
  innerPage,
  registrationPage,
  signInPage,
  exteriorPage,
  hallPage,
  bedroomPage,
  kitchenPage,
  bathroomPage
}
from "./../Redux/action/actions"

const mapStatetoProps = (props) =>{
  return ({
    exterior: props.activePage.exterior,
    hall: props.activePage.hall,
    bedroom: props.activePage.bedroom,
    kitchen: props.activePage.kitchen,
    bathroom: props.activePage.bathroom
  })
}


const mapDispatchtoProps = (dispatch) => {
  return ({
    midPage: () => dispatch(midPage()),
    innerPage: () => dispatch(innerPage()),
    registrationPage: () => dispatch(registrationPage()),
    signInPage: () => dispatch(signInPage()),
    exteriorPage: () => dispatch(exteriorPage()),
    hallPage: () => dispatch(hallPage()),
    bedroomPage: () => dispatch(bedroomPage()),
    kitchenPage: () => dispatch(kitchenPage()),
    bathroomPage: () => dispatch(bathroomPage())
  })
}

class OuterBody extends Component {
   constructor(props){
     super(props)
     this.state = {

     }
   }

   handleOpen = () => {
     var show = document.querySelector(".navbar");
     console.log("value of show 1:", show)
     show.style.right= "0"
   }

   handleClose = () => {
     console.log("clicked is this")
    var show = document.querySelector(".navbar");
    console.log("value of show 2:", show)
    show.style.right= "-200px"
  }

  handleExteriorPage = () => {
    this.props.innerPage();
    this.props.exteriorPage();
  }

  handleHallPage = () => {
    this.props.innerPage();
    this.props.hallPage();
  }

  handleBedroomPage = () => {
    this.props.innerPage();
    this.props.bedroomPage();
  }

  handleKitchenPage = () => {
    this.props.innerPage();
    this.props.kitchenPage();
  }

  handleBathroomPage = () => {
    this.props.innerPage();
    this.props.bathroomPage();
  }

  handleRegistrationPage = () => {
    this.props.midPage();
    this.props.registrationPage();
  }

  handleSigninPage = () => {
    this.props.midPage();
    this.props.signInPage();
  }


  render() {
    return (
        <div className="first">
          <nav className="navbar">
            {/* <MdCancel className="closebar" onClick={this.handleClose}/> */}
            <img src={logo} 
              alt="logo" className="logo" />
            <ul>
                <li><a onClick={this.handleExteriorPage}>Exterior</a></li>
                <li><a onClick={this.handleHallPage}>Hall</a></li>
                <li><a onClick={this.handleBedroomPage}>Bedroom</a></li>
                <li><a onClick={this.handleKitchenPage}>Kitchen</a></li>
                <li><a onClick={this.handleBathroomPage}>Bathroom</a></li>
            </ul>
              <button type="button" className="btn" onClick={this.handleSigninPage}>SIGN IN</button>
          </nav>
          {/* <FaBars className="sidebar" onClick={this.handleOpen} /> */}
          <div className="content">
            <h1>
                Design 
                  <span style={{color:"yellow", margin:"0 10px"}}>Your</span>
                Dream 
                  <span style={{color:"yellow", margin:"0 10px"}}>House</span>
            </h1>
            <p>We are here to provide you Luxary Villa at cheap rate,<br />
                    Please visit our website and check it once.   
            </p>

            <div>
            <button type="button" className="otherbtn">
              <span className="btneffects"></span>
                Like <AiFillLike style={{fontSize: "18px", marginLeft:"6px"}}/>
            </button>

            <button type="button" className="otherbtn" onClick={this.handleRegistrationPage}>
              <span className="btneffects"></span>
                Register <span><FaRegistered style={{fontSize: "16px", marginLeft:"8px"}}/></span>
            </button>

          </div>
          </div>

          <div className="vertical-bar">
            <div className="search-icon">
              <FaListUl className="list"/>
              <FaSearch className="list"/>
            </div>
            <div className="social-icon">
              <a href="https://www.facebook.com/"><FaFacebook className="socialapp"/></a>
              <a href="https://www.instagram.com/accounts/login/"><FaInstagramSquare className="socialapp"/></a>
              <a href="https://twitter.com/login?lang=en"><FaTwitterSquare className="socialapp"/></a>
              <a href="https://www.fiverr.com/login"><SiFiverr className="socialapp"/></a>
            </div>
          </div>
      </div>
    );
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)  (OuterBody);