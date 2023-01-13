import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Button = ({ children }) => {
    return (
      <button className="main-btn">
        <Link href={"#"}>{children}</Link>
        <BsArrowRight className=" text-3xl rounded-lg circle text-dark	" />
      </button>
    );
};

export default Button;