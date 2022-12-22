import {Component} from 'react'

const TodoItem = propse => {
  const {userTitle, onDeleteItem} = propse
  const {id, title} = userTitle

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {TodosList: initialTodosList}

  onDeleteItem = id => {
    const {TodosList} = this.state
    const filterItem = TodosList.filter(each => each.id !== id)

    this.setState({TodosList: filterItem})
  }

  render() {
    const {TodosList} = this.state

    return (
      <div>
        <div>
          <h1>Simple Todos</h1>
        </div>
        <ul>
          {TodosList.map(each => (
            <TodoItem
              key={each.id}
              onDeleteItem={this.onDeleteItem}
              userTitle={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
