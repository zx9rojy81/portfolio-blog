---
title: "Docker Compose로 Spring Boot + MySQL 개발 환경 구성하기"
date: "2026-05-20"
tags: ["Docker", "Spring Boot", "MySQL"]
summary: "docker-compose.yml 하나로 Spring Boot 애플리케이션과 MySQL 데이터베이스를 함께 실행하는 개발 환경을 구성하는 방법을 설명합니다."
---

## 왜 Docker Compose를 쓰는가?

로컬 환경에 MySQL을 직접 설치하면 팀원마다 버전이 달라 발생하는 문제를 `docker-compose.yml` 하나로 해결할 수 있습니다.

## 기본 docker-compose.yml

```yaml
version: '3.8'

services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: myapp
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/myapp
      SPRING_DATASOURCE_USERNAME: user
      SPRING_DATASOURCE_PASSWORD: password
    depends_on:
      - db

volumes:
  mysql_data:
```

## Spring Boot application.yml 설정

```yaml
spring:
  datasource:
    url: ${SPRING_DATASOURCE_URL:jdbc:mysql://localhost:3306/myapp}
    username: ${SPRING_DATASOURCE_USERNAME:user}
    password: ${SPRING_DATASOURCE_PASSWORD:password}
  jpa:
    hibernate:
      ddl-auto: update
```

## 실행 방법

```bash
# 빌드 후 실행
docker compose up --build

# 백그라운드 실행
docker compose up -d

# 종료
docker compose down
```

## 팁: healthcheck 추가

`depends_on`만으로는 MySQL이 완전히 준비되기 전에 앱이 시작될 수 있습니다. `healthcheck`로 이를 방지할 수 있습니다.

```yaml
db:
  image: mysql:8.0
  healthcheck:
    test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval: 10s
    timeout: 5s
    retries: 5

app:
  depends_on:
    db:
      condition: service_healthy
```
