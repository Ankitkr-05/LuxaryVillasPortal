import React, { Component } from 'react';

class Kitchen extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <div className="main-exterior">
 
                
            <div className="sub-exterior">
                <div className="kitchen-pic"></div>
                <div className="text-box">
                    <h1>Shanti Niketan Villa</h1>
                    <span className="new-line"></span>
                    <p>With a good entire this villa is located at panchmarg, near aiims metro, Delhi
                        made with taking care of high security and you give feel of your own place.
                    </p>
                    <button className="exterior-btn">Cost: $234556</button>
                </div>
            </div>

            <div>
                <h1>Hello</h1>
            </div>

        </div>
        );
    }
}

export default Kitchen;