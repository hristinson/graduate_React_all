import React, {useMemo, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header  from './components/Header';
import Footer  from './components/Footer';
import Home  from './components/Home';
import People  from './components/People';
import Planets  from './components/Planets';
import Starships  from './components/Starships';
import Vehicles  from './components/Vehicles';
import Login  from './components/Login';
import { AuthContext } from './components/provider';
import dynamic from 'next/dynamic'
import { AppProvider } from './components/Tour/context';
const Tour = dynamic(
  () => import('./components/Tour/Tour'),
  { ssr: false }
)



function App() {
  const [loginStatus, setLoginStatus] = useState<Boolean>(false)
  const providerLogin = useMemo( () => ({loginStatus, setLoginStatus}), [loginStatus, setLoginStatus] )

  return (
    <div className="App">
      <AppProvider>
<AuthContext.Provider value={providerLogin}>
<BrowserRouter>
  <Header />
  <Tour />
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/people" element={ <People />}></Route>
      <Route path="/planets" element={ <Planets />}></Route>
      <Route path="/starships" element={ <Starships />}></Route>
      <Route path="/vehicles" element={ <Vehicles />}></Route>
      <Route path="/login" element={ <Login />}></Route>
    </Routes>
  <Footer />
</BrowserRouter>
</AuthContext.Provider>
</AppProvider>
    </div>
  );
}

export default App;
