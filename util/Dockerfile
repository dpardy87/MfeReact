FROM node:16
WORKDIR /usr/src/util
COPY package*.json ./
RUN npm install
COPY . .
CMD ["echo", "Utility module installed"]
