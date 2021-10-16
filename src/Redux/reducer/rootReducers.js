import { combineReducers } from "redux"
import { visiblePageReducer } from "./dataReducers"
import { activePageReducer } from "./dataReducers";
import { displayDropdownReducer } from "./dataReducers";
import { fetchDataReducer } from "./dataReducers";
import { tableControlReducer } from "./dataReducers";
import { bookingMessageReducer } from "./dataReducers";
import { exteriorImageReducer } from "./dataReducers";


export const rootReducers = combineReducers({
    visiblePage: visiblePageReducer,
    activePage: activePageReducer,
    displayDropdown: displayDropdownReducer,
    fetchData:fetchDataReducer,
    fetchData:fetchDataReducer,
    tableControl:tableControlReducer,
    messageDisplay:bookingMessageReducer,
    exteriorImage: exteriorImageReducer
})