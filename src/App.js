import React  from "react";
import Header from "./pages/Home/components/header"
import Banner from "./pages/Home/components/banner"
import Feature from "./pages/Home/components/feature"
import Contents from "./pages/Home/components/contents"
import Galeria from "./pages/Home/components/galeria"
import Patners from "./pages/Home/components/patners"
import Comentario from "./pages/Home/components/comentario"
import BannerFooter from "./pages/Home/components/banner-footer"
import Footer from "./pages/Home/components/footer"
import "./App.css"

function App() {
  return (
      <div>
        <Header/>
        <Banner/>
        <Feature/>
        {/* <Contents/>
        <Galeria/>
        <Patners/>
        <Comentario/>
        <BannerFooter/>
        <Footer/> */}
    </div>
  );
}

export default App;