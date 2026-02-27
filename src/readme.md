# 🎬 Simple Movie Explorer & Watchlist

A modern **React + Redux Toolkit** movie search application where users can search movies using the OMDb API, explore results with infinite scrolling, and manage a personal watchlist.

This project demonstrates **real-world Redux architecture**, async data handling, and feature-based state management.

---

## 📌 Project Overview

Simple Movie Explorer & Watchlist is a frontend React application that allows users to:

* 🔐 Log in using Redux-managed authentication
* 🔍 Search movies from the OMDb API
* ♾️ Load more results using Infinite Scroll
* ⭐ Add movies to a personal watchlist
* ✅ Mark movies as watched/unwatched
* 🗑️ Remove movies from watchlist
* 🚪 Logout and reset session

The application focuses on **clean architecture and scalable Redux patterns**.

---

## 🧠 Key Learning Concepts

This project demonstrates:

* Redux Toolkit (Slices, Actions, Reducers)
* Async API calls using `createAsyncThunk`
* Global state management
* Feature-based folder architecture
* Infinite scrolling & pagination
* Conditional rendering (Auth flow)
* API layer separation
* Error & loading state handling
* Cross-slice action handling using `extraReducers`

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧰 Redux Toolkit
* 🔗 React Redux
* 🌐 Axios
* ♾️ react-infinite-scroll-component
* 🎨 CSS / Tailwind (optional)
* 🎬 OMDb API

---

## 📂 Project Structure

```
src/
│
├── api/                # API helper functions
├── components/         # Reusable UI components
├── features/
│   ├── auth/           # Authentication slice
│   └── movies/         # Movies + Watchlist slice
├── pages/              # Application pages
├── store/              # Redux store configuration
├── App.jsx
└── main.jsx

---

## ✨ Features

### 🔐 Authentication

* Redux-managed login/logout
* Protected UI rendering
* Session reset on logout

### 🔍 Movie Search

* Real-time movie search via OMDb API
* Async fetching using Redux Thunks
* Error & loading handling

### ♾️ Infinite Scroll

* Automatic loading of next movie pages
* Pagination state management
* Appending results dynamically

### ⭐ Watchlist Management

* Add movies to watchlist
* Toggle watched status
* Delete movies
* Persistent global state

---

## 🧩 Redux Architecture

```
Component
   ↓
Dispatch Action
   ↓
Async Thunk
   ↓
API Layer
   ↓
Redux Store Update
   ↓
UI Re-render

