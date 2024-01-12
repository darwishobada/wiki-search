import React, {useContext, useEffect, useState} from 'react';
import SearchInput from '../../Components/SearchInput';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import {GlobalContext} from '../../Context/global';
import {ROUTER_PATHS} from '../../constants';
import {useNavigate} from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const {globalContextValue} = useContext(GlobalContext);
	const [searchVal, setSearchVal] = useState('');
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
		<Box
			m={isMobile ? 2 : 20}
			mt={20}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}>
			<Box
				width={isMobile ? '100%' : '700px'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}>
				<Box mb={3}>
					<Typography variant={'h1'}>Wiki</Typography>
				</Box>
				<SearchInput
					onTextInputChange={handleSearch}
					options={globalContextValue.history}
					value={searchVal}
					setValue={setSearchVal}
				/>
			</Box>
		</Box>
	);
};

export default Home;
