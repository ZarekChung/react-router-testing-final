import React from "react";
import Header from './Header';
import Footer from '../Footer';

const Layout = (props) =>{
    const {itemZones,getCurrentZone} =  props;
  return (
<div className="App">
    <Header getCurrentZone={getCurrentZone} itemZones= {itemZones}/>

       {/* 塞分頁的變數內容 */}
       {props.children}

    <Footer/>
</div>
  );
};


export default Layout;