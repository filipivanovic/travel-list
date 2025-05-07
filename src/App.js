const initialItems = [
  {
    id: 1,
    description: 'Passport',
    quantity: 2,
    packed: false
  },
  {
    id: 2,
    description: 'Socks',
    quantity: 12,
    packed: false
  },
  {
    id: 2,
    description: 'Charger',
    quantity: 1,
    packed: true
  }
]

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

const Logo = () => {
  return <h1>🌴 Far Away ✈️</h1>
}

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your trip ?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item description" />
      <button>Add</button>
    </form>
  )
}

const PackingList = () => {
  return (
    <div className={`list`}>
      <ul>
        {initialItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

const Item = ({ item }) => {
  return (
    <li className={`item`}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

const Stats = () => {
  return (
    <footer className={`stats`}>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default App