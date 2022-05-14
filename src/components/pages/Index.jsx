import React from "react";
import TopHeader from "./../TopHeader";
import Nav from "./../Nav";
import Slide from "./../Slide";
import Footer from "./../Footer";
import Features from "../Features";
import CollectionGrid from '../CollectionGrid';
import ShopList from "../ShopList";

function Index(props) {
  return (
    <div>
      <TopHeader />
      <Nav />
      <Slide />
      <Features />
      <CollectionGrid />
      <ShopList baseProductLinkUrl="shop/" />

      <Footer />
    </div>
  );
}


export default Index;
