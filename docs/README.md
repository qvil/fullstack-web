# Docs

## 노하우

### 라이브 리로딩

파이썬 깔려있으면

```
python -m SimpleHTTPServer
```

http://localhost:8000/src/write.html 이런 식으로 들어가면 됨.

- http://livejs.com/ 이거 사용하거나
- https://stackoverflow.com/questions/5588658/auto-reload-browser-when-i-save-changes-to-html-file-in-chrome/29466420
- meta태그 사용하는 것도 고려했었음.

```html
<head>
  <meta http-equiv="refresh" content="30" />
</head>
```

### 웹서버

The Apache HTTP Server Project

> https://hub.docker.com/_/httpd

1. Docker Install
1. ~~[Dockerfile](/Dockerfile) 생성~~(이미있음)
1. 아래 명령어 실행

```
$ docker build -t my-apache2 .
$ docker run -dit --name my-running-app -p 8080:80 my-apache2
```

## 웹호스팅

### Github pages

1. 저장소 세팅에서 Source를 master branch로 선택해주면 끝.

예) https://qvil.github.io/fullstack-web/src/write.html
