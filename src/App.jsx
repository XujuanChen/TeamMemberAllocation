import * as React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import employeeMember from './data';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeeMember);
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA');
  
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTeam(e.target.value);
  }
  const handleClick = (e) => {
    const teamMemeberSelected = employees.map(
      (employee)=>employee.id === parseInt(e.currentTarget.id)
        ?(employee.teamName === team)
        ?{...employee, teamName: ''} 
        :{...employee, teamName:team}
        :employee
    ) 
    setEmployees(teamMemeberSelected);
  }
  
  useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employees));
  },[employees]);
  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(team));
  },[team]);
  
  return (
    <Router>
      <Nav />
      <main>
      <Header team={team}
        teamCount={employees.filter((employee)=>employee.teamName === team).length}
        />
      <Routes>
        <Route path='/'
          element={<Employees employees={employees} team={team} 
          handleChange={handleChange} handleClick = {handleClick} />}>
        </Route>
        <Route path='/GroupedTeamMembers'
          element={<GroupedTeamMembers employees={employees} selectTeam={team} 
          setTeam={setTeam} />}>
        </Route>
        <Route path='*'
          element={<NotFound />}
          >
        </Route>
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;