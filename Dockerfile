# build environment
FROM node:16.14.2-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# Stage 2 Running the application
FROM node:16.14.2-alpine

WORKDIR /app

COPY --from=build /app/dist .

USER 65534

EXPOSE 1025

CMD ["node", "server.js"]