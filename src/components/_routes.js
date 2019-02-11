import React from 'react';


/**
 * This component library will lists all routes (url path) and its
 * respective pages.
 */

// Initializing page Components
/**
 * const Overview = React.lazy(() => import('./content/pages/Overview'));
 * 
 * Legend:
 *  `const` is equal to `var` in JavaScript
 *  `Overview` is the Class Component that contains the actual page
 *   @see https://reactjs.org/docs/code-splitting.html
 *  `React.lazy()` lets you render a dynamic import as a regular component.
 *  `import()` must be called inside React.lazy() function containing the path to the Component that is to be imported.
 */

const Overview = React.lazy(() => import('./content/pages/Overview'));
const Contact = React.lazy(() => import('./content/pages/Contact'));
const MyGuide = React.lazy(() => import('./content/pages/MyGuide'));
const FollowUp = React.lazy(() => import('./content/pages/FollowUp'));
const Profile = React.lazy(() => import('./content/pages/Profile'));

// Initializing page Routes
/**
 * @see https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 * const _routes = [
 *       { path: '/overview', exact: true, name: 'Overview', component: Overview },
 * ];
 * 
 * export default _routes;
 * 
 * Legend:
 *  `_routes` Notice that this is the same as the file name. The main idea of this is, `_routes.js`
 *  is considered as a Javascript Object that can be imported to other Components across the app.
 *  `path` value of this parameter is the url (path/link) that will show up in the browser.
 *  `exact` is only needed if app will have similar routes. Example below.
 *      /user (this should use exact parameter)
 *      /user/settings
 *  `name` text value of the link that will be generated Example: <a href="/overview">Overview</a>
 *  `component` this is the page Component that will render once the path: '/overview' is visited
 *
 * `export default` is commonly used to expose Components for them to be imported to other Components across the app.
 */

const _routes = [
    { path: '/overview', name: 'Overview', view: Overview },
    { path: '/contacts', name: 'Contacts', view: Contact },
    { path: '/my-guide', name: 'My Guide', view: MyGuide },
    { path: '/follow-up', name: 'Follow Up', view: FollowUp },
    { path: '/profile', name: 'Profile', view: Profile },
];

export default _routes;

