import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '前端文档',
    items: [
      {
        title: 'Apache ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        title: 'Tailwind CSS',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://www.tailwindcss.cn/',
      },
      {
        title: 'Web 开发技术',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web',
      },
    ],
  },
  {
    title: '前端教程',
    items: [
      {
        title: '不凡学院',
        desc: '日常笔记记录（零零散散啥都记系列）',
        link: 'http://doc.bufanui.com/',
      },
      {
        title: '后盾人',
        desc: '用思维导图的方式总结个人所学知识',
        link: 'https://doc.houdunren.com/',
      },
      {
        title: '千古前端图文教程',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://web.qianguyihao.com/',
      },
      {
        title: 'web全栈体系',
        desc: 'mmPlayer 在线音乐播放器',
        link: 'https://js.youliaowu.com/',
      },
      {
        title: '前端进阶之旅',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://interview.poetries.top/',
      },
      {
        title: '大圣前端学习',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://roadmap.shengxinjing.cn/',
      },
      {
        title: '前端小课',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://lefex.github.io/',
      },
      {
        title: 'CSS 技巧',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://lhammer.cn/You-need-to-know-css/#/',
      },
      {
        title: 'CSS灵感',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://csscoco.com/inspiration/#/',
      },
      {
        title: 'CSS3 教程',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://waylau.gitbooks.io/css3-tutorial/content/',
      },
      {
        title: 'CSS Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/css-guidebook/',
      },
      {
        title: '一行 JS 代码',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://phuoc.ng/collection/1-loc/',
      },
      {
        title: '现代 JavaScript 教程',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://zh.javascript.info/',
      },
      {
        title: '《JavaScript 权威指南第七版》',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'http://js.okten.cn/',
      },
      {
        title: 'ECMAScript Next 系列教程',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://esnext-book.lishuaishuai.com/',
      },
      {
        title: 'JavaScript Promise迷你书',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'http://liubin.org/promises-book/',
      },
      {
        title: 'JavaScript Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://roadmap.shengxinjing.cn/https://tsejx.github.io/javascript-guidebook/',
      },
      {
        title: 'JavaScript 设计模式',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://www.patterns.dev/#patterns',
      },
      {
        title: 'TypeScript 入门教程',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://ts.xcatliu.com/',
      },
      {
        title: 'TypeScript Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/typescript-guidebook/',
      },
      {
        title: 'Node Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/node-guidebook/',
      },
      {
        title: '深入浅出 Webpack',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'http://webpack.wuhaolin.cn/',
      },
      {
        title: 'Webpack Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/webpack-guidebook/',
      },
      {
        title: 'Vue2.x学习笔记',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://zhoubichuan.github.io/web-vue/',
      },
      {
        title: 'Vue3 入门指南与实战案例',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://vue3.chengpeiquan.com/',
      },
      {
        title: 'Vue Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/vue-guidebook/',
      },
      {
        title: 'React Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/react-guidebook/',
      },
      {
        title: 'Cross Platform Guidebook',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/cross-platform-guidebook/',
      },
      {
        title: '前端图像学',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://tsejx.github.io/visualization-guidebook/',
      },
    ],
  },
  {
    title: 'REACT生态',
    items: [
      {
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org',
      },
      {
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com',
      },
      {
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org',
      },
      {
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org',
      },
      {
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design',
      },
      {
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design',
      },
      {
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs',
      },
      {
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org',
      },
      {
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org',
      },
      {
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org',
      },
      {
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'VUE生态',
    items: [
      {
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh',
      },
      {
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com',
      },
      {
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org',
      },
      {
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com',
      },
      {
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui',
      },
      {
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com',
      },
    ],
  },
  {
    title: '后端文档',
    items: [
      {
        //

        title: 'Rust',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://www.rust-lang.org/zh-CN/',
      },
      {
        //

        title: 'Golang',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://golang.google.cn/',
      },
      {
        //

        title: 'Lua',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://www.lua.org/',
      },
      {
        //

        title: 'C#',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://learn.microsoft.com/zh-cn/dotnet/csharp/',
      },
    ],
  },
  {
    title: '后端教程',
    items: [
      {
        title: 'programming notes',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://www3.ntu.edu.sg/home/ehchua/programming/index.html',
      },
      {
        title: '一文上手Python3',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://www.cnblogs.com/bytesfly/p/python.html',
      },
      {
        title: '陌溪的学习笔记',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'http://moxi159753.gitee.io/learningnotes/#/README',
      },
      {
        title: 'framework-learning',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://qsjzwithguang19forever.gitee.io/framework-learning/',
      },
      {
        title: 'learning-note',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://rbmonster.github.io/learning-note/#/?id=learning-note',
      },
      {
        title: '悟空聊架构',
        desc: '一个功能类优先的 CSS 框架',
        link: 'http://passjava.cn/#/',
      },
      {
        title: '架构整洁之道',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://wonderwater.gitbooks.io/clean_architecture_zh/content/',
      },
      {
        title: '冰河技术',
        desc: '微信小程序官方开发者文档',
        link: 'https://binghe001.github.io/',
      },
      {
        title: 'r2coding',
        desc: '微信小程序官方开发者文档',
        link: 'https://www.r2coding.com/#/',
      },
      {
        title: '笔记/搜集/摘录/实践',
        desc: '微信小程序官方开发者文档',
        link: 'https://wangchujiang.com/handbook/',
      },
      {
        title: 'ETS NoteBook',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://notebook.js.org/#/README',
      },
      {
        title: 'Ashiamd的个人MD笔记',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://ashiamd.github.io/docsify-notes/#/',
      },
      {
        title: 'interview',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://interview.huihut.com/#/',
      },
      {
        title: 'handbook',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://interview.huihut.com/#/',
      },
      {
        title: '现代 C++ 教程',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://changkun.de/modern-cpp/zh-cn/00-preface/',
      },
      {
        title: 'C++那些事',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://light-city.github.io/',
      },
      {
        title: 'bestJavaer',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://github.com/crisxuan/bestJavaer/tree/master',
      },
      {
        title: 'JavaPark',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://cunyu1943.github.io/JavaPark/',
      },
      {
        title: 'Java 全栈知识体系',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://pdai.tech/',
      },
      {
        title: '小熊学Java',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://javaxiaobear.gitee.io/',
      },
      {
        title: 'JavaGuide',
        desc: 'Emoji 表情大全',
        link: 'https://javaguide.cn/',
      },
      {
        title: 'Java 工程师进阶知识完全扫盲',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://doocs.github.io/advanced-java/#/?id=%e4%ba%92%e8%81%94%e7%bd%91-java-%e5%b7%a5%e7%a8%8b%e5%b8%88%e8%bf%9b%e9%98%b6%e7%9f%a5%e8%af%86%e5%ae%8c%e5%85%a8%e6%89%ab%e7%9b%b2',
      },
      {
        title: '进击的java菜鸟',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://fhfirehuo.github.io/Attacking-Java-Rookie/',
      },
      {
        title: 'Java工程师成神之路',
        desc: 'Emoji 表情大全',
        link: 'https://hollischuang.github.io/toBeTopJavaer/#/menu',
      },
      {
        title: 'bugstack 虫洞栈',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://bugstack.cn/',
      },
      {
        title: '二哥的Java进阶之路',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://javabetter.cn/',
      },
      {
        title: 'JVM 底层原理',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://doocs.github.io/jvm/',
      },
      {
        title: 'Heart First Java Web',
        desc: 'Emoji 表情大全',
        link: 'https://skyline75489.github.io/Heart-First-JavaWeb/',
      },
      {
        title: 'SPRING-TUTORIAL',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://dunwu.github.io/spring-tutorial/',
      },

      {
        title: 'Spring 实战(第 5 版)',
        desc: 'Emoji 表情大全',
        link: 'https://potoyang.gitbook.io/spring-in-action-v5/',
      },
      {
        title: 'Spring Boot 2.x入门教程',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.didispace.com/spring-boot-2/',
      },
      {
        title: 'mini-spring',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://github.com/DerekYRC/mini-spring',
      },
      {
        title: 'SpringBoot Demo',
        desc: 'Emoji 表情大全',
        link: 'https://mouday.gitee.io/spring-boot-demo/#/',
      },
      {
        title: '深入设计模式',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://refactoringguru.cn/design-patterns/book',
      },
      {
        title: 'SpringBoot3全栈指南',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://www.yuque.com/leifengyang/springboot3',
      },
      {
        title: 'CSView',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://www.csview.cn/',
      },
      {
        title: '笔试面试知识整理',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://hit-alibaba.github.io/interview/index.html',
      },
      {
        title: '程序员大彬',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://topjavaer.cn/',
      },
      {
        title: '正心全栈编程',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://docs.zhengxinonly.com/',
      },
      {
        title: '全栈公开课',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://fullstackopen.com/zh/?ref=appinn',
      },
    ],
  },
  {
    title: 'JAVA生态',
    items: [
      {
        title: 'Spring',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://spring.io/',
      },
      {
        title: 'SpringBoot',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://spring.io/projects/spring-boot/',
      },
      {
        title: 'SpringFramework',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://spring.io/projects/spring-framework',
      },
      {
        title: 'SpringCloud',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://spring.io/projects/spring-cloud',
      },
      {
        title: 'SpringWebMVC',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html',
      },
      {
        title: 'MyBatis',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://mybatis.org/mybatis-3/zh/index.html',
      },
      {
        title: 'MyBatisPlus',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://spring.io/',
      },
      {
        title: 'Hibernate',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://hibernate.org/',
      },
      {
        title: 'SpringDataJPA',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://projects.spring.io/spring-data-jpa/',
      },
      {
        title: 'Gson',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://github.com/google/gson',
      },
      {
        title: 'Jackson',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://wiki.fasterxml.com/JacksonHome',
      },
      {
        title: 'Druid',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://github.com/alibaba/druid',
      },
      {
        title: 'Quartz',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://www.quartz-scheduler.org/',
      },
      {
        title: 'Velocity',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://velocity.apache.org/',
      },
      {
        title: 'Thymeleaf',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://www.thymeleaf.org/',
      },
      {
        title: 'Slf4j',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://www.slf4j.org/',
      },
      {
        title: 'Netty',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://netty.io/',
      },
      {
        title: 'Maven',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://maven.apache.org/',
      },
      {
        title: 'Gradle',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://gradle.org/',
      },
      {
        title: 'Rabbitmq',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://www.rabbitmq.com/',
      },
      {
        title: 'Kafka',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'http://kafka.apache.org/',
      },
      {
        title: 'Hutool',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://hutool.cn/',
      },
      {
        title: 'Lombok',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://projectlombok.org/',
      },
      {
        title: 'Sa-token',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://sa-token.cc/',
      },
      {
        title: 'solon',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://solon.noear.org/',
      },
      {
        title: 'javalin',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://javalin.io/',
      },
    ],
  },
  {
    title: 'PYTHON生态',
    items: [
      {
        title: 'Fastapi',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://fastapi.tiangolo.com/zh/',
      },
      {
        title: 'Flask',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://flask.palletsprojects.com/en/3.0.x/',
      },
      {
        title: 'Django',
        desc: 'Emoji 表情大全',
        link: 'https://docs.djangoproject.com/zh-hans/4.2/',
      },
      {
        title: 'NumPy文档',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://www.osgeo.cn/numpy/contents.html#',
      },
      {
        title: 'pandas 文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'http://joyfulpandas.datawhale.club/index.html',
      },
    ],
  },
  {
    title: '人工智能',
    items: [
      {
        title: '动手学深度学习',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'http://zh.d2l.ai/index.html',
      },
      {
        title: '神经网络与深度学习',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://nndl.github.io/',
      },
      {
        title: '南瓜书',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://datawhalechina.github.io/pumpkin-book/#/',
      },
      {
        title: '简单粗暴 TensorFlow 2',
        desc: '为企业级框架和应用而生',
        link: 'https://tf.wiki/',
      },
      {
        title: 'AI Learning',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://ailearning.apachecn.org/',
      },
      {
        title: '深度学习工程师生存指南',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://dl.ypw.io/',
      },
      {
        title: '强化学习 100 题',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://p100.koki-saitoh.com/zh-CN',
      },
      {
        title: '蘑菇书EasyRL',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://datawhalechina.github.io/easy-rl/#/',
      },
      {
        title: '人工智能教程',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://www.captainbed.net/blog-neo/',
      },
    ],
  },
  {
    title: '数据算法',
    items: [
      {
        title: 'Hello 算法',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://www.hello-algo.com/',
      },
      {
        title: '力扣加加',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/',
      },
      {
        title: 'LeetCode',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://doocs.github.io/leetcode/#/',
      },
      {
        title: '吴师兄学算法',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://blog.algomooc.com/',
      },
      {
        title: 'labuladong 的算法笔记',
        desc: 'JavaScript 3d 库',
        link: 'https://labuladong.github.io/algo/',
      },
      {
        title: 'LeetCode Cookbook',
        desc: 'JavaScript 3d 库',
        link: 'https://books.halfrost.com/leetcode/',
      },
      {
        title: '牛客网',
        desc: 'JavaScript 3d 库',
        link: 'https://www.nowcoder.com/exam/company',
      },
      {
        title: 'myleetcode',
        desc: 'JavaScript 3d 库',
        link: 'https://guobinhit.github.io/myleetcode/',
      },
      {
        title: '宫水三叶的刷题日记',
        desc: 'JavaScript 3d 库',
        link: 'https://github.com/SharingSource/LogicStack-LeetCode/wiki',
      },
      {
        title: '代码随想录',
        desc: 'JavaScript 3d 库',
        link: 'https://programmercarl.com/',
      },
      {
        title: 'ALGORITHM-TUTORIAL',
        desc: 'JavaScript 3d 库',
        link: 'https://dunwu.github.io/waterdrop/pages/3ccbd4/',
      },
      {
        title: '数据结构',
        desc: 'JavaScript 3d 库',
        link: 'https://www.cnblogs.com/songwenjie/category/1201669.html',
      },
      {
        title: '数据结构与算法笔记',
        desc: 'JavaScript 3d 库',
        link: 'https://notebook.js.org/#/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%93%E4%B8%9A%E8%AF%BE/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AC%94%E8%AE%B0?id=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0',
      },
      {
        title: 'DataAlgoGuidebook',
        desc: 'JavaScript 3d 库',
        link: 'https://tsejx.github.io/data-structure-and-algorithms-guidebook/',
      },
    ],
  },
  {
    title: '计算机科学',
    items: [
      {
        title: 'CS-Notes 面试笔记',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.cyc2018.xyz/',
      },
      {
        title: '小林 x 图解计算机基础',
        desc: '下一代前端工具链',
        link: 'https://xiaolincoding.com/',
      },
      {
        title: 'CS自学指南',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://csdiy.wiki/',
      },
      {
        title: 'CS自救指北',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://survivesjtu.gitbook.io/survivesjtumanual/fu-lu/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei',
      },
      {
        title: '图灵班学习指南',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://zju-turing.github.io/TuringCourses/',
      },
      {
        title: 'Iridescent的cs笔记本',
        desc: 'An extremely fast bundler for the web',
        link: 'https://lhxcs.github.io/note/cs/',
      },
      {
        title: 'JiepengLab',
        desc: 'Rust-based platform for the Web',
        link: 'https://note.jiepeng.tech/',
      },
      {
        title: '小角龙的学习笔记',
        desc: 'An extremely fast bundler for the web',
        link: 'https://zhang-each.github.io/My-CS-Notebook/',
      },
      {
        title: '鹤翔万里的笔记本',
        desc: 'Rust-based platform for the Web',
        link: 'https://note.tonycrane.cc/cs/',
      },
      {
        title: '咸鱼暄的代码空间',
        desc: 'An extremely fast bundler for the web',
        link: 'https://xuan-insr.github.io/',
      },
      {
        title: 'HobbitQia的笔记本',
        desc: 'Rust-based platform for the Web',
        link: 'https://note.hobbitqia.cc/',
      },
      {
        title: 'Isshiki修 Notebook',
        desc: 'Rust-based platform for the Web',
        link: 'https://note.isshikih.top/cour_note/',
      },
      {
        title: '计算机学习指南',
        desc: 'Rust-based platform for the Web',
        link: 'https://cs.meowrain.cn/',
      },
      {
        title: '计算机体系结构基础',
        desc: 'Rust-based platform for the Web',
        link: 'https://foxsen.github.io/archbase/',
      },
      {
        title: '名校公开课程评价网',
        desc: 'Rust-based platform for the Web',
        link: 'https://conanhujinming.github.io/comments-for-awesome-courses/',
      },
      {
        title: '本科课程总结',
        desc: 'Rust-based platform for the Web',
        link: 'https://mini-full.notion.site/mini-full/cc62a03429714bb6a76e28d0f36a6b2c?v=5d9e0004b91f4d9fb399ef75feb94df0',
      },
      {
        title: '函数式编程指北',
        desc: 'Rust-based platform for the Web',
        link: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/',
      },
      {
        title: '程序设计训练（Rust）',
        desc: 'Rust-based platform for the Web',
        link: 'https://lab.cs.tsinghua.edu.cn/rust/',
      },
      {
        title: '竺院辅学计划网站',
        desc: 'Rust-based platform for the Web',
        link: 'https://ckc-agc.bowling233.top/',
      },
    ],
  },
  {
    title: '优秀博客',
    items: [
      {
        title: '文武科技柜',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://www.wangdu.site/',
      },
      {
        title: '那些免费的砖',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://www.thosefree.com/',
      },
      {
        title: '不死鸟',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://iui.su/?imyshare.com=friends',
      },
      {
        title: 'OhYee 博客',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://www.ohyee.cc/',
      },
      {
        title: 'Next-gen Tech Edu',
        desc: '基于 React 的静态网站生成器',
        link: 'https://ng-tech.icu/',
      },
      {
        title: 'BMPI',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.bmpi.dev/',
      },
      {
        title: '杨旭龙博客',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.yangxulong.com/',
      },
      {
        title: '茂茂物语',
        desc: '基于 React 的静态网站生成器',
        link: 'https://notes.fe-mm.com/',
      },
      {
        title: '廖雪峰的官方网站',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.liaoxuefeng.com/',
      },
      {
        title: 'MrBird',
        desc: '基于 React 的静态网站生成器',
        link: 'https://mrbird.cc/',
      },
      {
        title: '程序员泥瓦匠',
        desc: '基于 React 的静态网站生成器',
        link: 'https://bysocket.com/',
      },
      {
        title: '纯洁的微笑',
        desc: '基于 React 的静态网站生成器',
        link: 'http://www.ityouknow.com/',
      },
      {
        title: '安知鱼',
        desc: '基于 React 的静态网站生成器',
        link: 'https://blog.anheyu.com/',
      },
      {
        title: 'Poll的笔记',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.cnblogs.com/maybe2030/',
      },
      {
        title: '月伴飞鱼',
        desc: '基于 React 的静态网站生成器',
        link: 'https://hardyfish.top/',
      },
      {
        title: 'EasyBlog',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.easyblog.top/',
      },
      {
        title: '郭飞的笔记',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.guofei.site/',
      },
      {
        title: '绯鞠的博客',
        desc: '基于 React 的静态网站生成器',
        link: 'https://loli.fj.cn/',
      },
      {
        title: '如有乐享',
        desc: '基于 React 的静态网站生成器',
        link: 'https://51.ruyo.net/',
      },
      {
        title: 'DXH Blog',
        desc: '基于 React 的静态网站生成器',
        link: 'https://www.cnblogs.com/isdxh/',
      },
      {
        title: '钝悟的博客',
        desc: '基于 React 的静态网站生成器',
        link: 'https://dunwu.github.io/waterdrop/',
      },
      {
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: '',
      },
      {
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: '',
      },
      {
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: '',
      },
    ],
  },
  {
    title: '优秀项目',
    items: [
      {
        title: 'ELADMIN 在线文档',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://eladmin.vip/',
      },
      {
        title: 'ruoyi-vue-pro文档',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.cayzlh.com/wiki/ruoyi-vue-pro/',
      },
      {
        title: 'Arco Design Pro',
        desc: '阮一峰的网络日志',
        link: 'https://vue-pro.arco.design/login?redirect=Workplace',
      },
      {
        title: 'Vue Shop Vite',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://vue-admin-beautiful.com/shop-vite/#/register',
      },
      {
        title: 'Vue Naive Admin',
        desc: '阮一峰的网络日志',
        link: 'https://admin.isme.top/',
      },
    ],
  },
  {
    title: '其他教程',
    items: [
      {
        title: 'Vim 练习',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://www.openvim.com/tutorial.html',
      },
      {
        title: 'Git 练习',
        desc: '全球最大的技术问答网站',
        link: 'https://learngitbranching.js.org/?locale=zh_CN',
      },
      {
        title: '打字练习',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://www.eletypes.com/',
      },
      {
        title: 'RegexLearn',
        desc: '一个关于分享和探索的地方',
        link: 'https://regexlearn.com/zh-cn',
      },
      {
        title: 'Docker从入门到实践',
        desc: '技术问答开发者社区',
        link: 'https://yeasy.gitbook.io/docker_practice/',
      },
      {
        title: 'Getting Docker',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://dockerlabs.collabnix.com/',
      },
      {
        title: 'Markdown 官方教程',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://markdown.com.cn/',
      },
      {
        title: 'Shell 编程范例',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://tinylab-1.gitbook.io/shellbook/',
      },
      {
        title: 'Linux命令大全(手册)',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://www.linuxcool.com/',
      },
      {
        title: 'Linux 命令行与 Shell 脚本教程',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://archlinuxstudio.github.io/ShellTutorial/#/',
      },
      {
        title: 'Zorro Linux Book',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://zorrozou.github.io/',
      },
      {
        title: 'Database Guidebook',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://tsejx.github.io/database-guidebook/',
      },
      {
        title: 'DevOps Guidebook',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://tsejx.github.io/devops-guidebook/',
      },
      {
        title: 'Kubernetes教程',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://kuboard.cn/learning/',
      },
      {
        title: 'Nginx 极简教程',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=nginx-tutorial',
      },
      {
        title: 'NFT101',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://nft101.lfgkids.com/',
      },
      {
        title: '区块链',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://eternaldeath.github.io/blockchainHome/#/',
      },
      {
        title: 'Latex',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://1024th.github.io/MathJax_Tutorial_CN/#/quickstart',
      },
    ],
  },
]
