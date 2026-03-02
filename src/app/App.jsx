import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from '../pages/Home';
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import About from '../pages/About';
import Contact from '../pages/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="projects/:slug" element={<ProjectDetail/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
