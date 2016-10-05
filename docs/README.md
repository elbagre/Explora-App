#Explora

Explora is a web application based on the question and answer website Quora.
Users of Explora will be able to interact with other users through a variety of
topic forums that connect users through questions and answers.

##Functional Goals

- [ ] Create accounts, log in, and access the main page
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Ask Questions
- [ ] Answer Questions and Comment on Answers
- [ ] Search Questions
- [ ] Access questions by tag/topic
- [ ] BONUS: Up/down vote answers to questions, order questions by popularity
- [ ] BONUS: Styling components
- [ ] BONUS: Reply to comments
##Design Docs:

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

##Implementation Timeline:

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] User signup/signin components
- [ ] Blank landing component after signup/signin
- [x] Style signup/signin components
- [x] Seed users
- [x] Review phase 1

### Phase 2: Questions Model, API, and components (3 days)

**Objective:** Questions can be created, read, edited and destroyed through

- [x] `Question` model
- [x] Seed database with a small amount of test data
- [x] CRUD API for Questions (`QuestionsController`)
- [x] JBuilder views for questions
- Question components and respective Redux loops
  - [x] `QuestionsIndex`
  - [x] `QuestionIndexItem`
  - [x] `QuestionForm`
- [x] Style Question components
- [x] Seed Questions

### Phase 3: Answers and Comments (3 day)

**Objective:** Answers belong to Questions, Comments belong to Answers, both can
be accessed through their respective components and be read, edited, and
destroyed via the API.

- [ ] `Answer` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for Answers and Comments (`AnswersController`, `CommentsController`)
- [ ] JBuilder views for comments and answers
- [ ] Adding answers requires a question
- [ ] Adding comments requires a question
- [ ] Viewing answers by question
- [ ] Viewing comments by answer
- [ ] Style components
- [ ] Seed answers and comments

### Phase 4: Tags (1 days)

**Objective:** Questions can be tagged with multiple topics, and topics are searchable.


- [ ] `Topic` model and `TopicTaggings` join table
- [ ] Fetching questions by topic
- [ ] Adding topics to questions
- [ ] Searching questions by topic
- [ ] Style search & topic components
- [ ] Seed topics with seed data

### Phase 5: Allow Complex Styling in Questions and Answers (Bonus)

**objective:** Allow rich editing of questions.

- Figure out how to edit text and embed pictures into answers and questions

### Phase 6: - Pagination / infinite scroll for Questions Index (Bonus)

**objective:** Add infinite scroll to Questions Index

- [ ] Paginate Questions Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll
