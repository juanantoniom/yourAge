import React from 'react';



const Age = (props) =>{

    return(
        <div className="flex justify-center">

          <h3 className=" flex items-center font-semibold h-20 w-50 mt-20 yourAgeText">your age is {props.age}</h3>
            
            
        </div>
        

    );

}

export default Age;