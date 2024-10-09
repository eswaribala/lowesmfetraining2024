import {TOGGLE_CHECKBOX} from '../types/types'

// Action creator for toggling the checkbox
export const toggleCheckbox = (isChecked) => {

    return {
        type: TOGGLE_CHECKBOX,
        payload: isChecked,
    };
};