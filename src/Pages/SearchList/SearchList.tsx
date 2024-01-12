import React, {useContext, useEffect, useState} from 'react';
import {Box, Card, Divider, Typography, Stack, Skeleton} from '@mui/material';
import {wikiSearchService} from '../../Services/WikiSearch/WikiSearch.service';
import {useSearchParams} from 'react-router-dom';
import {LOCAL_STORAGE_KEYS} from '../../constants';
import {GlobalContext} from '../../Context/global';
import {SearchListWrapper} from './styles';
import {v4 as uuidv4} from 'uuid';
import {delay} from 'lodash';
import {WikiSearchDto} from '../../Services/WikiSearch/DTO/wikiSearch.dto';

const HISTORY_LIMIT = 10;
const SearchList = () => {
	const [list, setList] = useState<{label: string; link: string}[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [queryParams] = useSearchParams();
	const text = queryParams.get('text');
	const {setGlobalContextValue} = useContext(GlobalContext);

	const updateHistory = (text: string) => {
		setGlobalContextValue((prevState) => {
			const state = {...prevState};
			const textIndex = state.history.findIndex((item) => item.label === text);
			if (textIndex !== -1) {
				const toBeRelocated = state.history[textIndex];
				state.history.splice(textIndex, 1);
				state.history.unshift(toBeRelocated);
			} else {
				if (state.history.length === HISTORY_LIMIT) {
					state.history.pop();
				}
				state.history.unshift({label: text!, id: uuidv4()});
			}
			localStorage.setItem(LOCAL_STORAGE_KEYS.history, JSON.stringify(state.history));
			return state;
		});
	};

	const fetchData = () => {
		setIsLoading(true);
		const queryParams: WikiSearchDto = {
			search: text || '',
			action: 'opensearch',
			origin: '*',
			format: 'json',
			limit: 20,
			maxage: 10,
		};
		wikiSearchService
			.fetchWikiSearchResults(queryParams)
			.then((res) => {
				const [, results, , links] = res;

				let mappedResults: {label: string; link: string}[] = [];
				results.forEach((item: string, index: number) => {
					mappedResults.push({
						label: item,
						link: links[index],
					});
				});
				setList(mappedResults);
				delay(() => setIsLoading(false), 200);
				updateHistory(text!); // updates history of the last 10 searches
			})
			.catch((e) => {
				setIsLoading(false);
				console.log(e);
			});
	};
	useEffect(() => {
		if (text) {
			fetchData();
		}
	}, [text]);

	return (
		<Box sx={{width: '100%'}}>
			{isLoading ? (
				<Box>
					{Array.from(Array(10).keys()).map((_, index) => (
						<Skeleton key={index} animation="wave" height={100} />
					))}
				</Box>
			) : (
				<SearchListWrapper>
					{list.length > 0 ? (
						<Card>
							<Stack spacing={3} p={2} divider={<Divider />}>
								{list.map((item) => (
									<Typography
										key={item.link}
										className={'listLabel'}
										onClick={() => window.open(item.link, '__blank')}>
										{item.label}
									</Typography>
								))}
							</Stack>
						</Card>
					) : (
						<Box mt={10}>
							<Card>
								<Typography variant={'h4'} textAlign={'center'}>
									No results were found!
								</Typography>
							</Card>
						</Box>
					)}
				</SearchListWrapper>
			)}
		</Box>
	);
};

export default SearchList;
