lint: ## Run static analysis
	npx eslint *.js

test: ## Run unit tests
	npx jest

build: ## Build app from source
	npx react-native bundle --platform android --dev true --entry-file App.js --bundle-output assets/App.android.bundle --assets-dest ./assets_dest

up: ## Run app via expo server
	npx expo start -w

# Run this command on a new terminal opened at the root directory of the project
down: ## Close server (need to test on other machines)
	pkill -f "npm exec expo start -w"

help: ## Display the help screen
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: lint test build help