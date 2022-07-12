import { ICharacter } from '../interfaces/character.interface';

export const writeToStorage = (data: ICharacter) => {
	localStorage.setItem('character', JSON.stringify(data));
};
export const getFromStorage = () => {
	return localStorage.getItem('character');
};
