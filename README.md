# Test VingtCinq

## Setup

- clone this repo [git@github.com:gdenier/test-25.git](git@github.com:gdenier/test-25.git)
- yarn on the root folder
- web:
  - cd apps/web
  - yarn start
- mobile:
  - cd apps/mobile
  - yarn start
  - for ios, tap i, it will open simulator and run the app on expo
  - for android, tap a, it will open android

## Auth

it use the [JSON API](https://jsonplaceholder.typicode.com) user's, you just need to use the right email and a password with more than 8 char.

Email example:

- Sincere@april.biz
- Shanna@melissa.tv
- Nathan@yesenia.net

## Libraries

### Chore

- react-hook-form for form easy mode
- zod for data validation
- tanstack/react-query for data query

### Web

- MaterialUI for the ui components

### Mobile

- dripsy for components theming
- twrnc for tailwindcss dx in react native
- expo-router to handle routing from logged to anonyme
