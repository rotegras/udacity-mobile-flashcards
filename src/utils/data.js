const decks = {
  scss: {
    name: 'scss',
    questions: [],
  },
  react: {
    name: 'react',
    questions: [
      {
        question: 'React follows uni-directional data flow or data binding.',
        answer: 'Yes',
      },
      {
        question: 'componentWillMount() : Executed just before rendering takes place both on the client as well as server-side.',
        answer: 'Yes',
      },
      {
        question: 'React is a framework',
        answer: 'No',
      },
      {
        question: 'React is mainly used to build user interface',
        answer: 'Yes',
      },
      {
        question: 'The lifecycle methods are mainly used for freeing app resources',
        answer: false,
      },
      {
        question: 'Abstraction can be done while multiple elements need to be returned from a component',
        answer: 'Yes',
      },
      {
        question: 'useState is used to pass data to a component from outside',
        answer: 'No',
      },
    ]
  },
  javascript: {
    name: 'javascript',
    questions: [
      {
        question: 'Which method is not part of ReactDOM?',
        answer: 'one',
      },
      {
        question: 'Second question',
        answer: 'one',
      },
      {
        question: 'Third question',
        answer: 'one',
      },
    ],
  },
  flexbox: {
    name: 'flexbox',
    questions: [
      {
        question: 'Use ... to set the width of a single element to a 100% of its parent',
        answer: 'flexbox: 1',
      },
      {
        question: 'Flex direction is set as default to... ',
        answer: 'Row',
      },
    ]
  },
  nodejs: {
    name: 'nodejs',
    questions: [],
  },
  bash: {
    name: 'bash',
    questions: [],
  },
  sql: {
    name: 'sql',
    questions: [],
  },
  gatsby: {
    name: 'gatsby',
    questions: [],
  },
  drupal: {
    name: 'drupal',
    questions: [],
  },
  wordpress: {
    name: 'wordpress',
    questions: [],
  },
}

const quiz = {
  card: {
    answerVisibility: false,
    resultChecked: false,
    cardNumber: 0,
    actualDeck: '',
    quizEnded: false,
  },
  days: {
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
    '2021-04-12': {
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
}

export { decks, quiz };
