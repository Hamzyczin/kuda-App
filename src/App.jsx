import styled from "styled-components"
import { MdOutlineAddToHomeScreen } from "react-icons/md";
import Header from "./static/Header";
import Personal from "./pages/Personal";
import Footer from "./static/Footer";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from "./pages/Business";
import Companies from "./pages/Companies";

const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Personal />}/>
          <Route path="/business" element={<Business />}/>
          <Route path="/companies" element={<Companies/>}/>

        </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}


export default App

const Container = styled.div`
  background-color: red;
  font-size: 30px;
  color: pink;
`