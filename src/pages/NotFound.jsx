import React from 'react';

const NotFound = () => {
    return (
        <div className='notFound__container'>
            <img src={require('../pictures/404pic.png')}/>
            <h1>Page not found...</h1>
        </div>
    );
};

export default NotFound;