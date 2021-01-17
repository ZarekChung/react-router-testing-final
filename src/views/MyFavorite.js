import React,{useState} from "react";
import gotopIcon from '../images/btn_goTop.png'
import Pagination from '../components/Pagination';
import Card from '../components/Card';


const MyFavorite = (props) =>{
    const {handleScrollTop} =  props;
      //分頁
    const [currentPage, setCurrentPage] = useState(1);//預設當前 page
    const [cardsPerPage] = useState(4);
    const [isDeafultPage, setIsDeafultPage] = useState(false);
    
    const [checkMyList, setCheckMyList] = useState({
      myFavoriteList: localStorage.getItem('myFavorite')!==null ? JSON.parse(localStorage.getItem('myFavorite')):[]
    }); 
    
   //父組建伸出的手,讓子組建呼叫,去更新父層的myFavoriteList
   //newMyFavoriteList適當user刪除的某個景點後的資料 
  const updateCheckMyList = (newMyFavoriteList)=>{
    setCheckMyList({
      myFavoriteList: newMyFavoriteList
    });
  }

  const myFavoriteList = checkMyList.myFavoriteList!=null?checkMyList.myFavoriteList:[];//為了方便直接宣告一個新的myFavoriteList
  
  //分頁處理
  const indexOfLastCard = currentPage * cardsPerPage;//當下所在 page 最後一個卡片內容
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;//當下所在 page 第一個卡片內容
  const currentCards = myFavoriteList.slice(indexOfFirstCard, indexOfLastCard);//slice去頭不含尾 取得部分資料

  // Change page
  const paginate = pageNumber => {
    setIsDeafultPage(false);
    setCurrentPage(pageNumber);
  }

  
  return (
    <div className="content container"> 
        <div className="main">
        <h2 className= "title-main">{myFavoriteList.length > 0 ? "我的最愛":"尚未加入我的最愛"}</h2>
         
            <ul className="list">
            {currentCards.map(function(card){  
               //將本來myList的props改成myFavoriteList,比較好懂
               return<Card key={card.Id} item={card} isFavorite={true} myFavoriteList={myFavoriteList} updateCheckMyList={updateCheckMyList}/>
            })}
            </ul>
        </div>

        <div className="goTop" onClick={handleScrollTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
      
        <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={myFavoriteList.length}
        paginate={paginate}
        isDeafultPage = {isDeafultPage} />
    </div>
  
  );
};


export default MyFavorite;