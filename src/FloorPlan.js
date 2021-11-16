function FlooPlan(props){
  return(
    <div id='container'>
      <div id="bedroom1">
        {props.bedroom}
      </div>
      <div id="kitchen">
        {props.kitchen}
      </div>
      <div id="fullBath">
        {props.fullBath}
      </div>
      <div id="bedroom2">
        {props.bedroom2}
      </div>
      <div id="livingRoom">
        {props.livingRoom}
      </div>
      <div id="halfBath">
        {props.halfBath}
      </div>
      <div id="bedroom3">
        {props.bedroom3}
      </div>
    </div>
    
  )
}


export  default FlooPlan