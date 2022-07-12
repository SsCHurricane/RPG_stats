import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ICharacter } from '../../../interfaces/character.interface';

export default interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	register: UseFormRegister<ICharacter>;
	setValue?: UseFormSetValue<ICharacter>;
	registerType: any;

	type: 'number' | 'text';
	required?: boolean;
}
