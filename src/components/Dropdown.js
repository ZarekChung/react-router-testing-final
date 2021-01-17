import React from "react";
const Dropdown = (props) =>{
  const {itemZones,getCurrentZone,currentZone} =  props;

  return(
    //如何預設是“請選擇行政區”
    // value改先判斷currenZone.zone有沒有值
    <select value={currentZone.length === 3 ? currentZone : '--請選擇行政區--'}  onChange={(e) => getCurrentZone(e)}>
           <option value="--請選擇行政區--" disabled>--請選擇行政區--</option> 
           {itemZones.map((zone) =>(
            <option key={zone} value={zone}>{zone}</option>   
            )
          )}
    </select>

  )
}  
     
export default Dropdown;