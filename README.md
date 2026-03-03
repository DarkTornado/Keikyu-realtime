# 케이큐 전철 실시간 열차 위치
© 2025-2026 Dark Tornado, All rights reserved.

## 정보 출처
 - [케이큐 앱 내부에서 보여주는 웹페이지](https://app-kq.net/web/jp/html/zaisen.html)
 - [한국어 버전](https://app-kq.net/web/kr/html/zaisen.html)도 존재

## 사용법
```bash
$ git clone https://github.com/DarkTornado/Keikyu-realtime
$ cd Keikyu-realtime
$ node server.js
```
- 이후에 `http://localhost`에 접속. `http://localhost?lineId=main`과 같은 방식으로 사용 가능
- 소스코드를 보면 알 수 있지만, 모든 노선들의 열차 위치를 동시에 불러오는 것도 구현할 수 있습니다.

### 파라미터 목록
|노선명|파라미터|
|:-:|:-:|
|본선|`main` 또는 `honsen`|
|공항선|`airport` 또는 `kuukou`|
|즈시선|zushi|
|쿠리하마선|kurihama|
|다이시선|daishi|

***

# 京急 電鉄 列車走行位置
© 2025-2026 Dark Tornado, All rights reserved.

## 情報のソース
 - [京急アプリの内部で見せるウェブサイト](https://app-kq.net/web/jp/html/zaisen.html)

## 使い方
```bash
$ git clone https://github.com/DarkTornado/Keikyu-realtime
$ cd Keikyu-realtime
$ node server.js
```
- その後、`http://localhost`に接続。 `http://localhost?lineId=main`のように使用できます。
- ソースコードを見るとわかりますが、すべての路線の列車の位置を同時に読むことも実装できます。

### パラメータ一覧
|路線名|パラメータ一|
|:-:|:-:|
|本線|`main` または `honsen`|
|空港線|`airport` または `kuukou`|
|逗子線|zushi|
|久里浜線|kurihama|
|大師線|daishi|

***

# Realtime Train's Position of Keikyu
© 2025-2026 Dark Tornado, All rights reserved.

## Information  source
 - [Website in Keikyu App](https://app-kq.net/web/jp/html/zaisen.html)
 - There is also an [English Version](https://app-kq.net/web/en/html/zaisen.html)

## How to use
```bash
$ git clone https://github.com/DarkTornado/Keikyu-realtime
$ cd Keikyu-realtime
$ node server.js
```
- Then, access `http://localhost`. You can use it as `http://localhost?lineId=main`.
- As you can see from the source code, it is also possible to get train locations for all lines at once.

### Parameter List
|Line Name|Parameter|
|:-:|:-:|
|Main Line|`main` or `honsen`|
|Airport Line|`airport` or `kuukou`|
|Zushi Line|zushi|
|Kurihama Line|kurihama|
|Daishi Line|daishi|
