FROM node:lts-buster
 
WORKDIR /palacios_allan_ui_garden/
 
COPY public/ /palacios_allan_ui_garden/public
COPY src/ /palacios_allan_ui_garden/src
COPY package.json /palacios_allan_ui_garden/
 
RUN npm install
 
CMD ["npm", "start"]