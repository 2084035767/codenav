---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 为自由献诗
  text: 编程导航模板
  tagline: 基于 VitePress 的个人编程导航页面模板
  image:
    src: /logo.png
    alt: 为自由献诗
  actions:
    - text: 为自由献诗
      link: #
    - text: 编程导航
      link: /nav/
      theme: alt
    - text: 知识库
      link: #
      theme: alt
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
