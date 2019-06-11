# GitHub Most Stars

This project is an application built using TypeScript, React, Redux and Material UI to show the three most starred GitHub repositories for a given language in the last month. This application accesses Github's search API to retrieve JSON data. 

NOTE: GitHub's search API is rate limited so sometimes 403 reponses can occur which result in no repositories being listed.

## Get Started

In order to start this project off you will need to have [node](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

### Installing
In the project directory, run the command `yarn install`. This will tell yarn to install all ofthe dependencies needed for this application.

### Running the application

In the project directory, run the command `yarn start`. This runs the application in development mode.

> NOTE: This takes a surprisingly long time so don't be surprised if it isn't instant.

Once this is running you can navigate to [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running unit tests

This project uses **jest** to handle unit tests. These can be run using the command `yarn test`. This runs the test in watch mode allowing you to see watch chnages cause your tests to fail.

## Javascript Technologies Used

In this project I have used the following technologies:

| Technology  | Description |
|---          |---                                                         |
| Typescript  | Typed superset of Javascript                               
| React       | UI framework                                               |
| Redux       | State management                                           |
| Material UI | React components Baed on Google's Material design language |

I have also used utilities as as:

| Technology | Description               |
|---         |---                        |
| Axios      | Promise based HTTP client |
| Moment     | Date helper               |
| Jest       | Testing Library           |

This project was bootstrapped using Facebook's [create-react-app](https://github.com/facebook/create-react-app) repository.
