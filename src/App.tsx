import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NewRoom } from "./Pages/NewRoom";
import { Room } from './Pages/Room'

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './Pages/AdminRoom';




function App() {

  return (

    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/rooms/new' exact component={NewRoom}></Route>
      <Route path='/rooms/:id' component={Room}></Route>

      <Route path='/admin/rooms/:id' component={AdminRoom}></Route>
      </Switch>

    </AuthContextProvider>
      
    </BrowserRouter>
    
  );
}

export default App;
