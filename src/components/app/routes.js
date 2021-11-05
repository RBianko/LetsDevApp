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

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <>
                <Menu />
                <Switch>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/my-projects'>
                        <MyProjects />
                    </Route>
                    <Route path='/create-project' >
                        <CreateProject />
                    </Route>
                    <Route path='/search-projects' >
                        <ProjectSearch />
                    </Route>
                    <Route path='/search-devs'>
                        <DevsSearch />
                    </Route>
                    <Route path='/follow/' >
                        <FollowListContainer />
                    </Route>
                    <Route path='/settings' >
                        <Settings />
                    </Route>
                    <Route
                        exact
                        path="/user/:id"
                        component={Profile}
                    />
                    <Redirect to='/profile' />
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