FROM nginx

RUN apt-get update && apt-get install -y npm && apt-get clean
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g grunt-cli

COPY package.json /tmp
RUN cd /tmp && npm install

COPY . /tmp
RUN cd /tmp && grunt

RUN cp -R /tmp/html/* /usr/share/nginx/html

EXPOSE 80
