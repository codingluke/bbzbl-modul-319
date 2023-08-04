FROM node:18.17.0-alpine

LABEL maintainer "Lukas Hodel"

RUN apk update && apk upgrade && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
    apk add --no-cache \
      grep \
      chromium@edge \
      freetype@edge \
      libstdc++@edge \
      harfbuzz@edge \
      ttf-liberation@edge \
      font-noto-cjk@edge \
      font-noto-devanagari@edge \
      font-noto-arabic@edge \
      font-noto-bengali@edge \
      nss@edge \
      wayland-dev@edge \
      su-exec

ENV CHROME_PATH /usr/bin/chromium-browser
ENV PUPPETEER_HEADLESS_MODE old

COPY . /app
WORKDIR /app

RUN mv entrypoint.sh /entrypoint.sh \
  && chmod +x /entrypoint.sh \
  && chmod 755 /app

RUN yarn install --production --frozen-lockfile && yarn cache clean 

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 3000
EXPOSE 3003
