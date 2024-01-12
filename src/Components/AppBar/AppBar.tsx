import React, {useContext, useEffect, useState} from 'react';
import {Box, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import SearchInput from '../SearchInput';
import {ROUTER_PATHS} from '../../constants';
import {GlobalContext} from '../../Context/global';
import {StyledAppBar} from './styles';
const AppBarComponent = ({hideSearch}: {hideSearch: boolean}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [queryParams] = useSearchParams();
	const text = queryParams.get('text');
	const navigate = useNavigate();
	const [searchVal, setSearchVal] = useState('');
	const {globalContextValue} = useContext(GlobalContext);

	useEffect(() => {
		if (text) {
			setSearchVal(text);
		}
	}, [text]);

	useEffect(() => {
		if (searchVal) {
			navigate(`${ROUTER_PATHS.SEARCH}?text=${searchVal}`);
		}
	}, [navigate, searchVal]);

	const handleSearch = (str: string) => {
		const searchString = str.trim();
		if (searchString) {
			navigate(`${ROUTER_PATHS.SEARCH}?text=${searchString}`);
		}
	};
	return (
		<StyledAppBar position="sticky">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					color={theme.palette.info.contrastText}
					style={{cursor: 'pointer', marginRight: 40, textAlign: 'center'}}
					onClick={() => navigate('/')}>
					Wiki Search
				</Typography>
				{hideSearch && (
					<Box width={isMobile ? '90%' : '700px'}>
						<SearchInput
							onTextInputChange={handleSearch}
							options={globalContextValue.history}
							value={searchVal}
							setValue={setSearchVal}
						/>
					</Box>
				)}
			</Toolbar>
		</StyledAppBar>
	);
};

export default AppBarComponent;
