export enum skillsLevels {
	'Нетренированный',
	'Новичок',
	'Ученик',
	'Адепт',
	'Эксперт',
	'Мастер',
}
export type Stats = keyof IStats;
export type Attributes = keyof IAttributes;
export type Skills = keyof ISkills;

export interface IStats {
	strength: { value: number; skills: Skills[]; name: 'Cила' };
	agility: { value: number; skills: Skills[]; name: 'Ловкость' };
	intellect: { value: number; skills: Skills[]; name: 'Интелект' };
	charisma: { value: number; skills: Skills[]; name: 'Харизма' };
}

export interface IAttributes {
	life: { value: number; dependOn: Stats[]; name: 'Жизненная сила' };
	evasion: { value: number; dependOn: Stats[]; name: 'Уклонение' };
	energy: { value: number; dependOn: Stats[]; name: 'Энергичность' };
}

export interface ISkills {
	attack: { value: skillsLevels; name: 'Атака' };
	stealth: { value: skillsLevels; name: 'Стелс' };
	archery: { value: skillsLevels; name: 'Стрельба из лука' };
	learnability: { value: skillsLevels; name: 'Обучаемость' };
	surviving: { value: skillsLevels; name: 'Выживание' };
	medicine: { value: skillsLevels; name: 'Медицина' };
	intimidation: { value: skillsLevels; name: 'Запугивание' };
	insight: { value: skillsLevels; name: 'Проницательность' };
	appearance: { value: skillsLevels; name: 'Внешний вид' };
	manipulation: { value: skillsLevels; name: 'Манипулирование' };
}

export interface ICharacter {
	name: string;
	stats: IStats;
	attributes: IAttributes;
	skills: ISkills;
}
