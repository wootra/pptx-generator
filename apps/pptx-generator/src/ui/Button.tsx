import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button = ({
    children,
    className,
    ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
    return (
        <button
            className={classNames(
                'p-2 bg-cyan-900 hover:bg-cyan-700 text-cyan-100 disabled:bg-gray-500 rounded-lg',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
