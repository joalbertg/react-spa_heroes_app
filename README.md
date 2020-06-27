# SPA Heroes App

### Installs

With `package.js` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
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
│   ├── index.js
│   └── setupTests.js
└── yarn.lock

1 directory, 8 files
```

### Start Project

> run `docker-compose up`

### Tests

> run `docker-compose run app yarn test`

