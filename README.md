# Task description 

###  Challenge Overview: Wikipedia API React Application
####  Core Task
Implement a search box application in Typescript/React. On submitting a search query, the app
should call Wikipedia's API.
#### Example API call
https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=<query>
#### Data Handling and Rendering
1. Parse the API response to extract page titles.
2. Display these titles on the page.
3. Ensure the titles are clickable links that lead to the corresponding Wikipedia pages.
#### Search History Tracking
1. Maintain a history of the last 10 searches.
2. Display this history in the UI.
#### Styling and Layout:
1. Style the application for a better user experience.
2. Focus on layout, color scheme, and responsive design.
 #### Performance Optimization
1. Implement caching strategies or other optimizations to improve performance.
2. Consider lazy loading, API request optimizations, etc.
#### Additional Features
1. Implement pagination or infinite scrolling for search results.
#### Evaluation Criteria
1. Code Quality: Readability, use of TypeScript features, and best practices.
2. Functionality: Correctness and completeness of the required features.
3. UI/UX Design: Aesthetics and usability of the interface.
4. Optimization: Efficiency of the code, especially in handling API responses and rendering.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
