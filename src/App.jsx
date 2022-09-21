import * as React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import employeeMember from './data';
import Employees from './Employees';
import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeeMember);
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA');
  
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTeam(e.target.value);
  }
  const handleClick = (e) => {
    const teamMemebers = employees.map(
      (employee)=>employee.id === parseInt(e.currentTarget.id)
        ?(employee.teamName === team)
        ?{...employee, teamName: ''} 
        :{...employee, teamName:team}
        :employee
    ) 
    setEmployees(teamMemebers);
  }
  
  useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employees));
  },[employees]);
  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(team));
  },[team]);
  
  return (
    <main>
      <Header team={team}
        teamCount={employees.filter((employee)=>employee.teamName === team).length}
        />
      <Employees employees={employees} team={team} 
        handleChange={handleChange} handleClick = {handleClick} />
      <Footer />
    </main>
  );
}

export default App;