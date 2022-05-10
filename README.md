# Express-Backend-TypeScript-Example
This project is the backend for [react-test-application](https://github.com/sondresjolyst/react-test-application)

## Quick Start
Install the dependencies.

    $ npm i
    
Start the server:

    $ npm run dev
    
View the website at: [http://localhost:1025](http://localhost:1025)

## Available Routes

 - /api
	 - /catfacts
		 - /fact
		 - /facts
		 - /breeds

## Environments

| Environments	| Value 	| Description                           |
|---------------|-----------|---------------------------------------|
| HOST			| 0.0.0.0	| IP address for the application		|
| PORT			| 1025		| What port the application should use  |

## Radixconfig

| Name			| Branch		|
|---------------|---------------|
| production	| master		|
| development	| development   |

## Docker

| Container Name			| Dockerfile	| External port	| Internal port |
|---------------------------|---------------|---------------|---------------|
| express-backend-container | Dockerfile    | 1025			| 1025			|

### Build

    docker build -t express-backend

### Build and start production

    docker-compose -f docker-compose.prod.yaml up -d --build