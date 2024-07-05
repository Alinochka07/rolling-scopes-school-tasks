import React, { PropsWithChildren, ReactElement } from 'react';
import './button.scss';

export interface ButtonProps extends PropsWithChildren {
    onClick?: () => void;
}

const Button = ({ onClick, children }: ButtonProps): ReactElement => {
    return (
        <button 
            type='button' 
            className='button'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;