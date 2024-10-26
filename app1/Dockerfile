FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# start the app
CMD ["npm", "run", "start", "--", "--port", "9001"]
