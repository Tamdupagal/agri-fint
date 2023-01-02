import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Button = ({ children }) => {
    return (
        <button className='main-btn'>
            <Link href={"#"} >
                {children}
            </Link>
            <BsArrowRight className='ml-2'/>
        </button>




    );
};

export default Button;