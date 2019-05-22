# Day 1(HTML)

다양한 HTML Tag들을 사용해본다.

[index.html](../src/index.html) 파일 참고

## 배우는 것

1. HTML 태그 구조
   1. `<!DOCTYPE html>` - 지금 보고 있는 문서(웹사이트가 컴퓨터가 보기엔 문서)가 어떤 타입인지 알려준다. (`<!DOCTYPE html>`은 문서타입이 HTML이라는 것을 나타냄.)
   1. `<html>` - lang 속성을 이용해서 사이트가 어떤 언어를 사용하는지 알려준다. 예) lang="ko" 한국어
   1. `<head>`
      1. `<link />` - favicon(브라우저 탭에 나오는 아이콘)을 정하는데 사용
      1. `<title>` - 제목(브라우저 탭에 나오는 문자)을 정하는데 사용
   1. `<body>`
      1. `<h1> ~ <h6>` - 다양한 Header 스타일 적용 가능
      1. `<img />` - 이미지, `width, height` 속성으로 크기 조절 가능
      1. `<p>` - 문장
      1. `<b>` - bold 진하게
      1. `<ul>` - 순서가 없는 리스트
      1. `<ol>` - 순서가 있는 리스트
         1. `<li>` - 리스트
      1. `<a>` - 사이트 이동, target 속성에 "\_blank" 값을 넣으면 새창에서 열기
      1. `<div>` - 박스, 구역을 나눈다고 생각
      1. `<input>` - 텍스트를 입력받는 태그
      1. `<button>` - 버튼, 눌렀을 때 onclick 이벤트 지정 가능
      1. `<script>` - script를 사용할 수 있게 해줌. 예제에서 Javascript를 사용했음.
1. Javascript(JS)
   1. script태그 내부에서 함수 선언
   1. button태그의 onclick이벤트에 선언한 함수 바인딩

```html
<script>
  function alertText() {
    alert(document.querySelector("input").value);
  }
</script>
```

## 참고

> - 모르는 태그가 있으면 구글에 해당 태그를 검색하면 된다. "input tag" 혹은 mdn 키워드를 넣으면 모질라 개발자 그룹의 문서를 볼 수 있다. "input tag mdn" ([W3Schools](https://www.w3schools.com/)도 매우 신뢰할 수 있는 사이트)
> - 어떤 태그를 사용해야되는지 모르겠으면 역시 구글에 검색한다. "text html tag"

- https://icons8.com/icons - 예제에서 사용한 favicon 검색한 사이트
