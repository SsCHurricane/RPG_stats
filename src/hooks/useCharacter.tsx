import { useContext } from 'react';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';

import { ICharacter, Skills, Stats } from '../interfaces/character.interface';
import { getFromStorage, writeToStorage } from '../services/local.service';
import { CharacterContext } from '../store/providers/character.provider';

const useCharacter = () => {
	const value = useContext(CharacterContext);

	const onSubmit: SubmitHandler<ICharacter> = (data) => {
		Object.values(data.attributes).map((attribute) =>
			attribute.dependOn.map(
				(el: Stats) => (attribute.value += +data.stats[el].value),
			),
		);

		Object.values(value.character.stats).map((stat) => {
			stat.skills.map((el: Skills) => {
				let newValue = 0;

				if (+value.character.skills[el].value + +stat.value > 5) newValue = 5;
				else newValue = +value.character.skills[el].value + +stat.value;

				data.skills[el].value = newValue;
			});
		});

		value.setCharacter!(data);
	};

	const onAttack = (damage: number) => {
		let newLife = 0;

		if (value.character.attributes.life.value - damage < 0) newLife = 0;
		else newLife = value.character.attributes.life.value - damage;

		const newCharacter = { ...value.character };
		newCharacter.attributes.life.value = newLife;

		value.setCharacter!(newCharacter);
	};

	const onSave = () => {
		writeToStorage(value.character);
	};

	const onLoad = (setValue: UseFormSetValue<ICharacter>) => {
		const loadedCharacter: ICharacter = JSON.parse(getFromStorage()!);
		value.setCharacter!(loadedCharacter);
		setValue('name', loadedCharacter.name);
		Object.keys(loadedCharacter.stats).map((el) => {
			setValue(
				`stats.${el as Stats}.value`,
				loadedCharacter.stats[el as Stats].value,
			);
		});
	};

	return { ...value, onSubmit, onAttack, onSave, onLoad };
};

export default useCharacter;
