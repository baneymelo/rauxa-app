# Rauxa App!

Rauxa App is an application to upload image.

<img style="width:100%" src="https://i.ibb.co/sJch9rF/rauxa-app.gif"/>


## Tech

- Front: React, MUI
- Back: Node, Express
- Database: AWS RDS / S3


## Docker


### Quick start
You can build and run with:

`docker-compose up -d --build`
docker will expose the service app over `localhost:4000` and socket over  `localhost:8080` 

### Installation
Build the image

`docker build -t rauxa_app -f ./server/Dockerfile .`

Install via npm:
```
cd backend
npm install
```

### Dependencies

* Node v12 >=
* ```backend:``` [Automatically installed when using npm install.](./server/package.json)
* ```frontend:``` [Automatically installed when using npm install.](./client/package.json)


# Documentation

To generate the folder `docs/documentation` documentation you can build and run with:
- `npm run docs` open `index.html`
### API

#### <a href="https://app.swaggerhub.com/apis-docs/baneymelo/rauxa-app/1.0.0#/">Rauxa App API</a>
<img src="https://i.ibb.co/CV2T57Z/swagger.png" />

## Licence

#### MIT