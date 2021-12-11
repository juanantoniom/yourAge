import React from 'react';


const ChooseDate = ({saveDate}) =>{

    

    

    return(
        <div className="flex justify-center">
            <input type="date" name="fecha" onChange={e => saveDate(e.target.value)}/>
        </div>
        
    );
};



export default ChooseDate;