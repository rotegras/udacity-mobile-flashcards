const decks = {
  react: {
    name: 'react',
    questions: [
      {
        question: 'React follows uni-directional data flow or data binding.',
        answer: true,
      },
      {
        question: 'componentWillMount() : Executed just before rendering takes place both on the client as well as server-side.',
        answer: true,
      },
      {
        question: 'React is a framework',
        answer: false,
      },
      {
        question: 'React is mainly used to build user interface',
        answer: true,
      },
      {
        question: 'The lifecycle methods are mainly used for freeing app resources',
        answer: false,
      },
      {
        question: 'Abstraction can be done while multiple elements need to be returned from a component',
        answer: true,
      },
      {
        question: 'useState is used to pass data to a component from outside',
        answer: false,
      },
    ]
  },
  javascript: {
    name: 'javascript',
    questions: [
      {
        question: 'Which method is not part of ReactDOM?',
        answer: false,
      },
    ],
  },
  flexbox: {
    name: 'flexbox',
    questions: [
      {
        question: 'Use flexbox: 1 to set the width of a single element to a 100% of its parent',
        answer: true,
      },
      {
        question: 'Flex direction is set to row as default',
        answer: true,
      },
    ]
  }
}

const quiz = {
  '2021-03-10': {
    react: {
      questions: 4,
      correct: 2,
    },
    flexbox: {
      questions: 2,
      correct: 1,
    }
  },
  '2021-04-22': {
    react: {
      questions: 7,
      correct: 6,
    },
    flexbox: {
      questions: 2,
      correct: 1,
    }
  }
}

export { decks, quiz };
