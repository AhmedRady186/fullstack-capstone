FROM node:18

# set working directory
WORKDIR /app

# copy backend package files
COPY backend/package*.json ./

# install dependencies
RUN npm install

# copy backend source code
COPY backend/. .

# expose port
EXPOSE 5000

# start app
CMD ["node", "server.js"]