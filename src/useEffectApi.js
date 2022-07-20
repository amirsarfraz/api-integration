import React,{useState,useEffect} from "react";

const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers( await response.json());
      
    }
    
    useEffect(() =>{
        getUsers();
    }, []);
    return(
     <>
     <h2>List of GitHub User</h2>


     <div className="container-fluid mt-5">
        <div className="row text-center">
            {
                users.map((curElem) =>{
                    return(
                        <div className="col-10 col-md-4 mt-5">
                        <div className="card">
                         <img src="..." className="card-img-top" alt="amir" width='20px'/>
                         <div className="card-body">
                         <h5 className="card-title">{curElem.login}</h5>
                        <h5 className="card-title">{curElem.id}</h5>
                        <h5 className="card-title">{curElem.events_url}</h5>
                        <p className="card-text">{curElem.subscriptions_url}</p>
                       <p className="btn btn-primary">{curElem.repos_url}</p>
                    </div>
                  </div>
               </div>
          
            )
           })
            }
      </div>
     </div>
     </>
    )
}
export default UseEffectAPI;