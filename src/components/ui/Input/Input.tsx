import { FC } from 'react';

import InputProps from './Input.props';
import './Input.scss';

const Input: FC<InputProps> = ({
	register,
	registerType,
	type = 'number',
	required = false,
	...props
}) => {
	switch (type) {
		case 'text':
			return (
				<input
					{...props}
					type={type}
					required={required}
					{...register(registerType, { required: required })}
					placeholder={`Character ${registerType}`}
					className="input input--text"
				/>
			);
		case 'number':
			return (
				<input
					{...props}
					type={type}
					min={0}
					max={100}
					required={required}
					{...register(registerType, { min: 0, max: 100 })}
					className="input input--number"
				/>
			);
		default:
			return <></>;
	}
};

export default Input;
