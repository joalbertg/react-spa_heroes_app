# SPA Heroes App

- [React Router][react_router]

[react_router]: https://reacttraining.com/react-router/web/guides/quick-start

### Installs

With `package.js` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn add react-router-dom
```

### Project Structure

> run `tree -I "node_modules|public"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── HeroesApp.js
│   ├── components
│   │   ├── dc
│   │   │   └── DcScreen.js
│   │   ├── heroes
│   │   │   └── HeroScreen.js
│   │   ├── login
│   │   │   └── LoginScreen.js
│   │   ├── marvel
│   │   │   └── MarvelScreen.js
│   │   └── ui
│   │       └── NavBar.js
│   ├── index.js
│   ├── routers
│   │   ├── AppRouter.js
│   │   └── DashboardRoutes.js
│   └── setupTests.js
└── yarn.lock

8 directories, 15 files
```

### Start Project

> run `docker-compose up`

### Tests

> run `docker-compose run app yarn test`

