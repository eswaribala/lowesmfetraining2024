// reducer.js
// Initial state for the checkbox
import {TOGGLE_CHECKBOX} from "../types/types";

const initialState = {
    isChecked: false, // Checkbox is unchecked initially
};

// Reducer to handle checkbox state updates
const checkboxReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                isChecked: action.payload,
            };
        default:
            return state;
    }

};

export default checkboxReducer;