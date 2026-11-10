
# Use lightweight Nginx as the base image
FROM nginx:alpine

# Copy our application files into Nginx's web directory
COPY index.html style.css script.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx runs automatically when the container starts
