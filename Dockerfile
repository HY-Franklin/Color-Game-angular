FROM nginx:1.19.1-alpine

COPY /dist /usr/share/nginx/html/index.html

EXPOSE 4200:80

CMD ["nginx", "-g","daemon off;"]
