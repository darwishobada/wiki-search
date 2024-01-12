import React, {createContext} from 'react';

import {LOCAL_STORAGE_KEYS} from '../constants';

const historyList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.history) || '[]');

export interface IContextStateValueType {
	history: {label: string; id: string}[];
}

export const ContextValue: IContextStateValueType = {
	history: historyList,
};

export interface IContextInitValueType {
	globalContextValue: IContextStateValueType;
	setGlobalContextValue: React.Dispatch<React.SetStateAction<IContextStateValueType>>;
}

export const CONTEXT_INIT_VALUE: IContextInitValueType = {
	globalContextValue: ContextValue,
	setGlobalContextValue: () => {
		return;
	},
};

export const GlobalContext = createContext(CONTEXT_INIT_VALUE);
