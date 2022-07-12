import { FC } from 'react';

import { IButtonProps } from './Button.props';
import './Button.scss';

const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={`button ${className ? className : ''}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
