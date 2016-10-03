{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createQuestion: {errors: ["body can't be blank"]},
    createAnswer: {errors: []},
    createComment: {errors: []}
  },
  questions: {
    1: {
      title: "Where is Peru?",
      body: "I think it's near Kenya.",
      upvotes: 0,
      author_id: 1,
      answers: [
        {
          id: 1,
          author_id: 2
        },
        {
          id: 2,
          author_id: 3
        }
      ],
      tags: {
        1: {
          id: 1
          topic: "south_america"
        }
      }
    }
  },
  answers: {
    1: {
      question_id: 2,
      author_id: 1,
      body: "I can't help you",
      comments: {
        id: 1,
        author_id: 2
      },
      upvotes: 0,
      downvotes: 0,
      }
    }
  },
  comments: {
    1: {
      question_id: 1,
      author_id: 1,
      answer_id: 1,
      body: "That helped a lot.",
      upvotes: 0,
      downvotes: 0
    }
  }
}
