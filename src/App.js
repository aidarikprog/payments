import './App.css'
import Main from './comps/Main'
import Cards from './comps/Cards'
import Nav from './comps/Nav'
import Company from './comps/Companys'
import Profiles from './comps/Profiles'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Cards />
      <Company />
      <Profiles/>
    </div>
  )
}

export default App
