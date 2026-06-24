Vercel 배포 전 프로젝트 상태를 점검해줘.

다음 항목을 순서대로 확인해:

1. **빌드 검증**
   - `npm run build` 실행
   - 빌드 성공 여부 및 경고 메시지 확인
   - dist/ 디렉토리 생성 확인

2. **설정 파일 점검**
   - `vercel.json` 존재 여부 및 SPA rewrite 규칙 확인
   - `index.html` 의 title, meta description 태그 확인
   - `vite.config.ts` 에 markdownRawPlugin 포함 여부 확인

3. **환경변수 점검**
   - `.env.local` 파일 존재 여부 확인
   - `VITE_GITHUB_TOKEN` 설정 여부 확인 (없으면 Rate Limit 경고)
   - `.gitignore` 에 `.env.local` 포함 여부 확인

4. **콘텐츠 점검**
   - `src/posts/` 의 마크다운 파일 목록 및 개수
   - 각 파일의 frontmatter (title, date, tags, summary) 누락 여부 확인
   - `src/constants/profile.ts` 의 이메일, GitHub URL 플레이스홀더 여부 확인

5. **최종 리포트**
   - 항목별 ✅ / ⚠️ / ❌ 상태로 표시
   - 수정이 필요한 항목은 구체적인 해결 방법 안내
   - 배포 준비 완료 여부 최종 판정
