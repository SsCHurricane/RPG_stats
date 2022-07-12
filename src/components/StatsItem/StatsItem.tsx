import { FC, Fragment } from 'react';

import { skillsLevels } from '../../interfaces/character.interface';
import { Heading, Input } from '../ui';

import { IStatsItemProps } from './StatsItem.props';
import './StatsItem.scss';

const StatsItem: FC<IStatsItemProps> = ({
	item,
	type,
	title,
	register,
	skills = false,
}) => {
	switch (type) {
		case 'label':
			return (
				<div className="stats">
					<Heading type="h3">{title}</Heading>
					{Object.values(item).map((el: any, index) => (
						<p key={el.name + index}>
							{el.name} -{' '}
							<span>{skills ? skillsLevels[el.value] : el.value}</span>
						</p>
					))}
				</div>
			);
		case 'input':
			return (
				<div className="stats stats--main">
					{Object.keys(item).map((stat, index) => (
						<Fragment key={'div' + index}>
							<p>{item[stat].name}</p>

							<Input
								key={stat + index}
								type="number"
								register={register!}
								registerType={`stats.${stat}.value`}
							/>
						</Fragment>
					))}
				</div>
			);
		default:
			return <></>;
	}
};

export default StatsItem;
