import {API_ENDPOINTS} from '../../constants';
import {WikiSearchDto} from './DTO/wikiSearch.dto';

class WikiSearchService {
	url: string;
	constructor(url: string) {
		this.url = url;
	}

	fetchWikiSearchResults(searchParams: WikiSearchDto) {
		const params = new URLSearchParams(searchParams as Record<string, string>);
		return fetch(`${this.url}?${params}`).then((response) => response.json());
	}
}

export const wikiSearchService = new WikiSearchService(API_ENDPOINTS.WIKI_SEARCH);
