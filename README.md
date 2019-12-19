# 벤처창업 웹 프로그래밍 7조: 정원 미달 알리미

## Problem & Solution

### 1. CORS 문제 
- superagent, Request 및 Moesif CORS 사용

### 2. OCR 누를때마다 링크 바뀌는 현상
- 맨 마지막으로 요청한 링크에 대해서만 OCR처리를 하면 된다.
- 보안문자 이미지를 서버에 저장 -> OCR API의 이미지 input으로 해당 URL을 입력한다

### 3. superagent로 받아온 response parsing하는 문제
- document.implementation.createHTMLDocument()를 이용해서 response를 xml 형식으로 변환, 해당 DOM 내에서 데이터 추출
- 이 과정에서 기존 document와 response에서 변환된 html 내용이 다른 것을 파악, 문제 해결

### 4. Same Origin 정책으로 인한 Cookie 열람의 어려움
- 로그인 정보를 유지하기 위해서는 Cookie를 얻고, 보낼 수 있어야함
- Javascript를 이용한 local server를 구축하여 우회적으로 Cookie 열람

