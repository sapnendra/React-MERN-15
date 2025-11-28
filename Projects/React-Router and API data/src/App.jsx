import { Link, Route, Routes } from "react-router"
import Home from "./components/Home"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import About from "./components/About"

const App = () => {
  return (
    <div className='h-screen bg-[#111] py-15 px-40'>
      <nav className="h-30 flex border border-gray-700 rounded-4xl items-center justify-between px-10">
        <Link to={"/"}>
          <h1 className="text-5xl text-transparent bg-clip-text uppercase font-bold bg-linear-to-r from-rose-500 to-rose-600">Sapnendra</h1>
        </Link>
        <div className="flex gap-20">
          <Link to={"/"} className="text-2xl font-medium text-white">Home</Link>
          <Link to={"/about"} className="text-2xl font-medium text-white">About</Link>
          <Link to={"/contact"} className="text-2xl font-medium text-white">Contact</Link>
          <Link to={"/faq"} className="text-2xl font-medium text-white">FAQ</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/faq" element={<Faq />}/>
      </Routes>
    </div>
  )
}

export default App