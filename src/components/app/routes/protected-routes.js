import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoaderComponent } from './../../style-components/loader/loader';

import Profile from './../../profile/profile';
import Project from './../../project/project';
import MyProjects from './../../project/my-projects/my-projects';
import CreateProject from './../../project/create-project/index';
import ProjectSearch from './../../search/projects-search/project-search';
import DevsSearch from './../../search/devs-search/index';
import FollowListContainer from './../../follow-list/index';
import Settings from './../../profile/settings/settings';
import ProjectRequests from './../../project/create-project/project-requests/project-requests';

const ProtectedRoutes = ({ id }) => (
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
            <Route path='/followers' >
                <FollowListContainer />
            </Route>
            <Route path='/following' >
                <FollowListContainer />
            </Route>
            <Route path='/settings' >
                <Settings />
            </Route>
            <Route path='/requests' >
                <ProjectRequests />
            </Route>
            <Redirect to={{
                pathname: `/profile/${id}`,
                state: { id: id }
            }} />
        </Suspense>
    </Switch>
);

export default ProtectedRoutes;