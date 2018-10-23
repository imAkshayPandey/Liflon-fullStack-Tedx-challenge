import React from 'react';

const Form=props=>(
    <div className="Form-Container">
    <form onSubmit={props.getFunction} className="query">
       <select style={{width:'30rem'}} >
       {props.videos.map((video)=>{
           return(
            <option value={video.name}>{video.name}</option>
           )
       })}

        
       </select>
    </form>

</div>

);
export default Form;   