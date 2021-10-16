import stateContainer from "./stateContainer";
import dropdownContainer from "./dropdownContainer"
import tableContainer from "./tableContainer";
import extImageContainer from "./extImageContainer"

export const visiblePageReducer = (state=stateContainer, action) =>{
    switch(action.type){
        case "outer_page":
            return({
                ...stateContainer,
                mainPage: true,
                middlePage: false,
                lastPage: false
            })

        case "mid_page":
             return({
                ...stateContainer,
                mainPage: false,
                middlePage: true,
                lastPage: false
            })

        case "inner_page":
            return({
                ...stateContainer,
                mainPage: false,
                middlePage: false,
                lastPage: true
            })

        default: return state;
    }
}


export const activePageReducer = (state=stateContainer, action) =>{
    switch(action.type){
        case "registration_page":
            console.log("value of next Page in register", state.nextPage)
            return({
            ...stateContainer,
            nextPage: true
            })

        case "sign_in_page":
            console.log("value of next Page in sign in", state.nextPage)
            return({
            ...stateContainer,
            nextPage: false
        })


        case "exterior_page":
            return({
                ...stateContainer,
                exterior: true,
                hall: false,
                bedroom: false,
                kitchen: false,
                bathroom: false
            })

        case "hall_page":
            return({
                ...stateContainer,
                exterior: false,
                hall: true,
                bedroom: false,
                kitchen: false,
                bathroom: false
        })

        case "bedroom_page":
            return({
                ...stateContainer,
                exterior: false,
                hall: false,
                bedroom: true,
                kitchen: false,
                bathroom: false
        })

        case "kitchen_page":
            return({
                ...stateContainer,
                exterior: false,
                hall: false,
                bedroom: false,
                kitchen: true,
                bathroom: false
        })

        case "bathroom_page":
            return({
                ...stateContainer,
                exterior: false,
                hall: false,
                bedroom: false,
                kitchen: false,
                bathroom: true
        })

        default: return state;
    }
}


export const displayDropdownReducer = (state=stateContainer, action) =>{
    switch(action.type){
        case "first_dropdown":
            return({
                ...stateContainer,
                firstdisplay: !state.firstdisplay,
                seconddisplay: true,
                thirddisplay: true,
                fourthdisplay: true
            })

        case "second_dropdown":
            return({
                ...stateContainer,
                firstdisplay: true,
                seconddisplay: !state.seconddisplay,
                thirddisplay: true,
                fourthdisplay: true
            })

        case "third_dropdown":
                return({
                    ...stateContainer,
                    firstdisplay: true,
                    seconddisplay: true,
                    thirddisplay: !state.thirddisplay,
                    fourthdisplay: true
                })

        case "fourth_dropdown":
            return({
                ...stateContainer,
                firstdisplay: true,
                seconddisplay: true,
                thirddisplay: true,
                fourthdisplay: !state.fourthdisplay
            })

        case "all_dropdown":
            return({
                ...stateContainer,
                firstdisplay: true,
                seconddisplay: true,
                thirddisplay: true,
                fourthdisplay: true
            })

        default: return state;
    }
}


export const fetchDataReducer = (state=dropdownContainer, action) =>{
    switch(action.type){
        case "dropdown_data":
            return({
                ...dropdownContainer
            })

            case "selected_country":
            return({
                ...dropdownContainer,
                countryName: action.payload
            })

            case "selected_state":
            return({
                ...dropdownContainer,
                stateName: action.payload
            })

            case "selected_city":
            return({
                ...dropdownContainer,
                cityName: action.payload
            })

            case "selected_area":
            return({
                ...dropdownContainer,
                areaName: action.payload
            })

            default: return state;
    }
}

export const tableControlReducer = (state=tableContainer, action) =>{
    switch(action.type){
        case "exterior_table_data":
            console.log(":value of table data in country:", state.exteriorTableField)
            return({
                ...tableContainer
            })

        case "filter_exterior_table":
            var completeTableData = state.exteriorTableField
            var RequiredCity = action.payload
            var filteredTableData = completeTableData.filter(allData => allData.Area == RequiredCity);
            return({
                ...tableContainer,
                exteriorTableField : filteredTableData

            })

        case "booking_table_Code":
            return({
                ...tableContainer,
                clickedTableCode: action.payload
            })


        case "update_exterior_table":
            var RequiredPerson = action.payload
            var clickedTableCode = state.clickedTableCode
            
            state.exteriorTableField = Object.assign([], state.exteriorTableField)
            

            state.exteriorTableField.forEach((eachRowValue) => {
                if(eachRowValue.Code == clickedTableCode) {
                    eachRowValue.Booked = RequiredPerson,
                    eachRowValue.Availability = "No",
                    eachRowValue.title = "Booked"
                }
            })


            default: return state;
    }
}


export const bookingMessageReducer = (state=stateContainer, action) =>{
    switch(action.type){
        case "booking_message_display":
            return({
                ...stateContainer,
                bookingMessage: !state.bookingMessage
            })

            default: return state;
    }
}

export const exteriorImageReducer = (state=extImageContainer, action) => {
    switch(action.type){
        case "exterior_complete_image":
            return({
                ...extImageContainer
            })

        case "filter_exterior_image":
            var requiredArea = action.payload;
            console.log("value of area image", requiredArea)

            const completeImageMenu = state.exteriorImageMenu.filter(eachRow => eachRow.area == requiredArea);
            return({
                ...extImageContainer,
                exteriorImageMenu: completeImageMenu
            })


        case "filter_all_availability":

        if(action.payload){
            var onlyRentImage = state.exteriorImageMenu.filter(eachRow => (eachRow.area == action.payload));        
        }
            
        else{
            var onlyRentImage = state.exteriorImageMenu
        }
        
        return({
            ...extImageContainer,
            exteriorImageMenu: onlyRentImage
        })


        case "filter_rent_availability":

        if(action.payload){
            var onlyRentImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Rent" && eachRow.area == action.payload));        
        }
    
        else{
            var onlyRentImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Rent"));
        }

        return({
            ...extImageContainer,
            exteriorImageMenu: onlyRentImage
        })

        case "filter_buy_availability":

        if(action.payload){
            var onlyBuyImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Buy" && eachRow.area == action.payload));        
        }
    
        else{
            var onlyBuyImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Buy"));
        }

        return({
            ...extImageContainer,
            exteriorImageMenu: onlyBuyImage
        })

        case "filter_stay_availability":

        if(action.payload){
            var onlyStayImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Stay" && eachRow.area == action.payload));        
        }

        else{
            var onlyStayImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Stay"));
        }

        return({
            ...extImageContainer,
            exteriorImageMenu: onlyStayImage
        })

        case "filter_event_availability":

        if(action.payload){
            var onlyEventImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Event" && eachRow.area == action.payload));        
        }
    
        else{
            var onlyEventImage = state.exteriorImageMenu.filter(eachRow => (eachRow.availability == "Event"));
        }

        return({
            ...extImageContainer,
            exteriorImageMenu: onlyEventImage
        })


        case "filter_img_availability":
            var pressedBtnCode = action.payload
            state.exteriorImageMenu = Object.assign([], state.exteriorImageMenu)
            // console.log("value of action Code in this", action.payload)
        
            state.exteriorImageMenu.forEach((eachRowValue) => {
               if(eachRowValue.Code == pressedBtnCode){
                   console.log("value of each row availability", eachRowValue.availability)
                    eachRowValue.availability = "No"
               }
           })


    default: return state;
    }
}