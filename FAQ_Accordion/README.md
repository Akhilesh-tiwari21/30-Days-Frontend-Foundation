## 📘 FAQ Accordion Component (Frontend Task)

# Introduction
A clean, responsive **Frequently Asked Questions (FAQ)** component built using **HTML, CSS, and JavaScript**.
This project focuses on **logic building**, **semantic HTML**, and **user-friendly UI/UX interactions**.

## 🎯 Project Objective
The goal of this task is to:

* Practice **semantic HTML elements** like `<details>` and `<summary>`
* Build an **accordion-style FAQ section**
* Improve **JavaScript logic** for state handling
* Apply **clean UI/UX principles**
* Strengthen frontend fundamentals

This task is part of my **Frontend Foundations / Daily Practice Series**.

## ✨ Features
* 📂 Accordion-style FAQ layout
* ➕ Custom `+ / -` toggle icon using CSS
* 🧠 Only **one FAQ opens at a time** (auto-close logic)
* 🎨 Clean and minimal UI
* 📱 Fully responsive design
* 🚀 Smooth hover and open-state transitions

## 🛠️ Tech Stack Used
* **HTML5** – Semantic structure (`details`, `summary`, `section`)
* **CSS3** – Layout, transitions, hover effects, custom indicators
* **JavaScript (Vanilla)** – Accordion logic and state control

## ⚙️ How It Works (Logic Explanation)

### 1️⃣ HTML (`<details>` & `<summary>`)

* Each FAQ item uses `<details>` for native open/close behavior
* `<summary>` holds the question
* `<p>` contains the answer

This ensures:

* Accessibility
* Clean structure
* Minimal JavaScript dependency

### 2️⃣ CSS Enhancements

* Default arrow removed from `<summary>`
* Custom `+` and `-` icons added using `::after`
* Open state styled using `[open]` attribute selector
* Smooth hover and transition effects

### 3️⃣ JavaScript Logic (Core Learning)

```js
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach((faq) => {
    faq.addEventListener('toggle', () => {
        if (faq.open) {
            faqs.forEach((item) => {
                if (item !== faq) {
                    item.removeAttribute('open');
                }
            });
        }
    });
});
```
🔹 **What this does:**

* Listens for the `toggle` event on each FAQ
* If one FAQ opens → all others automatically close
* Ensures **only one FAQ is expanded at a time**

This improves **UX** and demonstrates **logical thinking**.

---

## 🧠 Key Learnings

* Practical use of semantic HTML
* DOM selection and event handling
* Handling UI state with minimal JavaScript
* Using CSS attribute selectors effectively
* Writing clean, readable, and maintainable code

## ⭐ Note

This project is part of a **Frontend Foundations learning journey** focused on:

> *"Building logic first, frameworks later."*

# If you like this project, feel free to ⭐ the repository.
