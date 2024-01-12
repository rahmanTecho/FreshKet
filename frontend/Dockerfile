# Build stage
FROM node:latest as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app files
COPY . ./

# Build the app
RUN npm run build

# Production stage
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

# Use custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
