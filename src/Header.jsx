const Header = ({ team, teamCount }) => {
  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='clo-8'>
          <h1> Team Member Allocation </h1>
          <h3> {team} has {teamCount} {teamCount===1?"Member":"Members"}. </h3>
        </div>
      </div>
    </header>
  )
}

export default Header;