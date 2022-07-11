import React,{useState} from "react";
//import styled from "styled-components";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import RefTest from "./RefTest";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";

/* const Container = styled.div`
  position : absolute;
  top: 0;
  left : 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ), url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;`

 */
class App extends React.Component {
  render() {
    const containerStyle = {
      
      backgroundImage:
        "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
      width: "600px",
      height: "700px",
    };
    return (
      
      <div style={containerStyle}><h1 style={{color: "black"}}></h1>

      <Router >
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Average" element={<Average />} />
          <Route path="/RefTest" element={<RefTest />} />
        </Routes>
      </Router>

      
      </div>
    );
  }
}

export default App;