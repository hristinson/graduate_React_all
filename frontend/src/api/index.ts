import axios from "axios";
//import { useGlobalState } from '../state';

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  if (localStorage.token) {
    const authLink = "http://localhost:3001/auth";
    axios.get(
      authLink,
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    ).then((res)=> { 
      
      if(res.data) {
        
       }
       else {
        
       }

     });
     
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err.stasusCode);
    return err;
  }
);

export const getPeople = (query: any) => {
  return api.get(`people/?page=${query.page}`);
};

export const getCountPeople = () => {
  return api.get(`people/`);
};

export const getPlanets = (query: any) => {
  return api.get(`planets/?page=${query.page}`);
};

export const getCountPlanets = () => {
  return api.get(`planets/`);
};

export const getVehicles = (query: any) => {
  return api.get(`vehicles/?page=${query.page}`);
};

export const getCountVehicles = () => {
  return api.get(`vehicles/`);
};

export const getStarships = (query: any) => {
  return api.get(`starships/?page=${query.page}`);
};

export const getCountStarships = () => {
  return api.get(`starships/`);
};

export default api;
