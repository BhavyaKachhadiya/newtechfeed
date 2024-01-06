import './App.css'
import MainCard from './componet/MainCard'
import Navbar from './componet/Navbar'

function App() {

 return (
  <>
  <Navbar/>
  <MainCard source={"Dev.to"} fetchURL={"https://dev.to/feed"}/>
  <MainCard source={"Free Code Camp"} fetchURL={"https://freecodecamp.org/news/rss"}/>
  <MainCard source={"Stack Over Flow"} fetchURL={"https://stackoverflow.blog/feed"}/>
  </>
 )
}

export default App
