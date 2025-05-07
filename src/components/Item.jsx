const Item = ({ item, onDeleteItem, onPackedItem }) => {
  return (
    <li className={`item`}>
      <input type="checkbox" checked={item.packed} onChange={() => onPackedItem(item.id)} />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item