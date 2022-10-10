import React, {useContext} from 'react';
import { AuthContext } from './provider';
import axios from 'axios';
import { useGlobalState } from '../state';  


 const AuthContextElement = () => {

    let authstate = useContext(AuthContext);
    const [value, update] = useGlobalState('auth');
    const get = "http://localhost:3001/auth";
    axios.get(
        get,
        { headers: { Authorization: `Bearer ${localStorage.token}` } },
       )
      .then((res) => {
       
       if (res.data) { update(true) } else { update(false) } 
       
   
      });

      value === true ? authstate = `You are authorized` : authstate = `please login`

      return (<div className='loginedIn'>{authstate}</div>)
  };

export default AuthContextElement;



