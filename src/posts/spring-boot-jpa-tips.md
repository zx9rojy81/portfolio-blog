---
title: "Spring Boot JPA N+1 문제 해결하기"
date: "2026-06-10"
tags: ["Java", "Spring Boot", "JPA"]
summary: "실무에서 자주 마주치는 JPA N+1 문제의 원인과 fetch join, EntityGraph를 활용한 해결 방법을 정리합니다."
---

## N+1 문제란?

JPA로 연관 관계가 있는 엔티티를 조회할 때 의도치 않게 쿼리가 N+1번 실행되는 현상입니다.

예를 들어 `Post` 목록을 조회하고 각 `Post`의 `Author`에 접근하면, Post 조회 1번 + Post 개수만큼 Author 조회가 발생합니다.

```java
List<Post> posts = postRepository.findAll(); // 쿼리 1번
for (Post post : posts) {
    System.out.println(post.getAuthor().getName()); // 쿼리 N번
}
```

## 해결 방법 1: Fetch Join

JPQL에서 `JOIN FETCH`를 사용하면 연관 엔티티를 한 번의 쿼리로 가져올 수 있습니다.

```java
@Query("SELECT p FROM Post p JOIN FETCH p.author")
List<Post> findAllWithAuthor();
```

## 해결 방법 2: @EntityGraph

어노테이션으로 간결하게 fetch join을 지정할 수 있습니다.

```java
@EntityGraph(attributePaths = {"author"})
List<Post> findAll();
```

## 주의사항

- 컬렉션 fetch join은 페이징(`setFirstResult`, `setMaxResults`)과 함께 사용하면 **경고**가 발생합니다. 이 경우 `@BatchSize`를 활용하세요.
- 불필요한 데이터까지 모두 로딩될 수 있으므로 꼭 필요한 경우에만 사용하세요.
