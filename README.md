
# RetailEdge Frontend  

RetailEdge is a unified Inventory Management and POS System designed for small business owners. This React-based frontend communicates with the backend to provide real-time updates on stock levels, sales tracking, low-stock alerts, and more.  

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
