
import { Route, Routes } from 'react-router'
import './App.css'
import TaskPage from './pages/TaskPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { TaskContextProvider } from './context/TaskContextProvider'
function App() {

  return (
    <TaskContextProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskContextProvider>

  )
}

export default App
