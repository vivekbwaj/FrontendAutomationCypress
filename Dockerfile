FROM cypress/browsers:node14.7.0-chrome84
WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .
COPY reporterOptions.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify

COPY cypress cypress
COPY cypress.json .

RUN npx cypress run cy:ci
