import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
    //     e.preventDefault()
        navigate('/portal', {state:{username}});
    //     const cred = {username, password}
        
    //     const response = await fetch('http://localhost:4000/submitQuery', {
    //       method: 'POST',
    //       body: JSON.stringify(query),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     const json = await response.json()
    
    //     if (!response.ok) {
    //       setError(json.error)
    //     }
    //     if (response.ok) {
    //       setError(null)
    //       setUsername('')
    //       setPassword('')
    //       console.log('Submitted:', json)
    //     }
    
      }

    return (
      <div className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <form>
            <label  >Username</label>
            <input id="usrnm" placeholder="Username" required type="text" onChange={(e) => setUsername(e.target.value)} 
            value={username}/>
            <br/>
            <label  >Password</label>
            <input id="password" type="text" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} 
        value={password}></input>
            <br/>
            {/* <Link to='/portal' > <button>Login</button> </Link> */}
            <button>Login</button>
            
            {/* {error && <div className="error">{error}</div>} */}
        </form>
      </div>
    )
  }
  
  export default Login