.phony: server server_down

server:
	docker-compose up --force-recreate --build

server_down:
	docker-compose down