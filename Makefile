.PHONY: build
build: deps compile

.PHONY: deps
deps:
	yarn

.PHONY: compile
compile:
	yarn build

.PHONY: start
start:
	yarn start

.PHONY: test
test:
	yarn test

.PHONY: lint
lint:
	yarn lint

.PHONY: lint-fix
lint-fix:
	yarn lint:fix