import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import QueryDetails from "./QueryDetails";

const Home = () => {
  let [queries, setQueries] = useState(null)
  const { state } = useLocation();
  useEffect(() => {
    // const fetchQueries = async () => {
    //   const response = await fetch('http://localhost:4000/')
    //   const json = await response.json()

    //   if (response.ok) {
    //     console.log(response);
    //     setQueries(json)
    //   }
    // }

    // fetchQueries()
    fetch('http://localhost:4000/')
  .then((response) => {
    // console.log("response:",response)
        return response.json()
    })
  .then((data) => {
    console.log("data:", data)
    setQueries(data)
});
  }, [])

  

  
  return (
    <div className="home">
        <p id="userHandle">Hi {state.username}!</p>
        <h2 id="heading">Branch Query Portal</h2>
      <div className="queries">
        {queries && queries.map(query => (
            query.isResolved=== false?
          <QueryDetails query={query} key={query._id} />
          :null
        ))}
      </div>
    </div>
  )
}

export default Home