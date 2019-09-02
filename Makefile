.phony: server server_down

server:
	docker-compose up --force-recreate --build

test:
	docker-compose -f docker-compose.yaml -f docker-compose.test.yaml up --force-recreate --build --abort-on-container-exit

server_down:
	docker-compose down

test_down:
	docker-compose -f docker-compose.yaml -f docker-compose.test.yaml down