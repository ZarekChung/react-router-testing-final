import React from "react";
import HeaderPage from './HeaderPage';
import Footer from '../Footer';
// import Title from '../../components/Title';

const LayoutPage = (props) =>{
    // const {itemZones,getCurrentZone} =  props;
  return (
<div className="App">

    {/* <Header getCurrentZone={getCurrentZone} itemZones= {itemZones}/> */}
    <HeaderPage/>

       {/* 塞分頁的變數內容 */}
       {props.children}

    <Footer/>
</div>
  );
};


export default LayoutPage;