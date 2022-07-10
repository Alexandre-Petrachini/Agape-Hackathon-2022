FROM node:16
WORKDIR /static
COPY . /static
RUN rm -Rf /node_modules
RUN rm -Rf package-lock.json
RUN npm install
EXPOSE 4200
ENTRYPOINT npm start