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
