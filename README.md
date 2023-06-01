<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p> -->

# Quiz API

Quiz Api build with 
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeScript](https://www.typescriptlang.org/)

this project is meanly for learning NestJs, TypeScript and TypeORM <br />
quiz api with orm and sqlite as database, with basic crud operations,<br />
user authentication and authorization, and some basic unit testing<br />
learning some about injectable, decorators, guards, interceptors, pipes, filters, etc.. all basic nest stuff<br />

this project is for long run and maybe will not be finished soon, <br />

## Todo
- [x] Quiz
  - [x] Create Quiz
    - [x] Validation
    - [x] Relations Handled
  - [ ] Read Quiz
    - [x] Get all quizzes
    - [ ] Get one quiz by id or name
  - [ ] Update Quiz
    - [ ] Validation
    - [ ] Relations Handled
    - [ ] update by id or name or sub choices id
  - [ ] Delete Quiz
    - [ ] Soft or Hard Delete ?
    - [ ] Relations Handled  on cascade or set null
  - [ ] who can create quiz ?
    - [ ] admins 
    - [ ] teachers
    - [ ] students (maybe)

- [ ] User
  - [ ] Create User
    - [ ] Validation
    - [ ] Relations Handled
  - [ ] Select User
    - [ ] Get all users (admins and teachers)
    - [ ] Get one user by id (admins and teachers)
    - [ ] search users by name (admins and teachers)
  - [ ] update User (admins and the student himself only)
    - [ ] Validation
    - [ ] Relations Handled
    - [ ] update by id
  - [ ] Delete User (admins and the student himself only)
    - [ ] Soft delete only
    - [ ] Relations Handled

- [ ] Auth
  - [ ] confirm email
  - [ ] reset password
  - [ ] forgot password
  - [ ] login
  - [ ] logout
  - [ ] refresh token




<!-- ## Installation

```bash
$ npm install
``` -->
<!-- 
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->