FROM node:20.11.0

ENV TZ Asia/Tokyo

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app

# FIXME: ポートを一旦固定値で指定(後で.envから読み込むように変更)
CMD ["yarn", "dev", "-p", "4000"]