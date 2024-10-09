import React, {useRef, useState} from 'react';


function NewVacancy(){
    const [age, setAge] = useState('');
    const nameInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        //uncontrolled element
        //alert(event.target.value);
        const name = nameInputRef.current.value;
        alert(`Name: ${name}, Age: ${age}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" ref={nameInputRef} />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)} // Controlled input
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}



export default NewVacancy;
