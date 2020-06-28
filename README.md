# SPA Heroes App

- [React Router][react_router]
- [Animate CSS][animate_st]

[react_router]: https://reacttraining.com/react-router/web/guides/quick-start
[animate_st]: https://animate.style/

### Installs

With `package.js` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn add react-router-dom query-string
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
│   │   │   ├── HeroList.js
│   │   │   └── HeroScreen.js
│   │   ├── login
│   │   │   └── LoginScreen.js
│   │   ├── marvel
│   │   │   └── MarvelScreen.js
│   │   └── ui
│   │       └── NavBar.js
│   ├── data
│   │   └── heroes.js
│   ├── index.js
│   ├── routers
│   │   ├── AppRouter.js
│   │   └── DashboardRoutes.js
│   ├── selectors
│   │   ├── getHeroById.js
│   │   └── getHeroesByPublisher.js
│   └── setupTests.js
└── yarn.lock

10 directories, 19 files
```

### Start Project

> run `docker-compose up`

### Tests

> run `docker-compose run app yarn test`

