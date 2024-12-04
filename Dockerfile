# Step 1: Use the official Node.js runtime as a base image (using the latest LTS version)
FROM node:18

# Step 2: Set the working directory in the container to '/app'
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json into the container to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the Next.js app for production (optional but recommended)
RUN npm run dev

# Step 7: Expose port 3000 to allow access to the Next.js app
EXPOSE 3000

# Step 8: Define the command to run the application in production mode
CMD ["npm", "start"]
