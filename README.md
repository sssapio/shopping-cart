# 🛒 React Shopping Cart Application

This is a responsive shopping cart application built with React. It allows users to browse products, manage items in a cart, and apply a discount coupon at checkout. This project demonstrates front-end development, Git workflow (branching and pull requests), and deployment skills.

---

## 🔗 Live Demo

👉 [View Live on Vercel](https://shopping-cart-opal-chi.vercel.app/)

---

## 📌 Features

- Display products from a local JSON file
- Add items to the cart
- Increase or decrease item quantity in the cart
- Remove items from the cart
- Calculate total cost of items
- Apply coupon code: `POWERLABSx` for a **13.2% discount**
- Validate coupon code input using regular expressions
- Error handling for product fetch and input validation
- Responsive design for desktop and mobile devices

---

## 📁 Project Structure

project-root/
├── public/
│ └── products.json # Product data (mock API)
├── src/
│ ├── App.js # Main app logic
│ ├── App.css # Styles
├── README.md
├── package.json

## 🧠 How to Use This Project

### Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/sssapio/shopping-cart
cd shopping-cart
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm start
```

4. **Open http://localhost:3000 in your browser.**

## 🧪 How the Coupon Works

- Enter POWERLABSx in the coupon input field.
- A 13.2% discount will be applied to the cart total.
- Validation uses a regex to ensure accuracy.
- Invalid coupon inputs show an error message.

## 🔀 Git Workflow Used

- All development was done directly in the `main` branch.
- Commits were made progressively to track project setup, feature implementation, and styling.
- The project was then pushed to GitHub and deployed using Vercel.

## 🛠 Tech Stack

- React
- HTML/CSS
- JavaScript (ES6+)
- Git & GitHub (version control)
- Vercel (hosting platform)

## 🧑 Author

#### Toluwani Olusanya

GitHub: https://github.com/sssapio

## 📜 License

This project is open-source and available for learning and demonstration purposes only.
