import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Expenses from './Expenses'
import CreateExpense from './CreateExpense'
import UpdateExpense from './UpdateExpense'
import Nav from './Nav'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Expenses />}></Route>
        <Route path='/create' element = {<CreateExpense />}></Route>
        <Route path='/update/:id' element = {<UpdateExpense />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
