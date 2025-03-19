
# RetailEdge Frontend  

RetailEdge is a unified Inventory Management and POS System designed for small business owners. This React-based frontend communicates with the backend to provide real-time updates on stock levels, sales tracking, low-stock alerts, and more.  



https://github.com/user-attachments/assets/87be0612-68bb-4927-91d5-cb355b8348a0


To prominently display the backend link in your `README.md`, you can add a **"Backend API"** section near the top and also include it in the **"API Configuration"** section. Here's how:

---

# RetailEdge Frontend  

RetailEdge is a unified Inventory Management and POS System designed for small business owners. This React-based frontend communicates with the backend to provide real-time updates on stock levels, sales tracking, low-stock alerts, and more.  

## 🌐 Backend API  

🔗 **RetailEdge Backend:** [s-arpcoders-retailedge-backend](https://github.com/S-arpCoders/RetailEdge-Backend)
📡 **API Base URL:** `http://your-backend-api-url/api/internal`  

🔗 **Database Service:** [s-arpcoders-database-service](https://github.com/S-arpCoders/Database_Service)

---

## 🔧 API Configuration  

Modify `src/config.js` to match your backend API URL:  
```js
export const API_BASE_URL = "http://your-back

## 🚀 Features  

- User authentication (Login & Registration)  
- Dashboard with sales and inventory insights  
- Inventory management with low-stock alerts  
- Supplier and product management  
- Order processing and reports  
- Responsive and interactive UI  

## 🛠️ Tech Stack  

- **Frontend:** React.js, Bootstrap, Recharts  
- **State Management:** React Hooks  
- **Backend API:** Spring Boot (`s-arpcoders-retailedge-backend`)  
- **Database:** MySQL  

## 🏗️ Setup & Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/s-arpcoders-retailedge-frontend.git  
cd s-arpcoders-retailedge-frontend  
```

### 2️⃣ Install Dependencies  
```sh
npm install  
```

### 3️⃣ Start Development Server  
```sh
npm start  
```
Access the app at **http://localhost:3000**.  

### 4️⃣ Build for Production  
```sh
npm run build  
```

## 🐳 Running with Docker  

Build and run the container:  
```sh
docker build -t retailedge-frontend .  
docker run -p 3000:80 retailedge-frontend  
```

Or, use `docker-compose`:  
```sh
docker-compose up  
```

## 🔗 API Configuration  

Modify `src/config.js` to match your backend API URL:  
```js
export const API_BASE_URL = "http://your-backend-api-url/api/internal";  
export const DEV_MODE = true;  
```
