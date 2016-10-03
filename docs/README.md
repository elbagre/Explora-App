#Explora
Explora is a web application based on the question and answer website Explora.
Users of Explora will be able to interact with other users through a variety of
forums that connect users through questions and answers.

================================================================================
##KEY FEATURES:##
================================================================================
- [ ] Create accounts, log in, and access the main page
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Ask Questions
- [ ] Answer Questions and Comment on Answers
- [ ] Search Questions
- [ ] Access questions by tag/topic
- [ ] *BONUS* Up/down vote answers to questions, order questions by popularity
- [ ] *BONUS* Reply to comments
================================================================================
##Design Docs:##
================================================================================
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
================================================================================
##Implementation Timeline:##
================================================================================
### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Questions Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] `Question` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`QuestionsController`)
- [ ] JBuilder views for questions
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Autosave notes feature
- [ ] Style notes components
- [ ] Seed notes

### Phase 3: Answers and Comments (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

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

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] `Topic` model and `TopicTaggings` join table
- [ ] Fetching questions by topic
- [ ] Adding topics to questions
- [ ] Searching questions by topic
- [ ] Style search & topic components
- [ ] Seed topics with seed data

### Phase 5: Allow Complex Styling in Questions and Answers (1 days, W2 Th 6pm)

**objective:** Allow rich editing of questions.
- Figure out how to edit text and embed pictures into answers and questions

### Phase 6: - Pagination / infinite scroll for Questions Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

- [ ] Paginate Questions Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll
