FROM cypress/browsers:node12.14.0-chrome79-ff71

WORKDIR /app

COPY package.json .
COPY package-lock.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify

COPY cypress /app/cypress
COPY cypress.json .
COPY reporterOptions.json .

RUN npm run cy:chrome
