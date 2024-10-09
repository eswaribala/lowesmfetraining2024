import React from 'react';
import {useSelector} from "react-redux";


function Receipts(){
    // Get the checkbox state from Redux
    const isChecked = useSelector((state) => state.isChecked);

    return (
        <div>
            <h2>Checkbox Status</h2>
            <p>{isChecked ? 'Payment Done' : 'Not Done'}</p>
        </div>
    );

}

export default Receipts;
