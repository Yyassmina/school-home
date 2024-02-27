import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Middle from './Components/Middle/Middle'
import Activity from './Components/Activity/Activity'
import Cycle from './Components/Cycle/Cycle'
import Footer1 from './Components/Footer1/Footer1'
import Raison1 from './Components/Raison1/Raison1'
import Notre from './Components/Notre/Notre'
import Bac from './Components/Bac/Bac'
import Vie from './Components/Vie/Vie'




function App() {
  

  return (
   <div>
       <Navbar/>
       <Home/>
       <Middle/> 
       <Notre/>
       <Bac/>
       <Raison1/>
       <Cycle/>
       <Vie/>
       <Activity/>
       <Footer1/>
      <Footer/>
   </div>
  )
}

export default App
