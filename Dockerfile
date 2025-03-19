# Step 1: Use an official Node.js runtime as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your React project
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a smaller image for serving the build (Nginx is commonly used)
FROM nginx:alpine

# Step 8: Copy the built React app to the Nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the app
EXPOSE 80

# Step 10: Start the Nginx server to serve the React app
CMD ["nginx", "-g", "daemon off;"]
