# 🏦 ZS10 Bank – Digital Banking Simulator

**ZS10 Bank** is an educational project created by students of **Zespół Szkół nr 10 in Zabrze, Poland**.  
It’s a **simulation of an online banking system**, designed to teach young users how digital banking works — safely, interactively, and without real money involved.

---

## 🎯 Project Goal

The goal of this project is to help beginners — especially younger students — understand:
- how to use **electronic banking systems** responsibly,  
- how **digital payments and transfers** work in practice,  
- and how **technology shapes modern finance**.

This platform provides a realistic interface that looks and feels like an actual bank, but all operations are simulated within a safe educational environment.

---

## 💡 About the Frontend

This repository contains the **frontend of the ZS10 Bank system**, built with modern web technologies.  
The frontend provides a clean, responsive user interface that allows users to:
- Log in to their simulated bank account  
- Check their balance and transaction history  
- Make transfers between accounts  
- Learn the basics of digital finance through interactive elements  

---

## 🧰 Tech Stack

- **React.js** – main framework for building the UI  
- **Vite** – for fast development and build performance  
- **Fetch API** – for communication with the backend  
- **React Router** – for navigation between app pages  

---

## ⚙️ Features (Planned & Implemented)

| Feature | Status |
|----------|---------|
| Login and authentication (educational only) | ✅ |
| Account dashboard with balance preview | ✅ |
| Internal money transfers | 🏗️ In progress |
| Transaction history | 🏗️ In progress |
| Educational pop-ups / tips about finance | 🏗️ Planned |
| Admin panel for workshop instructors | 🏗️ Planned |

---

## 🧑‍🏫 Educational Purpose

This project is not a real bank — it’s a **learning tool** used during workshops and school lessons.  
Its main purpose is to:
- **Introduce children and teens to digital banking concepts**  
- **Show the importance of cybersecurity and responsible money management**  
- **Demonstrate how real systems handle user interaction and data flow**  

Through interactive exercises, students can experience what it’s like to use a bank safely — without any financial risk.

---

## 🖥️ System Overview

The project consists of two main parts:
1. **Frontend (this repository)** – user interface and app logic  
2. **Backend (separate repository)** – Express-based API handling transfers, user data, and validation  

The two components communicate over secure HTTP requests, simulating a real banking environment.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/cypekdev/zs10bank-frontend
cd zs10bank-frontend
npm install
npm run dev
