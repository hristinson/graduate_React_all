import React, {useContext} from 'react';
import { AuthContext } from './provider';
import axios from 'axios';


 const Authstatus = () => {

    const {loginStatus, setLoginStatus} = useContext(AuthContext);
    
    const get = "http://localhost:3001/auth";
    axios.get(
        get,
        { headers: { Authorization: `Bearer ${localStorage.token}` } },
       )
      .then((res) => {
       
       if (res.data) { setLoginStatus(true) } else { setLoginStatus(false) } 
       
   
      });

  };

export default Authstatus;



