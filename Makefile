lint: ## Run static analysis
	npx eslint *.js

test: ## Run unit tests
	npx jest

build:
	npx react-native bundle --platform android --dev true --entry-file App.js --bundle-output assets/App.android.bundle --assets-dest ./assets_dest

help: ## Display the help screen
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: lint help