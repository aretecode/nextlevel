-------------------
# nextlevel
-------------------

A month ago, my colleague Mario Scheliga asked me what goals I wanted to achieve before the year ends. I told him I wanted to level up my build tool skills. So in my free time, I started defining what “leveling up my build tool skills” meant. 
After doing some experimentation & research with him, I wrote out a list:

### monorepo
- [~] modularized lerna monorepo
- [ ] travis + docker staging deploying (with only one easy command, deploy at will, simultaneous or sequentially)
- [x] flowtypes (reusable across projects)
-> [x] cli test running
- [x] eslint (reusable across projects)
- [x] aliasing, helpers, async startups across projects
- [x] benchmarks

### backend
- [x] nodejs 6.9.1
- [~] (simultaneous) hot reloading dev+test server(s) in one cli (works but haven’t added second backend)
- [x] es6 + webpack2 + babel
- [x] point cut routing setup
- [~] hot route analysis to be used for code chunking least|most used routes
- [x] sharable di & configs

### frontend
- [x]  hot reloading 3
- [x] point cut routing setup
- [x] react 15.4.1 & react router 4~
- [x] es6 + webpack2 + babel
- [x] jsdom + enzyme + mocha test suite
- [x] preact for development & production

----------------

## step 1
- [x] set up build system (resolve with helpers etc)
- [x] make test pass
- [x] run webpack when testing, keep it in memory, that we we don't have to build every time? (more difficult than it seems)
- [x] how to do backend with es6
- [x] can do express routes with plugins as well?
- [x] config & db should be on DI
- [x] run test suite with mocha + webpack + babel (more difficult than it seems)
- [x] load plugins in nodejs (more difficult than it seems)
- [x] eslint plugin setup

## step 2
- [x] set up configs extending each other
- [x] clean proprietary code
- [x] ensure lerna works properly

## step 3
- [x] knexdb setup migrations - could just use pg straight up no knex #noknex (opted for couchdb b/c ease of use)
- [x] set up running server with webpack & running built system
- [x] use babel6
- [x] uglify production
- [x] uglify front end production
- [x] reuse configs
- [x] fix ```WARNING in ... Critical dependencies: ... require function is used in a way in which dependencies cannot be statically extracted```
- [x] add backend hot reloading SERVER setup

## step 4
- [x] use webpack 2
- [x] add flowtypes initially for documentation only
- [x] test flowtypes
- [x] add hot reloading 3
- [x] add tests to front end
- [x] route logging & detecting hot routes for automatic code chunking the hot routes (pt 1 middleware logging)

## step 5
- [x] add react routing
- [x] add a component as a route
- [x] use react router 4
- [x] base babel query loader generator
- [x] simplify xtpoint invokation

## step 7
- [x] make xtpoint invokation safe - might need to add another function EITHER
1. ~~add flag to `.point(ns, context)`~~
2. ~~add method `invokeFor`~~
3. ~~add method `apply` -> would require changing exec too (could do `applyExec`)~~
4. [x] **change the signature, if first argument is object it is the context** _THIS_
- [x] async wrapper IN xtpoint invoking routing wrapper? like in whitelists
- [x] reusable core for both backends -> split _CONFIGS_

## step 8
- [x] fix .gitignore RTFM
- [x] read about lerna/monorepo deployment

## step 9
- [ ] benchmarks for backend
- [ ] real benchmarks
- [ ] fix tests not stopping watching on their own

## step 10
- [ ] write a blog post

## next steps
- [ ] worker
- [ ] i18n
- [ ] docker
- [ ] package manager
- [ ] move reusable deps like underscore to root (issue with lerna)
- [ ] later, add second backend
