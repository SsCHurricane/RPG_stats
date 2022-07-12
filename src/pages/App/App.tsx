import { useForm } from 'react-hook-form';

import { StatsItem } from '../../components';
import { Input } from '../../components/ui';
import Button from '../../components/ui/Button/Button';
import useCharacter from '../../hooks/useCharacter';
import { ICharacter } from '../../interfaces/character.interface';
import { MainLayout } from '../../layout';

import './App.scss';

function App() {
	const { character, onSubmit, onAttack, onLoad, onSave } = useCharacter();
	const { register, handleSubmit, setValue } = useForm<ICharacter>({
		defaultValues: character,
	});
	const damage = 5;

	return (
		<MainLayout>
			<main className="main">
				<Input
					type="text"
					register={register}
					registerType={'name'}
					required={true}
				/>

				<div className="wrapper">
					<StatsItem
						type="input"
						title="Stats"
						item={character.stats}
						register={register}
					/>

					<form onSubmit={handleSubmit(onSubmit)}>
						<Button>Подтвердить</Button>
					</form>
					<Button className="button--red" onClick={() => onAttack(damage)}>
						Атаковать
					</Button>
					<Button className="button--yellow" onClick={() => onSave()}>
						Сохранить
					</Button>
					<Button className="button--yellow" onClick={() => onLoad(setValue)}>
						Загрузить
					</Button>
				</div>

				<div className="wrapper">
					<StatsItem
						type="label"
						title="Attributes"
						item={character.attributes}
					/>
					<StatsItem
						type="label"
						title="Skills"
						skills={true}
						item={character.skills}
					/>
				</div>
			</main>
		</MainLayout>
	);
}

export default App;
