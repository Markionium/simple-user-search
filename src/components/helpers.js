import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { curry } from 'lodash/fp';

export const render = curry(function render(component, element) {
    return ReactDOM.render(component, element);
});

export const loadJSON = (url) => {
    return fetch(
        `http://localhost:8080/dhis/api/${url}.json`,
        {
            headers: {
                Authorization: `Basic ${btoa('admin:district')}`,
            },
        }
    )
    .then((response) => response.json());
};

export const trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
});

export const renderComponent = curry(function (component, props) {
    return createElement(component, props);
});

export const renameProp = curry((fr, to, source) => {
    console.log(fr, to, source);
    const copiedKeys = Object.keys(source)
        .filter(key => key !== to)
        .reduce((acc, key) => {
            acc[key] = source[key];
            return acc;
        }, {});

    return Object.assign(copiedKeys, { [to]: source[fr] });
});