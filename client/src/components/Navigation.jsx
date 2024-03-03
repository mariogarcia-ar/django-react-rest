// import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div>
        <h1>Task App</h1>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/task-create">Create Task</Link>
    </div>
  )
}

export default Navigation