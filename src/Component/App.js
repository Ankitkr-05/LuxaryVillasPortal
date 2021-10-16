import React, { Component } from 'react';
import OuterBody from "./OuterBody";
import MiddleBody from "./MiddleBody";
import InnerBody from "./InnerBody";
import { connect } from "react-redux";
import {
  nextPage
}
from "./../Redux/action/actions"

const mapStatetoProps = (props) =>{
  return ({
    mainPage: props.visiblePage.mainPage,
    middlePage: props.visiblePage.middlePage,
    lastPage: props.visiblePage.lastPage,

  })
}

const mapDispatchtoProps = (dispatch) => {
  return ({
  })
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
}

  render() {
    return (
      <div>
        {(this.props.mainPage) ? <OuterBody /> : 
          (this.props.middlePage) ? <MiddleBody /> : 
          (this.props.lastPage) ? <InnerBody /> : ""
        }
      </div>
    );
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps) (App);