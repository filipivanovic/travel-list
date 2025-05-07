import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([])

  const handleAddItems = item => {
    setItems(items => [...items, item])
  }

  const handleDeleteItems = id => {
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList onDeleteItem={handleDeleteItems} items={items} />
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

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className={`list`}>
      <ul>
        {items.map(item => (
          <Item onDeleteItem={onDeleteItem} key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

const Item = ({ item, onDeleteItem }) => {
  return (
    <li className={`item`}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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