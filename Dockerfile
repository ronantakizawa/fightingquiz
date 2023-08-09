# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on (assuming it's 3000)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]


# docker build -t fightingquiz .
# docker run -p 3000:3000 fightingquiz