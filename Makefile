.PHONY: install test lint start

install:
	npm ci

test:
	npm test

lint:
	npm run lint

start:
	npx serve .