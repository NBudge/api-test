FROM node:alpine

COPY package.JSON ./

COPY server.js ./

RUN npm install

EXPOSE 3000
CMD ["node""server.js"]