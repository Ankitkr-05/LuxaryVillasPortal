import React, { Component } from 'react';
import "./../App.css";
import { connect } from "react-redux"

import {
    exteriorCompleteImage,
    allAvailability,
    rentAvailability,
    buyAvailability,
    stayAvailability,
    eventAvailability
}
from "./../Redux/action/actions";
  
  const mapStatetoProps = (props) =>{
    return ({
      exteriorImageMenu: props.exteriorImage.exteriorImageMenu,
      areaName: props.fetchData.areaName
    })
  }
  
  
  const mapDispatchtoProps = (dispatch) => {
    return ({
        exteriorCompleteImage: () => dispatch(exteriorCompleteImage()),
        allAvailability: (areaVal) => dispatch(allAvailability(areaVal)),
        rentAvailability: (areaVal) => dispatch(rentAvailability(areaVal)),
        buyAvailability: (areaVal) => dispatch(buyAvailability(areaVal)),
        stayAvailability: (areaVal) => dispatch(stayAvailability(areaVal)),
        eventAvailability: (areaVal) => dispatch(eventAvailability(areaVal))
    })
  }



class ExteriorImg extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount = () => {
        this.props.exteriorCompleteImage();
    }

    handleAllAvailability = () => {
        this.props.exteriorCompleteImage();
        this.props.allAvailability(this.props.areaName);
    }

    handleRentAvailability = () => {
        this.props.exteriorCompleteImage();
        this.props.rentAvailability(this.props.areaName)
    }

    handleBuyAvailability = () => {
        this.props.exteriorCompleteImage();
        this.props.buyAvailability(this.props.areaName)
    }

    handleStayAvailability = () => {
        this.props.exteriorCompleteImage();
        this.props.stayAvailability(this.props.areaName)
    }

    handleEventAvailability = () => {
        this.props.exteriorCompleteImage();
        this.props.eventAvailability(this.props.areaName)
    }

    render() {
        return (
            <div className="extImg-Main">
                <div style={{margin:"auto"}}>
                    <h1 className="extImgHead">Choose Your Favourite Villa</h1>
                    <hr/>

                    <div className="extFull-Nav">
                        <div className="extImgNav">
                            <button type="button" className="extImgTab" onClick={this.handleAllAvailability}>All</button>
                            <button type="button" className="extImgTab" onClick={this.handleRentAvailability}>Rent</button>
                            <button type="button" className="extImgTab" onClick={this.handleBuyAvailability}>Buy</button>
                            <button type="button" className="extImgTab" onClick={this.handleStayAvailability}>Stay</button>
                            <button type="button" className="extImgTab" onClick={this.handleEventAvailability}>Event</button>
                        </div>
                    </div>

                    {this.props.exteriorImageMenu.map((val) => {
                        const {image, name, availability, area, price, Code} = val;
                        
                        return (<div className="extImgBody">
                        <div className="extImgCard">
                            <img src ={image} className="extImage" />
                            <div className="extCardInfo">
                                <div style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:"20px"}}>
                                    <span className="extCardName">{name}</span>
                                </div>
                                <span className="extCardCode">{Code}</span>
                                <span className="extCardCity">{area}</span><br/>
                                <div style={{width:"100%"}}>
                                <span className="extCardPrice">{price}</span>
                                <span className="extCardavailablity">{availability}</span>
                                </div>
                                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                    {(availability == "No") ? 
                                        <button type="button" className="extCard-disableBtn" disabled>
                                            Booked
                                        </button> :
                                        
                                        <button type="button" className="extCardBtn">
                                            Visit 
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
                    })
                    }

                </div>
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (ExteriorImg);