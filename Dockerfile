FROM node:18.17.0-alpine

LABEL maintainer "Lukas Hodel"

ENV CHROME_PATH /usr/bin/chromium-browser
ENV PUPPETEER_HEADLESS_MODE new
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN apk update && apk upgrade && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
    apk add --no-cache \
      grep \
      chromium@edge \
      freetype@edge \
      libstdc++@edge \
      ttf-liberation@edge \
      font-noto-cjk@edge \
      font-noto-devanagari@edge \
      font-noto-arabic@edge \
      font-noto-bengali@edge \
      font-noto-emoji@edge \
      nss@edge \
      wayland-dev@edge \
      su-exec \
      bash \
    rm -rf /usr/include && \
    rm -rf /var/cache/apk/* /root/.node-gyp /usr/share/man /tmp/* 

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
