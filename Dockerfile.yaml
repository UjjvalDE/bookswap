# Step 1: Use an official Node.js runtime as the base image
FROM node:16

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application files
COPY . .

# Step 6: Build the application (optional but recommended for production)
RUN npm run build

# Step 7: Expose the default port for Next.js
EXPOSE 3000

# Step 8: Define the command to run your application
CMD ["npm", "start"]
