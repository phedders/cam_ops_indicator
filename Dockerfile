from node:alpine

EXPOSE 4567
EXPOSE 6789

COPY server.js /
COPY cammaster.html /

RUN npm install ws

CMD node /server.js
