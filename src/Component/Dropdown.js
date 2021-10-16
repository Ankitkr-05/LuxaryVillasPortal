import React, { Component, Fragment } from 'react';
import { connect } from "react-redux"

import {
  firstDropdown,
  secondDropdown,
  thirdDropdown,
  fourthDropdown,
  dropdownData,
  selectedCountry,
  selectedState,
  selectedCity,
  selectedArea,
  exteriorTableData,
  exteriorCompleteImage
}
from "./../Redux/action/actions";


const mapStatetoProps = (props) =>{
  return ({
    firstdisplay: props.displayDropdown.firstdisplay,
    seconddisplay: props.displayDropdown.seconddisplay,
    thirddisplay: props.displayDropdown.thirddisplay,
    fourthdisplay: props.displayDropdown.fourthdisplay,
    countries: props.fetchData.countries,
    allstates: props.fetchData.allstates,
    cities: props.fetchData.cities,
    areas: props.fetchData.areas,
    countryName: props.fetchData.countryName,
    stateName: props.fetchData.stateName,
    cityName: props.fetchData.cityName,
    areaName: props.fetchData.areaName
  })
}


const mapDispatchtoProps = (dispatch) => {
  return ({
    firstDropdown: () => dispatch(firstDropdown()),
    secondDropdown: () => dispatch(secondDropdown()),
    thirdDropdown: () => dispatch(thirdDropdown()),
    fourthDropdown: () => dispatch(fourthDropdown()),
    dropdownData: () => dispatch(dropdownData()),
    selectedCountry: (country) => dispatch(selectedCountry(country)),
    selectedState: (state) => dispatch(selectedState(state)),
    selectedCity: (city) => dispatch(selectedCity(city)),
    selectedArea: (area) => dispatch(selectedArea(area)),
    exteriorTableData: () => dispatch(exteriorTableData()),
    exteriorCompleteImage: () => dispatch(exteriorCompleteImage())
  })
}



class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }


    handleCountry = () => {
        var showcountry = document.querySelector("#countrylist");
        var showstate = document.querySelector("#statelist");
        var showcity = document.querySelector("#citylist");
        var showarea = document.querySelector("#arealist");
        if(this.props.firstdisplay){
          showcountry.style.visibility = "visible";
          showstate.style.visibility = "hidden";
          showcity.style.visibility = "hidden";
          showarea.style.visibility = "hidden";

          this.props.firstDropdown()
        }

        else{
          showcountry.style.visibility = "hidden";
          this.props.firstDropdown()
        }
      }
  
      handleState = () => {
        var showcountry = document.querySelector("#countrylist");
        var showstate = document.querySelector("#statelist");
        var showcity = document.querySelector("#citylist");
        var showarea = document.querySelector("#arealist");
        if(this.props.seconddisplay){
          showcountry.style.visibility = "hidden";
          showstate.style.visibility = "visible";
          showcity.style.visibility = "hidden";
          showarea.style.visibility = "hidden";
          
          this.props.secondDropdown()
        }
        else{
          showstate.style.visibility = "hidden";
          this.props.secondDropdown()
        }
      }
  
      handleCity = () => {
        this.props.exteriorTableData()
        this.props.exteriorCompleteImage();
        var showcountry = document.querySelector("#countrylist");
        var showstate = document.querySelector("#statelist");
        var showcity = document.querySelector("#citylist");
        var showarea = document.querySelector("#arealist");
        if(this.props.thirddisplay){
          showcountry.style.visibility = "hidden";
          showstate.style.visibility = "hidden";
          showcity.style.visibility = "visible";
          showarea.style.visibility = "hidden";
          
          this.props.thirdDropdown()
        }
        else{
          showcity.style.visibility = "hidden";
          this.props.thirdDropdown()
        }
      }
  
      handleArea = () => {
        var showcountry = document.querySelector("#countrylist");
        var showstate = document.querySelector("#statelist");
        var showcity = document.querySelector("#citylist");
        var showarea = document.querySelector("#arealist");
        if(this.props.fourthdisplay){
          showcountry.style.visibility = "hidden";
          showstate.style.visibility = "hidden";
          showcity.style.visibility = "hidden";
          showarea.style.visibility = "visible";
         
          this.props.fourthDropdown()
        }
        
        else{
          showarea.style.visibility = "hidden";
          this.props.fourthDropdown()
        }
      }

      componentDidMount = () => {
        this.props.dropdownData()
      }

      listOfCountry = () => {
        return this.props.countries.map((data, i) => {
                      return <div className="sub-item" key={i} onClick={() => {
                        this.handleCountryClick(data.name)
                      }}>{data.name}</div>
                  })
      }


      handleCountryClick = (country) =>{
        this.props.selectedCountry(country)
      }


      listOfState = () => {
        return this.props.allstates.filter(filterStates => filterStates.country == this.props.countryName).map((data, i) => {
          return <div className="sub-item" key={i} onClick={() => {
            this.handleStateClick(data.name)
          }}>{data.name}</div>
      })
      }

      handleStateClick = (state) => {
        this.props.selectedState(state);
      }


      listOfCity = () => {
        return this.props.cities.filter(filterCities => filterCities.state == this.props.stateName).map((data, i) => {
          return <div className="sub-item" key={i} onClick={() => {
            this.handleCityClick(data.name)
          }}>{data.name}</div>
      })
      }

      handleCityClick = (city) => {
        this.props.selectedCity(city);
      }


      listOfArea = () => {
        return this.props.areas.filter(filterAreas => filterAreas.city == this.props.cityName).map((data, i) => {
          return <div className="sub-item" key={i} onClick={() => {
            this.handleAreaClick(data.name)
          }}>{data.name}</div>
      })
      }

      handleAreaClick = (area) => {
        this.props.selectedArea(area);
      }





  
    render() {
        return (
          <Fragment>

                <div className="main-item" onClick={this.handleCountry}>Country
                    <div className="inner-item" id="countrylist">
                      {this.listOfCountry()}
                    </div>
                </div>

                <div className="main-item" onClick={this.handleState}>State
                    <div className="inner-item" id="statelist">
                      {(this.props.countryName) ? this.listOfState() :
                      <div className="sub-item">Please select country</div>
                      }
                    </div>
                </div>

                <div className="main-item" onClick={this.handleCity}>City
                    <div className="inner-item" id="citylist">
                      {(this.props.stateName) ? this.listOfCity() :
                      <div className="sub-item">Please select state</div>
                      }
                    </div>
                </div>

                <div className="main-item" onClick={this.handleArea}>Area
                    <div className="inner-item" id="arealist">
                      {(this.props.cityName) ? this.listOfArea() :
                      <div className="sub-item">Please select City</div>
                      }
                    </div>
                </div>

          </Fragment>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Dropdown);