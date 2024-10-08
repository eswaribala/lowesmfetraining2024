import React, {useEffect, useRef} from 'react';

import {mount} from 'component1/Component1'

export default()=>{
    const ref=useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, []);
    return(
        <div ref={ref}></div>
    )
}