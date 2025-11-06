import React from 'react'

export default function TaskList({ tasks, loading, onDelete, onToggle }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Görev Listesi</h2>
      {loading && <p>Yükleniyor...</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: 10, display: 'flex', alignItems: 'center', padding: 10, border: '1px solid #ccc', borderRadius: 4, backgroundColor: 'white' }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => onToggle(t)}
              style={{ marginRight: 10 }}
            />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none', flex: 1 }}>
              {t.title}
            </span>
            <button
              onClick={() => onDelete(t.id)}
              style={{ marginLeft: 10, background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: 4 }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
