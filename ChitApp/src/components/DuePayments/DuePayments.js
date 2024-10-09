import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../../reduxsrc/actions/actions";

export function DuePayments(){

    // Get the current checkbox state from Redux
    const isChecked = useSelector((state) => state.isChecked);
    const dispatch = useDispatch();

    // Handle the checkbox change event and dispatch the action
    const handleCheckboxChange = (e) => {
        dispatch(toggleCheckbox(e.target.checked));
    };

    return (
        <div>
             <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Is Payment Completed?
            </label>
        </div>
    );

}
