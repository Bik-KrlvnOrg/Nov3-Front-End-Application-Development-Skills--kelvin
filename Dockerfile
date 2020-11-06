FROM node:12-alpine

WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.0 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]