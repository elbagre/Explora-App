## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Question Cycles

### Question API Request Actions

* `fetchAllQuestions`
  0. invoked from `QuestionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/questions` is called.
  0. `receiveAllQuestions` is set as the success callback.

* `createQuestion`
  0. invoked from new question button `onClick`
  0. `POST /api/questions` is called.
  0. `receiveSingleQuestion` is set as the success callback.

* `fetchSingleQuestion`
  0. invoked from `QuestionDetail` `didMount`/`willReceiveProps`
  0. `GET /api/questions/:id` is called.
  0. `receiveSingleQuestion` is set as the success callback.

* `updateQuestion`
  0. invoked from `QuestionForm` `onSubmit`
  0. `POST /api/questions` is called.
  0. `receiveSingleQuestion` is set as the success callback.

* `destroyQuestion`
  0. invoked from delete question button `onClick`
  0. `DELETE /api/questions/:id` is called.
  0. `removeQuestion` is set as the success callback.

### Questions API Response Actions

* `receiveAllQuestions`
  0. invoked from an API callback
  0. the `QuestionsReducer` updates `questions` in the application's state.

* `receiveSingleQuestion`
  0. invoked from an API callback
  0. the `QuestionsReducer` updates `questions[id]` in the application's state.

* `removeQuestion`
  0. invoked from an API callback
  0. the `QuestionsReducer` removes `questions[id]` from the application's state.
