const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const createQuote = (quote) => { 
  return {
    type: 'ADD_QUOTE', 
    data: {
      id: getId(),
      content:quote,votes: 0
    }
  } 
}

export const voteQuote = (id) => {
  return {
    type: 'VOTE_QUOTE',
    data: { id }
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat({
        content: action.data.content,
        id: getId(),
        votes: 0
      })

    case 'VOTE_QUOTE':
      let tmp = []
      state.forEach(el => tmp.push({...el}))
      tmp[tmp.findIndex(el => el.id === action.data.id)].votes += 1
      tmp.sort((a,b) => b.votes - a.votes)
      return tmp

    default:
      return state
  }
}

export default reducer