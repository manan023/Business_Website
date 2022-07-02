import React from "react";

const UseEffectAPI = () => {

  const [users, setusers] = React.useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users')
        console.log(response)
        setusers(await response.json())
        console.log(users, "This is the data")
    }

    React.useEffect(() => {
        getUsers();
    }, [])
  return (
    <>
      <div style={{display: 'flex', flexDirection : 'row', flexWrap: 'wrap', marginRight: '20px'}}>
        {users.map((curElem, index) => {
          return(
            <div key={index}>
          <h4>{curElem.login}</h4>
          <div>
            <span>{curElem.User}</span>
            <span>{curElem.id}</span>
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
          )
          
        })}
      </div>
    </>
  );
};

export default UseEffectAPI;
