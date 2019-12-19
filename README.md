# 벤처창업 웹 프로그래밍 7조: 정원 미달 알리미

## Problem & Solution

### 1. CORS 문제 
- superagent 및 Moesif CORS 사용

### 2. OCR 누를때마다 링크 바뀌는 현상
- 맨 마지막으로 요청한 링크에 대해서만 OCR처리를 하면 된다.
- 보안문자 이미지를 서버에 저장 -> OCR API의 이미지 input으로 해당 URL을 입력한다

### 3. superagent로 받아온 response parsing하는 문제
- document.implementation.createHTMLDocument()를 이용해서 response를 xml 형식으로 변환, 해당 DOM 내에서 데이터 추출
- 이 과정에서 기존 document와 response에서 변환된 html 내용이 다른 것을 파악, 문제 해결

### 4. 한글 깨짐 문제
-


***

## 총 두 개의 console 창이 필요
- =node login-server.js
- npm start react

## todo
- Macro.js 부분에서 children을 보는 중 index가 length를 넘어감
- ocr 데이터 얹기

## register 
- checkboxNumber에 관심강좌 리스트 중 몇번 째 강좌인지 입력 (index 0 부터)
- ocr에 파싱한 숫자 넣기
- 현재 form으로 해둔 것은 실험용으로 해둔 것 위의 parameter pass 구현 후 삭제 요망
