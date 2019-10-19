# BaseCamp

#### *A multi-component dashboard app for coding bootcamp students to keep organized and on track throughout their program.*

### Motivation

I created BaseCamp because I wanted a home base for all of my bootcamp related activities/ideas/feelings/tips/etc. I found that I was taking notes and jotting down ideas in several different places, and I wanted to have a 'single source of truth' for all of my notes that I could easily access in an organized manner.

Attending a bootcamp is a pretty intense experience. There is so much information thrown at you, and it goes by so fast. I wanted to create an app to help bring order to some of the craziness that is bootcamp life.

### Overview

The BaseCamp dashboard is made up of 5 main components:
- A **graduation countdown timer** that shows how many days you have left, in addition to a progress bar showing percentage of program completed
- A **daily mood tracker** to keep track of how you are feeling on a scale of 1 to 10 during each day of the program visualized in a github calendar style format
- A **to do list** to keep track of the many tasks you are required to do outside of the basic labs and projects
- A **note board** to organize all of your ideas, shortcuts, tips, etc. onto categorized sticky notes
- A **help button** that displays a rubber duck to help you debug code when you get stuck (known as "rubber duck debugging")

A user can update their user info, including school, course, and end date if they decide to change programs or delay their graduation date.


## Technology
- Ruby on Rails (backend API)
- React (frontend)
- PostgreSQL (database)
- JWT (user authorization)
- CSS grid (layout)
- Semantic UI (styling)

## Installation

To run the server locally:
1. Clone Repo
2. Run `rails s` to start the server
3. Run `yarn start` or `npm start` to load the app

Live site is hosted at https://base-camp.netlify.com

## Screenshot

## Database Models







## Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0d06cf3-0ec7-4d07-a570-2cbc67d5215f/deploy-status)](https://app.netlify.com/sites/base-camp/deploys)

## Credits

- [react-calendar-heatmap](https://github.com/kevinsqi/react-calendar-heatmap)
- [moment.js](https://momentjs.com/)

## License

MIT © jyang81

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
