import React, { useState } from 'react'
import axios from 'axios'

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5173/tasks', { task: { title } })
      setMessage('Görev eklendi!')
      setTitle('')
      if (onTaskAdded) onTaskAdded()
    } catch (err) {
      console.error('Error adding task:', err)
      setMessage('Hata oluştu')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20, padding: 20, border: '1px solid #ccc', borderRadius: 8, backgroundColor: 'white' }}>
      <h3>Yeni Görev Ekle</h3>
      <input
        type="text"
        placeholder="Görev başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: '100%', padding: 10, marginBottom: 10, border: '1px solid #ddd', borderRadius: 4, boxSizing: 'border-box' }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{ padding: '10px 20px', background: loading ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Ekleniyor...' : 'Ekle'}
      </button>
      {message && <p style={{ color: message.includes('Hata') ? 'red' : 'green', marginTop: 10 }}>{message}</p>}
    </form>
  )
}
