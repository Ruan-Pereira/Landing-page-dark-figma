import React  from "react";
import Header from "./pages/template-figma-01/components/header"
import Banner from "./pages/template-figma-01/components/banner"
import Feature from "./pages/template-figma-01/components/feature"
import Contents from "./pages/template-figma-01/components/contents"
import Galeria from "./pages/template-figma-01/components/galeria"
import Patners from "./pages/template-figma-01/components/patners"
import Comentario from "./pages/template-figma-01/components/comentario"
import BannerFooter from "./pages/template-figma-01/components/banner-footer"
import Footer from "./pages/template-figma-01/components/footer"

function App() {
  return (
      <div>
        <Header/>
        <Banner/>
        <Feature/>
        <Contents/>
        <Galeria/>
        <Patners/>
        <Comentario/>
        <BannerFooter/>
        <Footer/>
    </div>
  );
}

export default App;