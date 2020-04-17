# Design

## 产品

### What

1. 管理音乐。

### Why

1. 收藏的音乐分布在各个平台，依赖各个平台。
2. 各个平台版权不同，常常有歌曲失效。
3. 管理不方便，忘记常听的那首歌叫什么，又找不到。

### 产品形态

1. Web 端
2. App 端
    + 可以同步 Server 数据
    + 可以离线使用
    + 可以独立抓取？

## 需求

1. 录入专辑名/EP/Singles/现场抓取对应的信息。
        + 抓取专辑封面
        + 抓取专辑歌曲
        + 歌手名
        + 分类
2. 可以自己录入信息。
3. 抓取歌词？
4. 支持本地磁盘播放？
5. 给出可播放的地址？

## 开发

### 技术选型

Nodejs + Express + Mongodb / Mysql + Bootstrap

## Resource

### 抓取地址

[豆瓣音乐](https://music.douban.com/)

[网易云](https://music.163.com/)

[QQ](https://y.qq.com/)

[Apple Music](http://tools.applemusic.com/en-us)

[Spotify](https://open.spotify.com/)
