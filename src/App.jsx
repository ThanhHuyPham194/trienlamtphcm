import "./App.scss";
import ScrollToTop from "./utils/ScrollToTop";
import { Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Index";
import History from "./pages/History/Index";
import Culture from "./pages/Culture/Index";
import Contact from "./pages/Contact/Index";
import Competition from "./pages/Competition/Index";
import Gallery from "./pages/Gallery/Index";
import About from "./pages/About/Index";
import Library from "./pages/Library/Index";
import Information from "./pages/Information/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    AOS.init({
    });
    document.querySelectorAll('img').forEach((img)=>{
      img.addEventListener("load",()=>{
        AOS.refresh();
      })
    });
  },[])
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
          <Route path="history" element={<History />}></Route>
          <Route path="apparatus" element={<History/>}></Route>
          <Route path="service" element={<History />}></Route>


          </Route>
          <Route path="/library" element={<Library />}>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="placard" element={<Gallery />}></Route>
          <Route path="newsreel" element={<Gallery />}></Route>
          <Route path="photogroup" element={<Gallery />}></Route>


          </Route>

       
          <Route path="/information" element={<Information />}>
          <Route path="culture" element={<Culture />}></Route>
          <Route path="sport" element={<Culture />}></Route>
          <Route path="travel" element={<Culture />}></Route>

            </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/competition" element={<Competition />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
