.PHONY: install test lint start

install:
	npm ci

test:
	npm test

lint:
	npm run lint

start:
	npx http-server . -p 3000 -o src/pages/welcome-page/