import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const res = await axios.get('http://localhost:3000/tasks')
      setTasks(res.data)
      setError(null)
    } catch (err) {
      setError('Görevler yüklenemedi')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`)
      fetchTasks()
    } catch (err) {
      setError('Görev silinemedi')
    }
  }

  const handleToggle = async (task) => {
    try {
      await axios.put(`http://localhost:3000/tasks/${task.id}`, {
        task: { completed: !task.completed }
      })
      fetchTasks()
    } catch (err) {
      setError('Görev güncellenemedi')
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: 20, border: '1px solid #ddd', borderRadius: 8, backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🧩 TaskFlow Frontend</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} loading={loading} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  )
}
