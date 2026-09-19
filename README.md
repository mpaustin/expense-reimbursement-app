# Expense Reimbursement App

React/TypeScript frontend for the expense reimbursement workflow.

## Setup

```sh
npm install
cp .env.example .env
npm start
```

Set `REACT_APP_API_BASE_URL` to the backend API root. For the local Java service, the default is:

```sh
REACT_APP_API_BASE_URL=http://localhost:8080/project1mpa/api
```

## Scripts

```sh
npm start
npm test
npm run build
```

This project uses an older Create React App stack, so the start/build scripts include `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with newer Node versions.
