import React from 'react';


const ButtonCaculate = (props) =>{

    return (
            <div className="flex justify-center  ">
                <button onClick={props.calculateAge} className="bg-indigo-600 hover:bg-blue-600 text-white font-bold rounded-full w-40 h-10 mt-10 transform hover:scale-125 transition ease-out duration-300">Caculate age</button>
            </div>
            
    );
}

export default ButtonCaculate;