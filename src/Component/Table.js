import React, { Component } from 'react';
import MessageBox from "./MessageBox"
import { RiCheckboxBlankCircleFill } from "react-icons/ri"
import { MdCheckCircle } from "react-icons/md"
import { connect } from "react-redux"
import { FaFileDownload } from "react-icons/fa"
import jsPDF from 'jspdf'
import {
    exteriorTableData,
    bookingDisplay,
    bookingTableCode
}
from "./../Redux/action/actions";


const mapStatetoProps = (props) =>{
  return ({
    exteriorTableField: props.tableControl.exteriorTableField,
    bookingMessage: props.messageDisplay.bookingMessage,
    exteriorImageMenu: props.exteriorImage.exteriorImageMenu
  })
}


const mapDispatchtoProps = (dispatch) => {
  return ({
    exteriorTableData: () => dispatch(exteriorTableData()),
    bookingDisplay: () => dispatch(bookingDisplay()),
    bookingTableCode: (code) => dispatch(bookingTableCode(code))
  })
}

class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
   
        }
    }

handleBooking = (code) => {
        this.props.bookingDisplay()
        this.props.bookingTableCode(code)
}

handleDownload = (code, villaName, availability, customerName, area, cost) => {
    console.log(code, villaName, availability, customerName, area, cost);
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var TodayDate = date.toString();
    var TodayTime = time.toString();

    var allDetail = [code, villaName, customerName,  availability, area, cost, TodayDate, TodayTime];

    var doc=new jsPDF('landscape', 'px', 'a4');

    this.props.exteriorImageMenu.filter((imageMenu) => imageMenu.Code == code).map((val) => {
        doc.addImage(val.image, 'PNG', 65, 20, 500, 400)
        doc.addPage()
        doc.setFont("Helvertica", 'bold')
        doc.text(60, 60, "Villa Code :")
        doc.text(60, 80, "Villa Name :")
        doc.text(60, 100, "Customer Name :")
        doc.text(60, 120, "Availability :")
        doc.text(60, 140, "Area :")
        doc.text(60, 160, "Cost :")
        doc.text(60, 180, "Booked On :")
        doc.text(60, 200, "Booking Time :")
        doc.setFont("Helvertica", 'Normal')
        doc.text(130, 60, allDetail[0])
        doc.text(130, 80, allDetail[1])
        doc.text(156, 100, allDetail[2])
        doc.text(132, 120, allDetail[3])
        doc.text(98, 140, allDetail[4])
        doc.text(96, 160, allDetail[5])
        doc.text(130, 180, allDetail[6])
        doc.text(146, 200, allDetail[7])
        doc.save('Villa_Info.pdf')
    })

}


componentDidMount = () => {
    this.props.exteriorTableData()
}

render() {
    const exteriorTableField = this.props.exteriorTableField
    return (
    <div>
        <div className="table-main">

            <div className="table-context">
                <table  className="table-design" cellPadding="0">
	                <thead style={{"fontSize": "15px", "fontWeight": "bold", "background": "linear-gradient(85deg,#434343,#262626)", "color":"white"}}>
	                    <tr style={{ "color": "rgb(102, 102, 102)"}}>
                            <th style={{width:"3%"}}>O</th>
                            <th style={{width:"9%"}}>Code</th>
                            <th style={{width:"14%"}}>Name</th>
	                        <th style={{width:"6%"}}>Pool</th>
	                        <th style={{width:"7%"}}>Garden</th>
	                        <th style={{width:"7%"}}>Parking</th>
                            <th style={{width:"12%"}}>Availability</th>
                            <th style={{width:"14%"}}>Booked</th>
	                        <th style={{width:"10%"}}>Area</th>
	                        <th style={{width:"10%"}}>cost</th>
                            <th style={{width:"13%"}}>Intrested</th>
                            <th style={{width:"6%"}}></th>
	                    </tr>
	                </thead>
	                <tbody>    
                        {exteriorTableField.map((value, index) => {
                        return (<tr key={value.id}>
                                {( value.Booked == "" ) ? <td style={{width:"3%", paddingLeft:"8px"}}><MdCheckCircle /></td> :                       
                                    <td style={{width:"3%", paddingLeft:"8px", cursor: "pointer"}} onClick={event => {this.handleDownload(value.Code, value.name, value.Availability, value.Booked, value.Area, value.cost)}}><FaFileDownload /></td>
                                }
                                <td style={{width:"8%", paddingLeft:"8px"}}>{value.Code}</td>
                                <td style={{width:"10%", paddingLeft:"10px"}}>{value.name}</td>
	                            <td style={{width:"8%", paddingLeft:"46px"}}>{value.Pool}</td>
	                            <td style={{width:"6%", paddingLeft:"18px"}}>{value.Garden}</td>
	                            <td style={{width:"8%", paddingLeft:"26px"}}>{value.Parking}</td>
                                <td style={{width:"10%", paddingLeft:"16px"}}>{value.Availability}</td>
                                <td style={{width:"12%", paddingLeft:"2px"}}>{value.Booked}</td>
	                            <td style={{width:"10%", paddingLeft:"16px"}}>{value.Area}</td>
	                            <td style={{width:"9%", paddingLeft:"10px"}}>{value.cost}</td>
	                            <td style={{width:"7%"}}>
                                    {(value.title == "Booked") ? <button type="button" className="unviewBtn" onClick={this.handleBooking} disabled>{value.title}</button> :
                                        <button type="button" className="viewBtn" onClick={event => {this.handleBooking(value.Code)}}>{value.title}</button>
                                    }
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
                    {this.props.bookingMessage ? <MessageBox /> : ""}
        </div>
    </div>
    );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Table);