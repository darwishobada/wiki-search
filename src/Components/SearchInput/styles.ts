import {Box} from '@mui/material';
import styled from 'styled-components';

export const SearchInputWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({theme}) => theme.palette.info.contrastText};
	.history-icon {
		height: 15px;
		width: 15px;
		color: ${({theme}) => theme.palette.info.dark};
		margin-right: 10px;
	}
`;
