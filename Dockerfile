FROM node as builder

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build


FROM nginx:1.21.0-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder .svelte-kit/output/server/ /usr/share/nginx/html

EXPOSE 3000
EXPOSE 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
