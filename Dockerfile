FROM node:15 as build
WORKDIR /work
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /work/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
