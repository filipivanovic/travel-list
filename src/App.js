import { useState } from 'react'

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
    id: 3,
    description: 'Charger',
    quantity: 1,
    packed: true
  }
]

const App = () => {
  const [items, setItems] = useState([])

  const handleAddItems = item => {
    setItems(items => [...items, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

const Logo = () => {
  return <h1>🌴 Far Away ✈️</h1>
}

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const newItem = {
    id: Date.now(),
    description,
    quantity,
    packed: false
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!description) return
    console.log(newItem)
    setDescription('')
    setQuantity(1)
    onAddItems(newItem)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Item description"
      />
      <button>Add</button>
    </form>
  )
}

const PackingList = ({ items }) => {
  return (
    <div className={`list`}>
      <ul>
        {items.map(item => (
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