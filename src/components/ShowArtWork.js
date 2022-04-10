import React from `react`
	

export function ShowArtWork(props){

  return  <div className="term">
                 <dt className="dt">
                    <span className='emoji' role="img" aria-label="An Artwork">
                         {props.artwork}
                    </span> 
      
                   <span  >{props.name}</span>
                 </dt>

    <dd className="dtspan"> 
                {props.description}
    </dd>

</div>

	

}