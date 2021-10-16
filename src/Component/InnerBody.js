import React, { Component } from 'react';
import "./../App.css";
import Dropdown from "./Dropdown"
import logo from "./../Images/luxaryhome.png";
import Exterior from "./Exterior"
import Hall from "./Hall"
import BedRoom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bathroom from "./Bathroom"
import Registration from "./Registration"
import SignIn from "./SignIn";
import { connect } from "react-redux"

import {
  outerPage,
  allDropdown,
  filterExteriorTable,
  exteriorTableData,
  filterExteriorImage,
  exteriorCompleteImage
}
from "./../Redux/action/actions";
  
  const mapStatetoProps = (props) =>{
    return ({
      exterior: props.activePage.exterior,
      hall: props.activePage.hall,
      bedroom: props.activePage.bedroom,
      kitchen: props.activePage.kitchen,
      bathroom: props.activePage.bathroom,
      registration: props.activePage.registration,
      newuser: props.activePage.newuser,
      areaName: props.fetchData.areaName
    })
  }
  
  
  const mapDispatchtoProps = (dispatch) => {
    return ({
      outerPage: () => dispatch(outerPage()),
      allDropdown: () => dispatch(allDropdown()),
      filterExteriorTable: (areaSelection) => dispatch(filterExteriorTable(areaSelection)),
      exteriorTableData: () => dispatch(exteriorTableData()),
      filterExteriorImage: (requireArea) => dispatch(filterExteriorImage(requireArea)),
      exteriorCompleteImage: () => dispatch(exteriorCompleteImage())
    })
  }

class InnerBody extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }


    handleWrapper = () => {
      console.log("Wrapper clicked")
      var showcountry = document.querySelector("#countrylist");
      var showstate = document.querySelector("#statelist");
      var showcity = document.querySelector("#citylist");
      var showarea = document.querySelector("#arealist");

      showcountry.style.visibility = "hidden";
      showstate.style.visibility = "hidden";
      showcity.style.visibility = "hidden";
      showarea.style.visibility = "hidden";

      this.props.allDropdown()
    }

    handleHome = () => {
      this.props.outerPage();
    }

    handleApplyButton = () => {
      this.props.filterExteriorTable(this.props.areaName)
      this.props.filterExteriorImage(this.props.areaName)
    }

    handleResetButton = () => {
      this.props.exteriorTableData()
      this.props.exteriorCompleteImage();
    }




    render() {
        return (
            <div>
                <div className="full-main">

                    <div className="main-nav">

                      <img src={logo} className="inner-logo" />
                      <div className="nav-logo" onClick={this.handleHome}>Home </div>
                      <Dropdown />
                      <button type="submit" className="dropdown-apply" onClick={this.handleApplyButton}>Apply</button>
                      <button type="reset" className="dropdown-reset" onClick={this.handleResetButton}>Reset</button>
                    </div>

                  <div className="main_body">
                    {   (this.props.exterior) ? <Exterior /> :
                         (this.props.hall) ? <Hall /> :
                         (this.props.bedroom) ? <BedRoom /> :
                         (this.props.kitchen) ? <Kitchen /> :
                         (this.props.bathroom) ? <Bathroom /> : ""                
                    }
                  </div>

                </div>

                <div className="full-wrapper" onClick={this.handleWrapper}></div>

            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (InnerBody);