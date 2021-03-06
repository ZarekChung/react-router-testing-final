import React,{useState} from "react";
import gotopIcon from '../images/btn_goTop.png'
import Pagination from '../components/Pagination';
import Card from '../components/Card';

const Home = (props) =>{
    const {currentZone,currentCards,cardsByZone,currentPage,cardsPerPage,paginate,handleScrollTop} =  props;
    
    //將checkMyList改成state,myFavoriteList是讀取我的最愛的資料
    const [checkMyList, setCheckMyList] = useState({
      myFavoriteList: localStorage.getItem('myFavorite')!==null ? JSON.parse(localStorage.getItem('myFavorite')):[]
    }); 

    //父組建伸出的手,讓子組建呼叫,去更新父層的myFavoriteList
    //NewList適當user刪除的某個景點後的資料
    const updateCheckMyList = (newMyFavoriteList)=>{
      setCheckMyList({
        myFavoriteList: newMyFavoriteList
      });
    }
  
    const myFavoriteList = checkMyList.myFavoriteList!=null?checkMyList.myFavoriteList:[];//為了方便直接宣告一個新的myFavoriteList
    
  return (
    <div className="content container"> 
        <div className="main">
            <h2 className="title-main">{currentZone}</h2>
            <ul className="list">
                {/* 因為新增分頁功能所以要改成 currentCards */}
            {currentCards.map(function(card){
              let index = (myFavoriteList).map(function(e) { return e.Id; }).indexOf(card.Id);
              return<Card key={card.Id} item={card} isFavorite={index>=0}  myFavoriteList={myFavoriteList} updateCheckMyList={updateCheckMyList}/>
             
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
        currentPage ={currentPage}/>
    </div>
  
  );
};


export default Home;