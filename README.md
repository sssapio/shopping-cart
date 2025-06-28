# 🛒 React Shopping Cart Application

This is a responsive shopping cart application built with React. It allows users to browse products, manage items in a cart, and apply a discount coupon at checkout. This project demonstrates front-end development, Git workflow (branching and pull requests), and deployment skills.

---

## 🔗 Live Demo

👉 [View Live on Vercel](https://your-vercel-link.vercel.app)

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
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy
Edit
npm install
Start development server:

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

🧪 How the Coupon Works
Enter POWERLABSx in the coupon input field.

A 13.2% discount will be applied to the cart total.

Validation uses a regex to ensure accuracy.

Invalid coupon inputs show an error message.

🔀 Git Workflow Used
Main development occurs in feature branches:

feature/cart

feature/coupon

feature/ui

Changes are pushed via pull requests to the dev branch.

Final deployment merges are made to the main branch.

🛠 Tech Stack
React

HTML/CSS

JavaScript (ES6+)

Git & GitHub (version control)

Vercel (hosting platform)

🧑 Author
Your Name
GitHub: https://github.com/your-username

📜 License
This project is open-source and available for learning and demonstration purposes only.
```
