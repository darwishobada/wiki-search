import React from 'react';
import {Outlet, useMatch} from 'react-router-dom';
import {Container} from '@mui/material';
import {MainLayoutBox} from './styles';
import AppBarComponent from '../../Components/AppBar';

const MainLayout = () => {
	const matchData = useMatch('/');
	return (
		<MainLayoutBox>
			<AppBarComponent hideSearch={!matchData} />
			<Container>
				<Outlet />
			</Container>
		</MainLayoutBox>
	);
};

export default MainLayout;
