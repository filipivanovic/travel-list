import { useState } from 'react'

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

export default Form