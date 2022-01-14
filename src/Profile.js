import React from 'react';
export default function Profile (props){

     return(
       <div> 
         <h1>{props.name}{props.dob}{props.gender}</h1>
       </div>
     );
    
 }
