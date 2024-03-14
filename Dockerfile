# Use the official Nginx base image
FROM nginx:latest

# Set a working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy all files from the Dockerfile's directory to the container
COPY . .
COPY index.html .
COPY css/style.css css/
COPY js/script.js js/

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
