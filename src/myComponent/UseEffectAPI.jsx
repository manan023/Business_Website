import React from "react";

const UseEffectAPI = () => {
  const [users, setUsers] = React.useState([])
  const getUsers = async () => {
    const fetchData = fetch('https://api.github.com/users')
    const userData = JSON.parse(fetchData)
    console.log(userData)
  }
  React.useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <div style={{display: 'flex', flexDirection : 'row', flexWrap: 'wrap', marginRight: '20px'}}>
            <div>
          <h4>Check</h4>
          <div>
            <span>Check</span>
            <span>Check</span>
          </div>
          <div>
            <span>Folowers</span>
            <span>4545</span>
          </div>
          <div>
            <span>Rating</span>
            <span>6</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
