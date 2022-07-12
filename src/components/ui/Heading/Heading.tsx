import { FC } from 'react';

import HeadingProps from './Heading.props';
import './Heading.scss';

const Heading: FC<HeadingProps> = ({
	children,
	className,
	type = 'h1',
	...props
}) => {
	switch (type) {
		case 'h1':
			return (
				<h1 className={`heading-one ${className ? className : ''}`} {...props}>
					{children}
				</h1>
			);
		case 'h3':
			return (
				<h3
					className={`heading-three ${className ? className : ''}`}
					{...props}
				>
					{children}
				</h3>
			);

		default:
			return <></>;
	}
};

export default Heading;
