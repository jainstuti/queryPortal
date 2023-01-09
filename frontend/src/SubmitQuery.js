import { useState } from 'react';
const SubmitQuery = () => {
    const [username, setUsername] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const query = {username, desc}
        
        const response = await fetch('http://localhost:4000/submitQuery', {
          method: 'POST',
          body: JSON.stringify(query),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setUsername('')
          setDesc('')
          console.log('Submitted:', json)
        }
    
      }

    return (
      <div className="submitQuery"  onSubmit={handleSubmit}>
        <h2>Submit Query</h2>
        <form>
            <label  >Username/ id</label>
            <input id="username" placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} 
            value={username}/>
            <br/>
            <label id="queryDesciption">Description</label>
            
            <textarea rows="4" cols="50" id="desc" type="text" placeholder="Description" onChange={(e) => setDesc(e.target.value)} 
        value={desc}></textarea>
            <br/>
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
      </div>
    )
  }
  
  export default SubmitQuery