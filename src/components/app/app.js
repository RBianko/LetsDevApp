import './app.css';
import WeclomePage from '../welcome-page';
import { Route, Redirect } from 'react-router';
import Profile from '../profile';


const App = () => {
  return (
    <>
      <Route exact path="/" render={() =>
        <Redirect to="/welcome" />
      } />
      <Route path='/welcome' render={() =>
        <WeclomePage />
      } />
      <Route path='/profile' render={() =>
        <Profile />
      } />
    </>
  )
}

export default App;