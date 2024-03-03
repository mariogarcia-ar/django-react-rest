import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage  from "./pages/TaskPage";

function App() {

  return (  
    <BrowserRouter>
       <Routes>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/task_form" element={<TaskFormPage />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
