export const outerPage = () => {
    return ({
        type: "outer_page"
    })
}

export const midPage = () => {
    return ({
        type: "mid_page"
    })
}

export const innerPage = () => {
    return ({
        type: "inner_page"
    })
}

export const exteriorPage = () => {
    return ({
        type: "exterior_page"
    })
}

export const hallPage = () => {
    return ({
        type: "hall_page"
    })
}

export const bedroomPage = () => {
    return ({
        type: "bedroom_page"
    })
}


export const kitchenPage = () => {
    return ({
        type: "kitchen_page"
    })
}


export const bathroomPage = () => {
    return ({
        type: "bathroom_page"
    })
}


export const registrationPage = () => {
    return ({
        type: "registration_page"
    })
}

export const signInPage = () => {
    return ({
        type: "sign_in_page"
    })
}


export const firstDropdown = () => {
    return ({
        type: "first_dropdown"
    })
}

export const secondDropdown = () => {
    return ({
        type: "second_dropdown"
    })
}

export const thirdDropdown = () => {
    return ({
        type: "third_dropdown"
    })
}

export const fourthDropdown = () => {
    return ({
        type: "fourth_dropdown"
    })
}

export const allDropdown = () => {
    return ({
        type: "all_dropdown"
    })
}


export const dropdownData = () => {
    return ({
        type: "dropdown_data"
    })
}


export const selectedCountry = (country) => {
    return ({
        type: "selected_country",
        payload: country
    })
}

export const selectedState = (state) => {
    return ({
        type: "selected_state",
        payload: state
    })
}

export const selectedCity = (city) => {
    return ({
        type: "selected_city",
        payload: city
    })
}

export const selectedArea = (area) => {
    return ({
        type: "selected_area",
        payload: area
    })
}

export const exteriorTableData = () => {
    return ({
        type: "exterior_table_data"
    })
}

export const filterExteriorTable = (cityRequired) => {
    return ({
        type: "filter_exterior_table",
        payload: cityRequired
    })
}

export const bookingDisplay = () => {
    return ({
        type: "booking_message_display"
    })
}

export const bookingTableCode = (code) => {
    return ({
        type: "booking_table_Code",
        payload: code
    })
}

export const updateExteriorTable = (requiredDetails) => {
    return ({
        type: "update_exterior_table",
        payload: requiredDetails
    })
}

export const exteriorCompleteImage = () => {
    return ({
        type: "exterior_complete_image"
    })
}

export const filterExteriorImage = (areaRequired) => {
    return ({
        type: "filter_exterior_image",
        payload: areaRequired
    })
}

export const allAvailability = (areaValue) => {
    return ({
        type: "filter_all_availability",
        payload: areaValue
    })
}

export const rentAvailability = (areaValue) => {
    return ({
        type: "filter_rent_availability",
        payload: areaValue
    })
}

export const buyAvailability = (areaValue) => {
    return ({
        type: "filter_buy_availability",
        payload: areaValue
    })
}

export const stayAvailability = (areaValue) => {
    return ({
        type: "filter_stay_availability",
        payload: areaValue
    })
}

export const eventAvailability = (areaValue) => {
    return ({
        type: "filter_event_availability",
        payload: areaValue
    })
}

export const changeImgAvailability = (codeVal) => {
    return ({
        type: "filter_img_availability",
        payload: codeVal
    })
}
