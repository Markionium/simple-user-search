import React from 'react';
import { render, renderComponent, loadJSON, trace, renameProp } from './components/helpers';
import { App, User } from './components/ui';
import { compose, curry, get, map } from 'lodash/fp';

const addKeyPropFrom = curry((propName, props) => Object.assign({}, props, { key: props[propName] }));

async function startApp() {
    const users = get('users', await loadJSON('users'));

    const renderUser = renderComponent(User);
    const prepareUserProps = renameProp('displayName', 'name');
    const renderUserWithProps = compose(renderUser, addKeyPropFrom('name'), prepareUserProps);

    const renderedChildren = map(renderUserWithProps, users);
    const renderApp = render(<App>{renderedChildren}</App>);

    renderApp(document.querySelector('#app'));
}

startApp();