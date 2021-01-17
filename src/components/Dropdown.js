import React,{useState,useEffect} from "react";
const Dropdown = (props) =>{
  const {itemZones} =  props;

  //6-10行都是為了要接App丟進來的區域,是由button選到的
  const [currenZone,setCurrentZone] = useState({zone:''});

  useEffect(() => {
    setCurrentZone({zone:props.currentZone});
  }, [props.currentZone])


    //綁定 onChange 事件
  const onDropDownCahnge =(e) =>{
    //子傳給父的值
    props.getZone(e.target.value);

    //當點選下拉選單的時候,將button傳進來的currenZone的地區清空,這樣下拉選單才能選到正確的地區
    // setCurrentZone({zone:''})
  }

  return(
    //如何預設是“請選擇行政區”
    // value改先判斷currenZone.zone有沒有值
    <select value={currenZone.zone.length === 3 ? currenZone.zone : props.getZone.value} defaultValue="--請選擇行政區--" onChange={onDropDownCahnge}>
           <option value="--請選擇行政區--" disabled>--請選擇行政區--</option>
          
           {itemZones.map((zone) =>(
            <option key={zone} value={zone}>{zone}</option>   
            )
          )}
    </select>

  )
}  
     
export default Dropdown;