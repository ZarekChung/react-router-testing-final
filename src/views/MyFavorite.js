import React,{useState,useEffect} from "react";
import gotopIcon from '../images/btn_goTop.png'
// import Pagination from '../components/Pagination';
import Card from '../components/Card';


const MyFavorite = (props) =>{
    const {handleScrollTop} =  props;
    //將checkMyList改成state,myFavoriteList是讀取我的最愛的資料
    const [checkMyList, setCheckMyList] = useState({
      myFavoriteList:[]
    }); 
    //第一次進來讀取localstorage
    useEffect(()=>{ 
      setCheckMyList({
        myFavoriteList: JSON.parse(localStorage.getItem('myFavorite'))
      });
    },[]);

   //父組建伸出的手,讓子組建呼叫,去更新父層的myFavoriteList
   //NewList適當user刪除的某個景點後的資料 
  const updateCheckMyList = (NewList)=>{
    setCheckMyList({
      myFavoriteList: NewList
    });
  }
  return (
    <div className="content container"> 
        <div className="main">
         
            <ul className="list">
            {checkMyList.myFavoriteList.map(function(card){  
               //將本來myList的props改成myFavoriteList,比較好懂
               return<Card key={card.Id} item={card} isFavorite={true} myFavoriteList={checkMyList.myFavoriteList} updateCheckMyList={updateCheckMyList}/>
            })}
            </ul>
        </div>

        <div className="goTop" onClick={handleScrollTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
      
        {/* <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cardsByZone.length}
        paginate={paginate}
        isDeafultPage = {isDeafultPage} /> */}
    </div>
  
  );
};


export default MyFavorite;