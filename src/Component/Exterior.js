import React, { Component } from 'react';
import Table from "./Table"
import ExteriorImg from "./ExteriorImg";

class Exterior extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <div className="main-exterior">
 
                
                <div className="sub-exterior">
                    <div className="exterior-pic"></div>
                    {/* <div className="text-box">
                        <h1>Shanti Niketan Villa</h1>
                        <span className="new-line"></span>
                        <p>With a good entire this villa is located at panchmarg, near aiims metro, Delhi
                            made with taking care of high security and you give feel of your own place.
                        </p>
                        <button className="exterior-btn">Cost: $234556</button>
                    </div> */}
                </div>

                <div>
                    <Table />
                </div>

                <div>
                    <ExteriorImg />
                </div>

            </div>
        );
    }
}

export default Exterior;