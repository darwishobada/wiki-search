import styled from 'styled-components';
import {Box} from '@mui/material';

export const SearchListWrapper = styled(Box)`
	padding: 10px;

	.listLabel {
		padding: 10px;
		transition: 0.3s;
		border-radius: 3px;
		&:hover {
			background: ${({theme}) => theme.palette.info.main};
			cursor: pointer;
		}
	}
`;
