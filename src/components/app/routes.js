import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Menu from './../menu';
import Profile from './../profile';
import MyProjects from './../project/my-projects';
import CreateProject from './../project/create-project';
import ProjectSearch from './../search/projects-search';
import DevsSearch from './../search/devs-search';
import FollowListContainer from './../follow-list';
import Settings from './../profile/settings';
import Header from './../welcome-page/header';
import WelcomePage from './../welcome-page';
import Footer from './../footer';
import Project from '../project/project';

export const useRoutes = (isAuth, id) => {
    if (isAuth) {
        return (
            <>
                <Menu />
                <Switch>
                    <Route path='/profile/:id'>
                        <Profile />
                    </Route>
                    <Route path='/project/:id'>
                        <Project />
                    </Route>
                    <Route path='/my-projects'>
                        <MyProjects />
                    </Route>
                    <Route path='/create-project' >
                        <CreateProject />
                    </Route>
                    <Route path='/edit-project' >
                        <CreateProject isEditing={true} />
                    </Route>
                    <Route path='/search-projects' >
                        <ProjectSearch />
                    </Route>
                    <Route path='/search-devs'>
                        <DevsSearch />
                    </Route>
                    <Route path='/followers' >
                        <FollowListContainer />
                    </Route>
                    <Route path='/following' >
                        <FollowListContainer />
                    </Route>
                    <Route path='/settings' >
                        <Settings />
                    </Route>
                    <Redirect to={{
                        pathname: `/profile/${id}`,
                        state: { id: id }
                    }}

                    />
                </Switch>
                <Footer />
            </>
        )
    }

    return (
        <Switch>
            <Route path='/welcome' >
                <Header />
                <WelcomePage />
                <Footer />
            </Route>
            <Redirect to='/welcome' />
        </Switch>
    )
}