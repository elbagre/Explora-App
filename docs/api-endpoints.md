**HTML API**

*Root*
+ GET /

*Users*
+ GET /users/new
+ POST /users/
+ PATCH /users/

*Session*
+ GET /session/new
+ POST /session
+ DELETE /session

**JSON API**
*Questions*
+ GET /api/questions
  - Homepage
  - Random questions from followed topics
    * Most upvoted answer
  - Search
+ POST /api/questions
+ GET /api/questions/:questionId
+ PATCH /api/questions/:questionId
+ DELETE /api/questions/:questionId

*Answers*
+ A question's answers will be included in the question index item
+ GET /api/answers
  - Index page with unanswered questions
+ POST /api/questions/questionId/answers
+ PATCH /api/questions/questionId/answers/:answerId
+ DELETE /api/questions/questionId/answers/:answerId

*Comments*
+ Answer's comments will be included in AnswerItem Component
+ POST /api/questions/questionId/answers
+ DELETE /api/questions/questionId/answers/:answerId
