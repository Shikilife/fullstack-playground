import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './db'

const app = express()
app.use(cors())
app.use(bodyParser.json())

// 查詢全部
app.get('/api/todos', (req: Request, res: Response) => {
  const todos = db.prepare('SELECT * FROM todos').all()
  res.json(todos)
})

// 查詢單筆
app.get('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(id)
  if (!todo) return res.status(404).json({ error: 'Not found' })
  res.json(todo)
})

// 新增
app.post('/api/todos', (req: Request, res: Response) => {
  const text = req.body.text
  if (!text) return res.status(400).json({ error: 'Text required' })
  const info = db.prepare('INSERT INTO todos (text, done) VALUES (?, 0)').run(text)
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(info.lastInsertRowid)
  res.status(201).json(todo)
})

// 修改
app.put('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const { text, done } = req.body
  const result = db.prepare('UPDATE todos SET text = ?, done = ? WHERE id = ?').run(text, done ? 1 : 0, id)
  if (result.changes === 0) return res.status(404).json({ error: 'Not found' })
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(id)
  res.json(todo)
})

// 刪除
app.delete('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const result = db.prepare('DELETE FROM todos WHERE id = ?').run(id)
  if (result.changes === 0) return res.status(404).json({ error: 'Not found' })
  res.status(204).end()
})

app.listen(3000, () => {
  console.log('RESTful API with SQLite on http://localhost:3000')
})
