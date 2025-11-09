# Subscriber Management App 🎬

A simple React + TypeScript application built as part of the **Cleeng Front-End Intern take-home assignment**.  
The app simulates a **subscriber management dashboard** — it displays a list of active subscriptions, allows cancelling them (client-side only), and handles loading and error states.

---

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (for fast dev server and build)
- **Plain CSS per component** for styling — clean and modular
- No external UI frameworks

---

## 📦 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cleeng-subscriber-app.git
cd cleeng-subscriber-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Features

- Simulated API data fetching
- Loading and error handling
- Display of all subscriptions with formatted data
- Cancel button — updates status to _Cancelled_ (client-side only)
- Responsive, minimal layout

---

## 🧠 How It Works

### Data fetching

- Data is fetched from a mock API (`fetchSubscriptions`) that resolves after 1 second.
- `SubscriptionsList` manages three states: `subscriptions`, `loading`, and `error`.
- Data is rendered through `SubscriptionCard` components.

### Cancel logic

- Each card receives an `onCancel(id)` callback.
- When clicked, the parent state is updated (`status: "cancelled"`).
- The button becomes disabled once cancelled.

### Styling

- Global CSS in `index.css` defines theme variables and base layout.
- Each component has its own `.css` file for scoped styles.

---

## 💡 Bonus Features (Implemented)

- Styled per component (no UI frameworks)
- Client-side cancellation logic
- Clean TypeScript typings for data and props
