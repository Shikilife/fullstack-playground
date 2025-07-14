# fullstack-playground

> 前後端分離全端學習專案
>
> Node.js (TypeScript + Express + SQLite) + Vue 3 (Vite)

---

## 🚀 快速啟動

### 前置需求

* Node.js v18+（建議用 nvm 管理）
* npm 10+

---

### 1️⃣ 啟動後端（API 伺服器）

```bash
cd node-basic-todo
npm install      # 第一次安裝需要
npx ts-node app.ts
```

* 會在 [http://localhost:3000](http://localhost:3000) 提供 RESTful API
* SQLite 資料會存於 `todo.db`

---

### 2️⃣ 啟動前端（Vue）

```bash
cd vue-todo
npm install
npm run dev
```

* 會在 [http://localhost:5173](http://localhost:5173) 提供網頁介面

---

## 🧩 API 文件

* `GET    /api/todos`          查詢所有
* `GET    /api/todos/:id`      查詢單筆
* `POST   /api/todos`          新增（body: { text })
* `PUT    /api/todos/:id`      修改（body: { text, done })
* `DELETE /api/todos/:id`      刪除

---

## 🖼️ 網頁預覽

* 本地啟動前端 ([http://localhost:5173](http://localhost:5173)) 可操作完整功能
* 如需部署到 GitHub Pages，請見下方說明

---

## 📦 專案結構

```
fullstack-playground/
├── node-basic-todo/    # 後端 Node.js + TypeScript + SQLite
│   ├── app.ts
│   ├── db.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── todo.db
└── vue-todo/           # 前端 Vue 3 + Vite
    ├── src/
    ├── package.json
    └── vite.config.js
```

---

## 📝 其他注意

* **GitHub Pages 只能展示前端，無法直接運行 Node.js API。**
* API 測試請本地執行後端，或將後端部署到 Render/Heroku/Vercel 等雲端。

---

## 學習紀錄
https://hackmd.io/@Shiki9029/HyPuA_ZUle
https://hackmd.io/@Shiki9029/BJnXbFWUel
https://hackmd.io/@Shiki9029/rJopLYZ8lg
https://hackmd.io/@Shiki9029/By26wGMUxg
https://hackmd.io/@Shiki9029/rJ1KypMLge
https://hackmd.io/@Shiki9029/S1x_9CfLll
https://hackmd.io/@Shiki9029/Byp2wk7Lgl
