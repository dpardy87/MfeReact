DOCKER_COMPOSE = docker-compose

# commands
build:
	@echo "Building Docker images..."
	$(DOCKER_COMPOSE) up --build

down:
	@echo "Stopping and Removing Docker containers..."
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

# help
help:
	@echo "Available Docker Compose commands:"
	@echo "  build        - Build Docker images"
	@echo "  down         - Stop Docker containers"
	@echo "  logs         - Show logs for a specified service (default: app1)"
