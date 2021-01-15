import React,{useState,useEffect} from "react";
import gotopIcon from '../images/btn_goTop.png'
import Pagination from '../components/Pagination';
import Card from '../components/Card';

const Home = (props) =>{
    const {currentZone,currentCards,cardsByZone,cardsPerPage,paginate,isDeafultPage,handleScrollTop} =  props;
    
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
            <h2 className="title-main">{currentZone}</h2>
            <ul className="list">
                {/* 因為新增分頁功能所以要改成 currentCards */}
            {currentCards.map(function(card){
              if(checkMyList.myFavoriteList!=null && checkMyList.myFavoriteList.map(function(e){return e.Id}).indexOf(card.Id)>=0){
                
                  return<Card key={card.Id} item={card} isFavorite={true}  myFavoriteList={checkMyList.myFavoriteList} updateCheckMyList={updateCheckMyList}/>
                }else{
                  return<Card key={card.Id} item={card} isFavorite={false} myFavoriteList={checkMyList.myFavoriteList} updateCheckMyList={updateCheckMyList}/>
                }
                  // 通常 map 要加上 key (固定值)
            })}
            </ul>
        </div>

        <div className="goTop" onClick={handleScrollTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
      
        <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cardsByZone.length}
        paginate={paginate}
        isDeafultPage = {isDeafultPage} />
    </div>
  
  );
};


export default Home;