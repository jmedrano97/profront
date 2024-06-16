# ./reactapp/Dockerfile

# Usar una imagen de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y yarn.lock
COPY package.json yarn.lock ./

# Instalar las dependencias
RUN yarn 

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN yarn build

# Exponer el puerto de la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["yarn", "dev"]
