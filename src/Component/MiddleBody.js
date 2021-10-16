import React, { Component } from 'react';
import Registration from "./Registration"
import SignIn from "./SignIn";
import { connect } from "react-redux";

import {

  }
  from "./../Redux/action/actions"

const mapStatetoProps = (props) =>{
    return ({
      nextPage: props.activePage.nextPage
    })
}

const mapDispatchtoProps = (dispatch) => {
    return ({

    })
  }
  

class MiddleBody extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

    render() {
      console.log("value of next page in middle body is : ", this.props.nextPage)
        return (
            <div className="full-main">
                <h1>Registraion and sign In</h1>
                <div>
                {(this.props.nextPage) ? <Registration /> : <SignIn />}
                </div>
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (MiddleBody);