FROM node AS builder

WORKDIR /app

COPY package.json ./

COPY . .

RUN yarn install
RUN yarn build
ENV PORT 3000
EXPOSE 3000
CMD ["node", "build"]
