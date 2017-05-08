# Triplegolf app

App for scorekeeping, live scores and statistics in golf sports.

## Project status

Work in progress. So far only frontend has something, few views to play with (Home, Sport, Group). Frontend uses localStorage to store the data (Redux state).

## Project template

Template (structure, webpack confs, tests) is based on Juho Vepsäläinen's SurviveJS Redux port of the Kanban app
> Check https://github.com/survivejs-demos/redux-demo

## What's next/missing?

1. Data model for players/groups to store all the shots by sport and by hole. Functionality to increase/decrease shots for players in the given sport and hole.
2. Localizations (i18n)
3. Project structure from 'folder-by-type' to 'folder-by-feature'
4. Backed support instead of just webpack-dev-server development

## Install

`yarn install` or `npm install`

Prefer yarn as there are no shrinkwrap used in this project (yarn provides yarn.lock).

## Start

`npm start`

## Tests

`npm test` to run all the tests

## License

MIT.
