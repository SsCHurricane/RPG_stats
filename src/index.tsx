import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App/App';
import { CharacterProvider } from './store/providers/character.provider';
import './styles/index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<CharacterProvider>
			<App />
		</CharacterProvider>
	</React.StrictMode>,
);
