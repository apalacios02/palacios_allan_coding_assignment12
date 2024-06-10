# pull official base image
FROM node:lts-bookworm
 
# set working directory
WORKDIR /palacios_allan_ui_garden/
 
# install app dependencies
COPY public/ /palacios_allan_ui_garden/public
COPY src/ /palacios_allan_ui_garden/src
COPY package.json /palacios_allan_ui_garden/
COPY . /palacios_allan_ui_garden
RUN npm install
 
# start app
CMD ["npm", "run", "storybook"]