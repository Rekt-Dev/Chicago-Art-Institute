import React from "react"
import '../App.js'
import "../App"



        function Entry(props){

    return <div className="term">
                 <dt className="dt">
                    <span className='' role="img" aria-label="default text">
                         {props.key}
                    </span> 
      
                   <span  >{props.name}</span>
                 </dt>

    <dd className="dtspan"> 
                {props.description}
    </dd>
</div>
}

export default Entry 