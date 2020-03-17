# Check out https://hub.docker.com/_/node to select a new base image
FROM node:13.3.0 AS compile-image

# We set our WORKDIR to /opt/ng so we know the directory where everything will be copied to with the COPY line.
WORKDIR /opt/ng
COPY package.json ./

# Install dependencies
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

# Lighten it up - remove node as it's not needed and use nginx
FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/app-name /usr/share/nginx/html