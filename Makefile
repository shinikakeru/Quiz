.PHONY: install test lint start help

install:
	npm ci

test:
	npm test

lint:
	npm run lint

start:
	npm start

help:
	@echo "------------------"
	@echo "Available commands"
	@echo "------------------"
	@echo ""
	@echo "make install - install dependencies (npm ci)"
	@echo ""
	@echo "make test - run tests"
	@echo ""
	@echo "make lint - check with linter"
	@echo ""
	@echo "make start - run site on port 3000 (opens automatically)"