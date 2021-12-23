import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoaderComponent } from './../../style-components/loader/loader';

import Profile from './../../profile';
import Project from './../../project';
import MyProjects from './../../project/my-projects';
import CreateProject from './../../project/create-project';
import ProjectSearch from './../../search/projects-search';
import DevsSearch from './../../search/devs-search';
import Settings from './../../profile/settings';
import ProjectRequests from './../../project/create-project/project-requests';
import FollowList from './../../follow-list';

const ProtectedRoutes = ({ userId }) => (
    <Switch>
        <Suspense
            fallback={<LoaderComponent />}
        >
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
            <Route path='/settings' >
                <Settings />
            </Route>
            <Route path='/requests' >
                <ProjectRequests />
            </Route>
            <Route path='/followers'>
                <FollowList />
            </Route>
            <Route path='/following'>
                <FollowList />
            </Route>
            <Redirect to={{
                pathname: `/profile/${userId}`,
                state: { id: userId }
            }} />
        </Suspense>
    </Switch>
);

export default ProtectedRoutes;