import React, { useState } from 'react';
import ChooseDate from './ChooseDate';
import ButtonCaculate from './ButtonCaculate';
import Error from './Error';
import Age from './Age';

const MyHeader = () =>{
    
    const [error, saveError] = useState(false);
    const [date, saveDate] =useState({date:''});
    const [showAge, saveShowAge] = useState(false);
    const [age, saveAge] = useState(0);

    //when user press calculate age
    const calculateAge = () =>{

        

        if(Object.entries(date).length === 0 || date.constructor === Object){
            
            saveError(true);
            //alert("esta vacio rellena la fecha");
            saveShowAge(false);// we don´t show age
            
        }else{
            saveError(false);
            saveShowAge(true);//we show age
            let miDate = JSON.stringify(date); //parse object to String
            let year = miDate.substring(1,5);
            let month = miDate.substring(6,8);
            let day = miDate.substring(9,11);
            let fullDateComplete = year +"-"+ month +"-"+ day;
           // alert(fullDateComplete); 
           // alert(miDate);
            let theDate = new Date(fullDateComplete);
            let myYear = theDate.getFullYear();
            let myMonth = theDate.getMonth() + 1; // getMonth go 0 to 11 ---January=0  December=11 . So we need add +1
            let myDate = theDate.getDate();
            //alert(myMonth);

                       
            let currentYearActually = new Date();

            if((currentYearActually.getMonth()+1) <= myMonth && currentYearActually.getDate() < myDate){
                let yourAge = (currentYearActually.getFullYear() - myYear)-1; //we have to subtract one from the age
                //alert(yourAge)
                saveAge(yourAge);
                
            }else{
                let yourAge = (currentYearActually.getFullYear() - myYear);
                //alert(yourAge);
                saveAge(yourAge);
            }
            
          
            
                       

        }
                    

        
    }

    return(<header className=" w-full bg-blue-400 h-80">
                <h1 className="  text-center text-white font-medium  bg-blue-400 h-40 pt-16 ">How old are your ?</h1>
                <ChooseDate saveDate={saveDate}/>
                <ButtonCaculate calculateAge = {calculateAge}/>
                {error ? <Error/>  :  null }
                {showAge ? <Age age = {age} /> : null}
           </header>);
}

export default MyHeader;
