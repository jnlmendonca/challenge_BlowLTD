FROM node

WORKDIR /usr/src/app

COPY wait-for-it.sh .
RUN chmod +x ./wait-for-it.sh

COPY src/package*.json ./
RUN npm install

COPY src/ .
COPY payment_api.yaml .

EXPOSE 3000
CMD [ "npm", "start" ]