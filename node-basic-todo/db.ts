// db.ts
import Database from 'better-sqlite3'

const db = new Database('todo.db')

// 初始化（如果不存在就建立資料表）
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    done INTEGER DEFAULT 0
  )
`)

export default db
