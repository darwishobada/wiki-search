import React, {useState, useMemo} from 'react';
import InitTheme from './Theme/InitTheme';
import {RouterProvider} from 'react-router-dom';
import router from './router';
import './App.css';
import {
	ContextValue,
	GlobalContext,
	IContextStateValueType,
	IContextInitValueType,
} from './Context/global';
function App() {
	const [globalContextValue, setGlobalContextValue] =
		useState<IContextStateValueType>(ContextValue);

	const context_value: IContextInitValueType = useMemo(
		() => ({globalContextValue, setGlobalContextValue}),
		[globalContextValue, setGlobalContextValue]
	);

	return (
		<GlobalContext.Provider value={context_value}>
			<InitTheme>
				<RouterProvider router={router} />
			</InitTheme>
		</GlobalContext.Provider>
	);
}

export default App;
