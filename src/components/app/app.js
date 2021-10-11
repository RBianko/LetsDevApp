import './app.css';
import WeclomePage from '../welcome-page';
import { Route, Redirect } from 'react-router';
import Profile from '../profile';
import Footer from './../footer';
import Menu from '../menu'
import Header from "../welcome-page/header";
import FriendList from '../friend-list';
import Messages from '../messages';
import MyProjects from './../project/my-projects';
import CreateProject from './../project/create-project';
import ProjectSearch from './../search/projects-search';
import DevsSearch from './../search/devs-search';
import Settings from './../profile/settings';


const App = () => {
  return (
    <>
      <Route exact path="/" render={() =>
        <Redirect to="/welcome" />
      } />
      <Route path='/welcome' render={() =>
        <>
          <Header />
          <WeclomePage />
        </>
      } />
      <Route path='/profile' render={() =>
        <>
          <Menu />
          <Profile />
        </>
      } />
      <Route path='/my-projects' render={() =>
        <>
          <Menu />
          <MyProjects />
        </>
      } />
      <Route path='/create-project' render={() =>
        <>
          <Menu />
          <CreateProject />
        </>
      } />
      <Route path='/search-projects' render={() =>
        <>
          <Menu />
          <ProjectSearch />
        </>
      } />
      <Route path='/search-devs' render={() =>
        <>
          <Menu />
          <DevsSearch />
        </>
      } />
      <Route path='/messages' render={() =>
        <>
          <Menu />
          <Messages />
        </>
      } />
      <Route path='/friend-list' render={() =>
        <>
          <Menu />
          <FriendList />
        </>
      } />
      <Route path='/settings' render={() =>
        <>
          <Menu />
          <Settings />
        </>
      } />
      <Footer />
    </>
  )
}

export default App;