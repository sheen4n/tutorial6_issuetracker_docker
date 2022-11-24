#Build Stage Start
FROM node:lts-alpine3.15
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run react:build
CMD ["npm", "start"]