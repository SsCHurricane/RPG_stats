import { UseFormRegister } from 'react-hook-form';

import { ICharacter } from '../../interfaces/character.interface';

export interface IStatsItemProps {
	item: any;
	type?: 'input' | 'label';
	skills?: boolean;
	title: 'Attributes' | 'Stats' | 'Skills';
	register?: UseFormRegister<ICharacter>;
}
