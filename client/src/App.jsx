import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage  from "./pages/TaskPage";
import Navigation from './components/Navigation';
import {Toaster} from "react-hot-toast";

function App() {

  return (  
    <BrowserRouter>
       <Navigation />
       <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/task-create" element={<TaskFormPage />} />
       </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
