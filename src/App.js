import { useState } from 'react'
import Stats from './components/Stats'
import PackingList from './components/PackingList'
import Form from './components/Form'
import Logo from './components/Logo'

const App = () => {
  const [items, setItems] = useState([])

  const handleAddItems = item => {
    setItems(items => [...items, item])
  }

  const handleDeleteItems = id => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handleToggleItems = id => {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    )
  }

  const handleClearList = () => {
    if (window.confirm('Are you sure you want to clear the list?')) {
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onClearList={handleClearList}
        onPackedItem={handleToggleItems}
        onDeleteItem={handleDeleteItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  )
}

export default App