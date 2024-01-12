import React, {useCallback} from 'react';

import {Autocomplete, TextField, InputAdornment, IconButton, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import {SearchInputWrapper} from './styles';
import {debounce} from 'lodash';

interface SearchInputProps {
	value: string;
	setValue: (v: string) => void;
	onTextInputChange: (str: string) => void;
	options: {label: string}[];
}
const SearchInput = ({value, setValue, onTextInputChange, options}: SearchInputProps) => {
	const theme = useTheme();

	const debouncedSearch = useCallback(
		debounce((searchText: string) => {
			onTextInputChange && onTextInputChange(searchText);
		}, 1000),
		[]
	);

	return (
		<Autocomplete
			fullWidth
			freeSolo
			id="main-search-bar"
			disableClearable
			options={options.map((option) => option.label)}
			value={value}
			onChange={(_, v) => setValue(v)}
			onInputChange={(_, newInputValue, reason) => {
				if (reason !== 'reset') {
					debouncedSearch(newInputValue.trim());
				}
			}}
			renderOption={(props, option) => (
				<li key={option} {...props}>
					<SearchInputWrapper>
						<HistoryIcon className={'history-icon'} />
						{option}
					</SearchInputWrapper>
				</li>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					placeholder="Search"
					InputProps={{
						...params.InputProps,
						type: 'search',
						autoFocus: true,
						style: {
							color: theme.palette.info.contrastText,
							backgroundColor: theme.palette.background.paper,
						},
						startAdornment: (
							<InputAdornment position="start">
								<IconButton size="small">
									<SearchIcon
										// style={{color: 'hsl(223,10%,58%)'}}
										height={20}
										width={20}
									/>
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			)}
		/>
	);
};

export default SearchInput;
