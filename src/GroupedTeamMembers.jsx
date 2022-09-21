import { useState } from "react";

const GroupedTeamMembers = ({employees, selectTeam, setTeam}) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());
  function groupTeamMembers() {
    let teams = [];
    
    let teamAMembers = employees.filter((employee)=>employee.teamName === 'TeamA');
    let teamA = {
      team: 'TeamA',
      members: teamAMembers,
      collapsed: selectTeam === 'TeamA'? false:true
    }
    teams.push(teamA);
    
    let teamBMembers = employees.filter((employee)=>employee.teamName === 'TeamB');
    let teamB = {
      team: 'TeamB',
      members: teamBMembers,
      collapsed: selectTeam === 'TeamB'? false:true
    }
    teams.push(teamB);

    let teamCMembers = employees.filter((employee)=>employee.teamName === 'TeamC');
    let teamC = {
      team: 'TeamC',
      members: teamCMembers,
      collapsed: selectTeam === 'TeamC'? false:true
    }
    teams.push(teamC);

    let teamDMembers = employees.filter((employee)=>employee.teamName === 'TeamD');
    let teamD = {
      team: 'TeamD',
      members: teamDMembers,
      collapsed: selectTeam === 'TeamD'? false:true
    }
    teams.push(teamD);

    return teams;
  }

  const handleClick = (e) => {
    let newGroupData = groupedEmployees.map((groupData)=>
      groupData.team === e.currentTarget.id
        ?{...groupData, collapsed:!groupData.collapsed}
        :groupData
    )
    setGroupedEmployees(newGroupData);
    setTeam(e.currentTarget.id)
  }

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
                {
        groupedEmployees.map((item)=>{
          return(
            <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
              <h4 id={item.team} className='card-header text-secondary' onClick={handleClick}>
                {item.team}
              </h4>
              <div id={'collapse_' + item.team}
                className={item.collapsed===true?'collapse':''}>
                {
                  item.members.map((member)=>{
                    return(
                      <div className='mt-2'>
                        <h5 className='card-title mt-2 text-secondary'>
                          <span>{member.fullName}</span>
                        </h5>
                        <p className='text-secondary'>{member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
        </div>
      </div>

    </main>
  )
}

export default GroupedTeamMembers;