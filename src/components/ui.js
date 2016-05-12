import React from 'react';

export function App(props) {
    return (
        <div>{props.children}</div>
    );
}

export function User(props) {
    return (
        <div>
            {props.name}
        </div>
    );
}