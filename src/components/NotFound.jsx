import React from 'react';
import errorImg from '../assets/404.gif'
const NotFound = () => {
    return (
        <div className='flex justify-center mt-10'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;