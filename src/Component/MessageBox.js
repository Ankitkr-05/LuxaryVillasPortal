import React, { Component } from 'react';
import { MdCancel } from "react-icons/md";
import { connect } from "react-redux"

import {
    bookingDisplay,
    updateExteriorTable,
    changeImgAvailability,
    exteriorCompleteImage
}
from "./../Redux/action/actions";

const mapStatetoProps = (props) =>{
    return ({
    clickedTableCode: props.tableControl.clickedTableCode,
    requiredPressedCode: props.exteriorImage.requiredPressedCode
    })
  }
  
  
  const mapDispatchtoProps = (dispatch) => {
    return ({
      bookingDisplay: () => dispatch(bookingDisplay()),
      updateExteriorTable: (requiredPerson) => dispatch(updateExteriorTable(requiredPerson)),
      changeImgAvailability: (codeVal) => dispatch(changeImgAvailability(codeVal)),
      exteriorCompleteImage: () => dispatch(exteriorCompleteImage())
    })
  }
  

class MessageBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            personName: "",
            personContact: "",
            personMail: "",
            nameErrorMsg: "",
            contactErrorMsg: "",
            mailErrorMsg: ""
        }
    }

    handleCancelBox = () => {
        this.props.bookingDisplay()
    }


    handlebookedDetails = (event) => {
        var name= event.target.name;
        var value= event.target.value;

        this.setState({
            [name] : value
        })
    }

    checkValidation = () => {
        var nameMsg = "";
        var contactMsg = "";
        var mailMsg = "";

        if(!this.state.personName.trim()) {
            nameMsg = "Please provide booking person name"
        }

        if(!this.state.personContact.trim()) {
            contactMsg = "Please provide booking person Contact"
        }

        if(!this.state.personMail.trim()) {
            mailMsg = "Please provide booking person Mail"
        }

        if(nameMsg) {
            this.setState({nameErrorMsg : nameMsg})
            return false;
        }

        if(contactMsg) {
            this.setState({contactErrorMsg : contactMsg})
            return false;
        }

        if(mailMsg) {
            this.setState({mailErrorMsg : mailMsg});
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var eachFieldValid = this.checkValidation();
        const requiredPerson = this.state.personName;

        if(eachFieldValid) {
           this.props.updateExteriorTable(requiredPerson);
           this.props.bookingDisplay();
           this.props.changeImgAvailability(this.props.clickedTableCode)
           this.props.exteriorCompleteImage();
           setTimeout(() => {
            alert(`Hi ${requiredPerson}! You are successfully booked your desire villa.\n Please note Booked Code is: ${this.props.clickedTableCode}.\n Please download your booked details from table for future aspect.\nKeep patience You will receive call shortly.\nHave a nice day :)`) 
           }, 30);
        }
    }



    render() {
        return (
            <div className="message-main">
                <div className="message-box">

                <span style={{className: "box-cancel"}}>
                        <MdCancel className="message-cancel" onClick={this.handleCancelBox} />
                    </span>

                    <form onSubmit = {this.handleSubmit}>
                    <div style={{marginTop: "30px", marginLeft:"20px"}}>
                    <label style={{fontSize:"16px"}}>Name</label>
                    <span className="required">**</span>
                    <input type="text" style={{padding:"4px", width:"360px", marginTop:"10px", borderRadius:"8px"}} name="personName" value={this.state.personName} onChange={this.handlebookedDetails}></input>
                    <div style={{color:"#D8000C", fontSize:"14px", fontWeight:"600", marginTop:"6px", width:"100%", height:"16px"}}>{this.state.nameErrorMsg}</div>
                    </div>

                    <div style={{marginTop: "16px", marginLeft:"20px"}}>
                    <label style={{fontSize:"16px"}}>Mob No</label>
                    <span className="required">**</span>
                    <input type="number" style={{padding:"4px", width:"360px", marginTop:"10px", borderRadius:"8px"}} name="personContact" value={this.state.personContact} onChange={this.handlebookedDetails}></input>
                    <div style={{color:"#D8000C", fontSize:"14px", fontWeight:"600", marginTop:"6px", width:"100%", height:"16px"}}>{this.state.contactErrorMsg}</div>
                    </div>

                    <div style={{marginTop: "16px", marginLeft:"20px"}}>
                    <label style={{fontSize:"16px"}}>Email Id</label>
                    <span className="required">**</span>
                    <input type="email" style={{padding:"4px", width:"360px", marginTop:"10px", borderRadius:"8px"}} name="personMail" value={this.state.personMail} onChange={this.handlebookedDetails}></input>
                    <div style={{color:"#D8000C", fontSize:"14px", fontWeight:"600", marginTop:"6px", width:"100%", height:"16px"}}>{this.state.mailErrorMsg}</div>
                    </div>

                    <div style={{position:"relative", display:"flex", justifyContent:"center",height:"90px", alignItems:"center"}}>
                        <button type="submit" className="bookBtn">Book</button>
                    </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (MessageBox);