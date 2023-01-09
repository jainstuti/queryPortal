import { useState } from "react";
const QueryDetails = ({ query }) => {
    const [isUpdated, setIsUpdated] = useState(false);
    let handleClick=(e)=>{
        let updatedQuery= {
            ...query,
            isResolved: true
        }
        e.target.disabled=true
        console.log(updatedQuery);
        fetch('http://localhost:4000/'+updatedQuery._id, {
          method: 'PATCH',
          body: JSON.stringify(updatedQuery),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
        })
        setIsUpdated(!isUpdated);
        
    }

    return (
      <div className="query-details">
      <h4>{query.username}</h4>
        <p id="createdAt">{query.createdAt}</p>
        <p>{query.desc}</p>
        
        
        <div id="resolveBtn">
        <button onClick={handleClick}>Mark Resolved</button>
        </div>

        
      </div>
    )
  }
  
  export default QueryDetails