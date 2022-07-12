import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useMemo,
	useState,
} from 'react';

import { ICharacter } from '../../interfaces/character.interface';

const defaultCharacter: ICharacter = {
	name: '',
	stats: {
		strength: {
			value: 0,
			skills: ['attack'],
			name: 'Cила',
		},
		agility: {
			value: 0,
			skills: ['stealth', 'archery'],
			name: 'Ловкость',
		},
		intellect: {
			value: 0,
			skills: ['learnability', 'surviving', 'medicine'],
			name: 'Интелект',
		},
		charisma: {
			value: 0,
			skills: ['insight', 'intimidation', 'appearance', 'manipulation'],
			name: 'Харизма',
		},
	},
	attributes: {
		life: { value: 3, dependOn: ['strength'], name: 'Жизненная сила' },
		evasion: { value: 10, dependOn: ['agility'], name: 'Уклонение' },
		energy: {
			value: 0,
			dependOn: ['agility', 'intellect'],
			name: 'Энергичность',
		},
	},
	skills: {
		appearance: { value: 0, name: 'Внешний вид' },
		archery: { value: 0, name: 'Стрельба из лука' },
		attack: { value: 0, name: 'Атака' },
		insight: { value: 0, name: 'Проницательность' },
		intimidation: { value: 0, name: 'Запугивание' },
		learnability: { value: 0, name: 'Обучаемость' },
		manipulation: { value: 0, name: 'Манипулирование' },
		medicine: { value: 0, name: 'Медицина' },
		stealth: { value: 0, name: 'Стелс' },
		surviving: { value: 0, name: 'Выживание' },
	},
};

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IContext {
	character: ICharacter;
	setCharacter?: TypeSetState<ICharacter>;
}

export const CharacterContext = createContext<IContext>({
	character: defaultCharacter,
});

export const CharacterProvider = ({ children }: PropsWithChildren) => {
	const [character, setCharacter] = useState<ICharacter>(defaultCharacter);

	const value = useMemo(() => ({ character, setCharacter }), [character]);

	return (
		<CharacterContext.Provider value={value}>
			{children}
		</CharacterContext.Provider>
	);
};
