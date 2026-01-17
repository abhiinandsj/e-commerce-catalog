# Product Catalog – Admin & User View

A simple full-stack product catalog system where:
- Admins can add, edit, and delete products
- Users can only view products

Built with Spring Boot (backend), MySQL (database), and React (frontend).

---
## Project Objective

Build a basic product catalog where:

- Admins can add, edit, and delete products  
- Users can only view products  

Includes:

- CRUD operations  
- Role-based UI behavior  
- RESTful backend  
- Glassmorphism-style UI  

---


## Features

### Admin
- Add new products
- Edit existing products
- Delete products
- Auto status:
  - Stock > 0 → Active
  - Stock = 0 → Out of Stock

### User
- View product list
- See price, stock, and status

### ER Diagram
![ChatGPT Image Jan 18, 2026, 01_42_55 AM](https://github.com/user-attachments/assets/e9f7ba67-a1e0-49ed-8e51-19c5aed7b655)


---

## Tech Stack

### Backend
- Java Spring Boot
- Spring Data JPA
- MySQL
- REST APIs

### Frontend
- React
- React Router
- Fetch API
- CSS (Glassmorphism UI)

---

## File Strucutre
```
catalog/
│
├── backend/
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── model/
│ ├── config/
│ └── application.properties
│
└── catalog-frontend/
├── src/
│ ├── App.js
│ ├── Home.js
│ ├── ProductList.js
│ ├── AddProduct.js
│ ├── EditProduct.js
│ └── index.css
```

---

## Database Schema

Table: `product`

| Field       | Type      |
|------------|-----------|
| id         | Long (PK) |
| name       | String    |
| description| String    |
| price      | double    |
| stock      | int       |
| status     | String    |
| imageUrl   | String    |

---

## Backend Setup

1. Create database:
   ```
   CREATE DATABASE product_catalog;
    ```

2. Update application.properties:
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/product_catalog
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

3. Run Spring Boot app:
   ```
     mvn spring-boot:run
   ```
   Or run it from the IDE
Backend runs at:
```
  http://localhost:8080
```

Frontend Setup

1. Go to frontend folder:
```
cd catalog-frontend
```

2. Install dependencies:
```
npm install
```

3. Start app:
```
npm start
```

-Frontend runs at:
```
http://localhost:3000
```
API Endpoints

| Method | Endpoint           | Purpose            |
| ------ | ------------------ | ------------------ |
| POST   | /api/products      | Add product        |
| GET    | /api/products      | Get all products   |
| GET    | /api/products/{id} | Get single product |
| PUT    | /api/products/{id} | Update product     |
| DELETE | /api/products/{id} | Delete product     |

---

## App Flow

### 1.Open app → Choose role:
- Admin
- User

### 2.Admin:
- View product list
- Add new product
- Edit/Delete product
  
### 3.User:
- View product list only

---

## Project Images
Landing Page:
![Screenshot_18-1-2026_13415_localhost](https://github.com/user-attachments/assets/d1071336-51cf-4047-9247-aa522389aeb0)

Admin Page:
![Screenshot_18-1-2026_13430_localhost](https://github.com/user-attachments/assets/be2bbeed-edf9-46ac-a059-a9d032a13cbe)

Add Product:
![Screenshot_18-1-2026_13442_localhost](https://github.com/user-attachments/assets/f9b788d2-c341-4ba9-b7a0-61411b5c6bc1)

User Page:
![Screenshot_18-1-2026_13510_localhost](https://github.com/user-attachments/assets/d015abd0-c5ae-4d8f-b72f-b90d98b06e9d)

---





