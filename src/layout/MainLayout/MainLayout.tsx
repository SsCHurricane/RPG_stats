import { FC } from 'react';

import { Header } from '../../components';

import { MainLayoutProps } from './MainLayout.props';
import './MainLayout.scss';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="container layout-main">
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
