import Users from "./components/Users/Users";
import style from "./style.module.css"
import stateMachine from "./utils/stateMachine";
import defineProcess from './utils/defineProcess'
import { useState, useEffect } from "react";
import getUsers from "./api/getUsers";

function App() {
  const [processes, setProcesses] = useState({
    waiting  : false,
    loading  : true,
    confirmed: false,
    success  : false,
    error    : false
  });

  const [users, setUsers] = useState([])
  let [page, setPage] = useState(1);

  const changeProcess = (newProcess) => {
    const newState = {
      waiting  : false,
      loading  : false,
      confirmed: false,
      success  : false,
      error    : false
    }

    for(let process in newState){
        if(process === newProcess){
        newState[process] = true
        break
        }
    }
    setProcesses(newState)
  }

  useEffect(() => {
    changeProcess('waiting')
    getUsers(`https://reqres.in/api/users?page=${page}`)
    .then(json => {
      setUsers(json.data)
      changeProcess('confirmed')
    })
    
    console.log(users)
  }, [page])

  return (
    <div className = {style.app}>
      <div className={style.users}>
          {stateMachine(defineProcess(processes), Users, {users})}
      </div>
    
      <div className="">
            <button onClick = {() => setPage(page + 1)}>next page</button>
            <button onClick = {() => setPage(page - 1)}>prev page</button>
            <button onClick = {() => changeProcess('waiting')}>waiting</button>
            <button onClick = {() => changeProcess('loading')}>loading</button>
            <button onClick = {() => changeProcess('confirmed')}>confirmed</button>
            <button onClick = {() => changeProcess('success')}>success</button>
            <button onClick = {() => changeProcess('error')}>error</button>
        </div>
    </div>
  );
}

export default App;
