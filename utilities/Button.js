import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Button = ({ children }) => {
    return (
      <button className="main-btn">
        <Link href={"#"}>{children}</Link>
        <BsArrowRight className="ml-2 rounded-3xl circle	" />
      </button>
    );
};

export default Button;