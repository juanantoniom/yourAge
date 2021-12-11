import React from 'react';

const Error = () =>{

    return(
        <div className="flex   justify-center">
            <div className=" flex items-center h-20 w-50 mt-20 bg-red-400 rounded border-4 border-red-400 border-opacity-1 ">
                <h3 className=" text-white font-semibold ">The field is empty, please fill it</h3>
            </div>

        </div>
        
    );

}

export default Error;