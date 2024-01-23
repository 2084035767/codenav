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
        link: 'https://tailwindcss.com/docs/installation',
      },
      {
        title: 'UnoCSS',
        desc: '即时按需的原子级CSS引擎',
        link: 'https://alfred-skyblue.gitee.io/unocss-docs-cn/',
      },
      {
        title: 'Web 开发技术',
        desc: 'Web 开发者指导提供手把手教学，帮助你实际使用 Web 技术做你想做或需要做的。',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web',
      },
    ],
  },
  {
    title: '前端教程',
    items: [
      {
        title: '网道',
        desc: '',
        link: 'https://wangdoc.com/',
      },
      {
        title: '不凡学院',
        desc: '不凡学院文档',
        link: 'http://doc.bufanui.com/',
      },
      {
        title: '后盾人',
        desc: '前端学习文档',
        link: 'https://doc.houdunren.com/',
      },
      {
        title: '千古前端图文教程',
        desc: '超详细的 Web 前端入门到进阶知识库',
        link: 'https://web.qianguyihao.com/',
      },
      {
        title: 'web全栈体系',
        desc: '',
        link: 'https://js.youliaowu.com/',
      },
      {
        title: '前端进阶之旅',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://interview.poetries.top/',
      },
      {
        title: '大圣前端学习',
        desc: '',
        link: 'https://roadmap.shengxinjing.cn/',
      },
      {
        title: '前端小课',
        desc: '通过图片、文字、代码、视频等多种方式写成的一本多媒体电子书。',
        link: 'https://lefex.github.io/',
      },
      {
        title: 'CSS 技巧',
        desc: 'Web 开发人员需要知道的 CSS 技巧',
        link: 'https://lhammer.cn/You-need-to-know-css/#/',
      },
      {
        title: 'CSS灵感',
        desc: '学习 CSS 的灵感',
        link: 'https://csscoco.com/inspiration/#/',
      },
      {
        title: 'CSS3 教程',
        desc: '一本关于 CSS3 的开源书',
        link: 'https://waylau.gitbooks.io/css3-tutorial/content/',
      },
      {
        title: 'CSS Guidebook',
        desc: 'CSS 知识图谱 新特性、属性、布局、响应式、动画',
        link: 'https://tsejx.github.io/css-guidebook/',
      },
      {
        title: '一行 JS 代码',
        desc: '顶级 JavaScript 实用程序，只需一行代码！',
        link: 'https://phuoc.ng/collection/1-loc/',
      },
      {
        title: '现代 JavaScript 教程',
        desc: '以最新的 JavaScript 标准为基准。',
        link: 'https://zh.javascript.info/',
      },
      {
        title: '《JavaScript 权威指南第七版》',
        desc: '',
        link: 'http://js.okten.cn/',
      },
      {
        title: 'ECMAScript Next 系列教程',
        desc: '对 ECMAScript 新特性的整理笔记。',
        link: 'https://esnext-book.lishuaishuai.com/',
      },
      {
        title: 'JavaScript Promise迷你书',
        desc: '以ES6 Promises，即JavaScript的标准规范为基础的、Promise的相关知识为主要讲解内容。',
        link: 'http://liubin.org/promises-book/',
      },
      {
        title: 'JavaScript Guidebook',
        desc: 'JavaScript 知识图谱：ECMAScript、DOM、BOM、HTML5、计算机网络',
        link: 'https://tsejx.github.io/javascript-guidebook/',
      },
      {
        title: 'JavaScript 设计模式',
        desc: '普通 JavaScript 或现代框架构建功能强大的 Web 应用程序的设计、渲染和性能模式。',
        link: 'https://www.patterns.dev/#patterns',
      },
      {
        title: 'TypeScript 入门教程',
        desc: '从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。',
        link: 'https://ts.xcatliu.com/',
      },
      {
        title: 'TypeScript Guidebook',
        desc: 'TypeScript 知识图谱 构建 JS 语言超集 TS 知识体系',
        link: 'https://tsejx.github.io/typescript-guidebook/',
      },
      {
        title: 'Node Guidebook',
        desc: 'Node 知识图谱 关于模块、JS 异步编程、进程、I/O、服务端应用等',
        link: 'https://tsejx.github.io/node-guidebook/',
      },
      {
        title: '深入浅出 Webpack',
        desc: '',
        link: 'http://webpack.wuhaolin.cn/',
      },
      {
        title: 'Webpack Guidebook',
        desc: 'Webpack 知识图谱：模块化、基础概念、工作原理、实战应用',
        link: 'https://tsejx.github.io/webpack-guidebook/',
      },
      {
        title: 'Vue2.x学习笔记',
        desc: '',
        link: 'https://zhoubichuan.github.io/web-vue/',
      },
      {
        title: 'Vue3 入门指南与实战案例',
        desc: '一个关于 Vue 3 + TypeScript 的起步学习教程',
        link: 'https://vue3.chengpeiquan.com/',
      },
      {
        title: 'Vue Guidebook',
        desc: 'Vue 知识图谱 关于用法、响应式原理、编译原理以及生态',
        link: 'https://tsejx.github.io/vue-guidebook/',
      },
      {
        title: 'React Guidebook',
        desc: 'React 知识图谱 关于概念、技巧、生态、前沿、源码核心',
        link: 'https://tsejx.github.io/react-guidebook/',
      },
      {
        title: 'Cross Platform Guidebook',
        desc: '跨平台开发知识图谱：HybridApp、ReactNative、小程序、Flutter、Electron',
        link: 'https://tsejx.github.io/cross-platform-guidebook/',
      },
      {
        title: '前端图像学',
        desc: '前端图像学 知识图谱 Canvas、SVG、WebGL',
        link: 'https://tsejx.github.io/visualization-guidebook/',
      },
      {
        title: '前端收藏夹',
        desc: '前端资源合集',
        link: 'https://panjiachen.github.io/awesome-bookmarks/',
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
        title: 'VueMacros',
        desc: '探索更多的宏和语法糖到 Vue 中',
        link: 'https://vue-macros.dev/zh-CN/',
      },
      {
        title: 'V3Hooks',
        desc: '针对 Vue3 的实用Hooks集合',
        link: 'https://yanzhandong868.gitbook.io/v3hooks/',
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
        title: 'Arco Design',
        desc: 'Arco Design - 企业级产品的完整设计和开发解决方案',
        link: 'https://arco.design/',
      },
      {
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        title: 'PrimeVue',
        desc: '使用 PrimeVue 全面的可定制、功能丰富的 UI 组件套件',
        link: 'https://primevue.org/',
      },
      {
        title: 'Vue3-Resource',
        desc: '包含web端&移动端&小程序&Electron等栏目',
        link: 'https://hu-snail.github.io/vue3-resource/',
      },
    ],
  },
  {
    title: '后端文档',
    items: [
      {
        //

        title: 'Rust',
        desc: '一门赋予每个人构建可靠且高效软件能力的语言。',
        link: 'https://www.rust-lang.org/zh-CN/',
      },
      {
        //

        title: 'Golang',
        desc: '一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。',
        link: 'https://golang.google.cn/',
      },
      {
        //

        title: 'Lua',
        desc: '一种功能强大、高效、轻量级、可嵌入的脚本语言。',
        link: 'https://www.lua.org/',
      },
      {
        //

        title: 'C#',
        desc: 'C#是微软推出的一种基于.NET框架和后来的.NET的、面向对象的高级编程语言。',
        link: 'https://learn.microsoft.com/zh-cn/dotnet/csharp/',
      },
    ],
  },
  {
    title: '后端教程',
    items: [
      {
        title: 'programming notes',
        desc: '英语编程笔记',
        link: 'https://www3.ntu.edu.sg/home/ehchua/programming/index.html',
      },
      {
        title: '一文上手Python3',
        desc: '',
        link: 'https://www.cnblogs.com/bytesfly/p/python.html',
      },

      {
        title: 'framework-learning',
        desc: '学习计算机相关知识的过程中整理的一些资料',
        link: 'https://qsjzwithguang19forever.gitee.io/framework-learning/',
      },
      {
        title: '冰河技术',
        desc: 'MySql 并发',
        link: 'https://binghe001.github.io/',
      },
      {
        title: 'r2coding',
        desc: 'Java 考研贴',
        link: 'https://www.r2coding.com/#/',
      },
      {
        title: '笔记/搜集/摘录/实践',
        desc: '',
        link: 'https://wangchujiang.com/handbook/',
      },

      {
        title: 'interview',
        desc: '',
        link: 'https://interview.huihut.com/#/',
      },
      // {
      //   title: 'handbook',
      //   desc: '',
      //   link: 'https://interview.huihut.com/#/',
      // },
      {
        title: '现代 C++ 教程',
        desc: '',
        link: 'https://changkun.de/modern-cpp/zh-cn/00-preface/',
      },
      {
        title: 'C++那些事',
        desc: '',
        link: 'https://light-city.github.io/',
      },
      {
        title: 'bestJavaer',
        desc: '成为更好的Java程序员的系列教程',
        link: 'https://github.com/crisxuan/bestJavaer/tree/master',
      },
      {
        title: 'JavaPark',
        desc: '汇聚编程学习（侧重 Java）、面试总结、计算机基础、数据库、效率工具等诸多内容。',
        link: 'https://cunyu1943.github.io/',
      },
      {
        title: 'Java 全栈知识体系',
        desc: '',
        link: 'https://pdai.tech/',
      },
      {
        title: '小熊学Java',
        desc: '',
        link: 'https://javaxiaobear.gitee.io/',
      },
      {
        title: 'JavaGuide',
        desc: '一份涵盖大部分 Java 程序员所需要掌握的核心知识。',
        link: 'https://javaguide.cn/',
      },
      {
        title: 'Java 工程师进阶知识完全扫盲',
        desc: '本系列知识由 Doocs 技术社区总结发布，内容涵盖高并发、分布式、高可用、微服务、海量数据处理等',
        link: 'https://doocs.github.io/advanced-java/#/?id=%e4%ba%92%e8%81%94%e7%bd%91-java-%e5%b7%a5%e7%a8%8b%e5%b8%88%e8%bf%9b%e9%98%b6%e7%9f%a5%e8%af%86%e5%ae%8c%e5%85%a8%e6%89%ab%e7%9b%b2',
      },
      {
        title: '进击的java菜鸟',
        desc: '一本java程序员写的必备知识积累之书。',
        link: 'https://fhfirehuo.github.io/Attacking-Java-Rookie/',
      },
      {
        title: 'Java工程师成神之路',
        desc: '',
        link: 'https://hollischuang.github.io/toBeTopJavaer/#/menu',
      },
      {
        title: 'bugstack 虫洞栈',
        desc: '',
        link: 'https://bugstack.cn/',
      },
      {
        title: '二哥的Java进阶之路',
        desc: '',
        link: 'https://javabetter.cn/',
      },
      {
        title: 'JVM 底层原理',
        desc: '需要重点掌握的 JVM 知识点，',
        link: 'https://doocs.github.io/jvm/',
      },
      {
        title: 'Heart First Java Web',
        desc: '一个走心的 Java Web 入门开发教程',
        link: 'https://skyline75489.github.io/Heart-First-JavaWeb/',
      },
      {
        title: 'SPRING-TUTORIAL',
        desc: 'spring-tutorial 是一个 Spring & Spring Boot 教程。',
        link: 'https://dunwu.github.io/spring-tutorial/',
      },

      {
        title: 'Spring 实战(第 5 版)',
        desc: '',
        link: 'https://potoyang.gitbook.io/spring-in-action-v5/',
      },
      {
        title: 'Spring Boot 2.x入门教程',
        desc: '',
        link: 'https://www.didispace.com/spring-boot-2/',
      },
      {
        title: 'mini-spring',
        desc: 'mini-spring是简化版的spring框架',
        link: 'https://github.com/DerekYRC/mini-spring',
      },
      {
        title: 'SpringBoot Demo',
        desc: '',
        link: 'https://mouday.gitee.io/spring-boot-demo/#/',
      },
      {
        title: 'SpringBoot3全栈指南',
        desc: '基于java17，SpringBoot3，快速入门，理解原理。',
        link: 'https://www.yuque.com/leifengyang/springboot3',
      },
      {
        title: '深入设计模式',
        desc: '',
        link: 'https://refactoringguru.cn/design-patterns/book',
      },

      {
        title: 'CSView',
        desc: '一个互联网面试内容汇总和八股文学习的网站，让互联网面试不再成为困难',
        link: 'http://www.csview.cn/',
      },
      {
        title: '笔试面试知识整理',
        desc: '',
        link: 'https://hit-alibaba.github.io/interview/index.html',
      },
      {
        title: '程序员大彬',
        desc: '',
        link: 'https://topjavaer.cn/',
      },
      {
        title: '正心全栈编程',
        desc: '',
        link: 'https://docs.zhengxinonly.com/',
      },
      {
        title: '全栈开发指南',
        desc: '',
        link: 'https://frank-lam.github.io/fullstack-tutorial/#/',
      },
      {
        title: '全栈公开课',
        desc: '',
        link: 'https://fullstackopen.com/zh/?ref=appinn',
      },{
        title: '悟空聊架构',
        desc: '',
        link: 'http://passjava.cn/#/',
      },
      {
        title: '架构整洁之道',
        desc: '',
        link: 'https://wonderwater.gitbooks.io/clean_architecture_zh/content/',
      },{
        title: '陌溪的学习笔记',
        desc: '低',
        link: 'http://moxi159753.gitee.io/learningnotes/#/README',
      },{
        title: 'ETS NoteBook',
        desc: '记录本科及研究生阶段所学的计算机专业知识',
        link: 'https://notebook.js.org/#/README',
      },
      {
        title: 'Ashiamd的个人MD笔记',
        desc: '该项目用于记录个人学习笔记，有部分内容来自图书、博客、论坛等。',
        link: 'https://ashiamd.github.io/docsify-notes/#/',
      }, {
        title: 'learning-note',
        desc: '学习笔记',
        link: 'https://rbmonster.github.io/learning-note/#/?id=learning-note',
      },
    ],
  },
  {
    title: 'JAVA生态',
    items: [
      {
        title: 'Spring',
        desc: '',
        link: 'https://spring.io/',
      },
      {
        title: 'SpringBoot',
        desc: '',
        link: 'https://spring.io/projects/spring-boot/',
      },
      {
        title: 'SpringFramework',
        desc: '',
        link: 'https://spring.io/projects/spring-framework',
      },
      {
        title: 'SpringCloud',
        desc: '',
        link: 'https://spring.io/projects/spring-cloud',
      },
      {
        title: 'SpringWebMVC',
        desc: '',
        link: 'https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html',
      },
      {
        title: 'MyBatis',
        desc: '',
        link: 'https://mybatis.org/mybatis-3/zh/index.html',
      },
      {
        title: 'MyBatisPlus',
        desc: '',
        link: 'https://spring.io/',
      },
      {
        title: 'Hibernate',
        desc: '',
        link: 'http://hibernate.org/',
      },
      {
        title: 'SpringDataJPA',
        desc: '',
        link: 'https://projects.spring.io/spring-data-jpa/',
      },
      {
        title: 'Gson',
        desc: '',
        link: 'https://github.com/google/gson',
      },
      {
        title: 'Jackson',
        desc: '',
        link: 'http://wiki.fasterxml.com/JacksonHome',
      },
      {
        title: 'Druid',
        desc: '',
        link: 'https://github.com/alibaba/druid',
      },
      {
        title: 'Quartz',
        desc: '',
        link: 'http://www.quartz-scheduler.org/',
      },
      {
        title: 'Velocity',
        desc: '',
        link: 'http://velocity.apache.org/',
      },
      {
        title: 'Thymeleaf',
        desc: '',
        link: 'https://www.thymeleaf.org/',
      },
      {
        title: 'Slf4j',
        desc: '',
        link: 'https://www.slf4j.org/',
      },
      {
        title: 'Netty',
        desc: '',
        link: 'http://netty.io/',
      },
      {
        title: 'Maven',
        desc: '',
        link: 'https://maven.apache.org/',
      },
      {
        title: 'Gradle',
        desc: '',
        link: 'https://gradle.org/',
      },
      {
        title: 'Rabbitmq',
        desc: '',
        link: 'http://www.rabbitmq.com/',
      },
      {
        title: 'Kafka',
        desc: '',
        link: 'http://kafka.apache.org/',
      },
      {
        title: 'Hutool',
        desc: '',
        link: 'https://hutool.cn/',
      },
      {
        title: 'Lombok',
        desc: '',
        link: 'https://projectlombok.org/',
      },
      {
        title: 'Sa-token',
        desc: '',
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
        desc: '',
        link: 'https://fastapi.tiangolo.com/zh/',
      },
      {
        title: 'Flask',
        desc: '',
        link: 'https://flask.palletsprojects.com/en/3.0.x/',
      },
      {
        title: 'Django',
        desc: '',
        link: 'https://docs.djangoproject.com/zh-hans/4.2/',
      },
      {
        title: 'NumPy 文档',
        desc: '',
        link: 'https://www.osgeo.cn/numpy/contents.html#',
      },
      {
        title: 'Pandas 文档',
        desc: '',
        link: 'http://joyfulpandas.datawhale.club/index.html',
      },
    ],
  },
  {
    title: '人工智能',
    items: [
      {
        title: '动手学深度学习',
        desc: '',
        link: 'http://zh.d2l.ai/index.html',
      },
      {
        title: '神经网络与深度学习',
        desc: '',
        link: 'https://nndl.github.io/',
      },
      {
        title: '南瓜书',
        desc: '',
        link: 'https://datawhalechina.github.io/pumpkin-book/#/',
      },
      {
        title: '简单粗暴 TensorFlow 2',
        desc: '',
        link: 'https://tf.wiki/',
      },
      {
        title: 'AI Learning',
        desc: '',
        link: 'https://ailearning.apachecn.org/',
      },
      {
        title: '深度学习工程师生存指南',
        desc: '',
        link: 'https://dl.ypw.io/',
      },
      {
        title: '强化学习 100 题',
        desc: '',
        link: 'https://p100.koki-saitoh.com/zh-CN',
      },
      {
        title: '蘑菇书EasyRL',
        desc: '',
        link: 'https://datawhalechina.github.io/easy-rl/#/',
      },
      {
        title: '人工智能教程',
        desc: '',
        link: 'https://www.captainbed.net/blog-neo/',
      },
    ],
  },
  {
    title: '数据算法',
    items: [
      {
        title: 'Hello 算法',
        desc: '',
        link: 'https://www.hello-algo.com/',
      },
      {
        title: '力扣加加',
        desc: '',
        link: 'https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/',
      },
      {
        title: 'LeetCode',
        desc: '',
        link: 'https://doocs.github.io/leetcode/#/',
      },
      {
        title: '吴师兄学算法',
        desc: '',
        link: 'https://blog.algomooc.com/',
      },
      {
        title: 'labuladong 的算法笔记',
        desc: '',
        link: 'https://labuladong.github.io/algo/',
      },
      {
        title: 'LeetCode Cookbook',
        desc: '',
        link: 'https://books.halfrost.com/leetcode/',
      },
      {
        title: '牛客网',
        desc: '',
        link: 'https://www.nowcoder.com/exam/company',
      },
      {
        title: 'myleetcode',
        desc: '',
        link: 'https://guobinhit.github.io/myleetcode/',
      },
      {
        title: '宫水三叶的刷题日记',
        desc: '',
        link: 'https://github.com/SharingSource/LogicStack-LeetCode/wiki',
      },
      {
        title: '代码随想录',
        desc: '',
        link: 'https://programmercarl.com/',
      },
      {
        title: 'ALGORITHM-TUTORIAL',
        desc: '',
        link: 'https://dunwu.github.io/waterdrop/pages/3ccbd4/',
      },
      {
        title: '数据结构与算法笔记',
        desc: '',
        link: 'https://notebook.js.org/#/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%93%E4%B8%9A%E8%AF%BE/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AC%94%E8%AE%B0?id=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0',
      },
      {
        title: 'DataAlgoGuidebook',
        desc: '',
        link: 'https://tsejx.github.io/data-structure-and-algorithms-guidebook/',
      },
    ],
  },
  {
    title: '计算机科学',
    items: [
      {
        title: 'OI Wiki',
        desc: '',
        link: 'https://oi-wiki.org/',
      },
      {
        title: 'CS-Notes 面试笔记',
        desc: '',
        link: 'https://cyc2018.xyz/',
      },
      {
        title: '小林 x 图解计算机基础',
        desc: '',
        link: 'https://xiaolincoding.com/',
      },
      {
        title: 'CS自学指南',
        desc: '',
        link: 'https://csdiy.wiki/',
      },
      {
        title: 'CS自救指北',
        desc: '',
        link: 'https://survivesjtu.gitbook.io/survivesjtumanual/fu-lu/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei',
      },
      {
        title: 'JiepengLab',
        desc: '',
        link: 'https://note.jiepeng.tech/',
      },
      {
        title: '咸鱼暄的代码空间',
        desc: '',
        link: 'https://xuan-insr.github.io/',
      },
      {
        title: '计算机学习指南',
        desc: '',
        link: 'https://cs.meowrain.cn/',
      },
      {
        title: '计算机体系结构基础',
        desc: '',
        link: 'https://foxsen.github.io/archbase/',
      },
      {
        title: '名校公开课程评价网',
        desc: '',
        link: 'https://conanhujinming.github.io/comments-for-awesome-courses/',
      },
      {
        title: '函数式编程指北',
        desc: '',
        link: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/',
      },
    ],
  },
  {
    title: '优秀博客',
    items: [
      {
        title: '文武科技柜',
        desc: '',
        link: 'https://www.wangdu.site/',
      },
      {
        title: '那些免费的砖',
        desc: '',
        link: 'https://www.thosefree.com/',
      },
      {
        title: '不死鸟',
        desc: '',
        link: 'https://iui.su/?imyshare.com=friends',
      },
      {
        title: 'OhYee 博客',
        desc: '',
        link: 'https://www.ohyee.cc/',
      },
      {
        title: 'Next-gen Tech Edu',
        desc: '',
        link: 'https://ng-tech.icu/',
      },
      {
        title: 'BMPI',
        desc: '',
        link: 'https://www.bmpi.dev/',
      },
      {
        title: '杨旭龙博客',
        desc: '',
        link: 'https://www.yangxulong.com/',
      },
      {
        title: '茂茂物语',
        desc: '',
        link: 'https://notes.fe-mm.com/',
      },
      {
        title: '廖雪峰的官方网站',
        desc: '',
        link: 'https://www.liaoxuefeng.com/',
      },
      {
        title: 'MrBird',
        desc: '',
        link: 'https://mrbird.cc/',
      },
      {
        title: '程序员泥瓦匠',
        desc: '',
        link: 'https://bysocket.com/',
      },
      {
        title: '纯洁的微笑',
        desc: '',
        link: 'http://www.ityouknow.com/',
      },
      {
        title: '安知鱼',
        desc: '',
        link: 'https://blog.anheyu.com/',
      },
      {
        title: 'Poll的笔记',
        desc: '',
        link: 'https://www.cnblogs.com/maybe2030/',
      },
      {
        title: '月伴飞鱼',
        desc: '',
        link: 'https://hardyfish.top/',
      },
      {
        title: 'EasyBlog',
        desc: '',
        link: 'https://www.easyblog.top/',
      },
      {
        title: '郭飞的笔记',
        desc: '',
        link: 'https://www.guofei.site/',
      },
      {
        title: '绯鞠的博客',
        desc: '',
        link: 'https://loli.fj.cn/',
      },
      {
        title: '如有乐享',
        desc: '',
        link: 'https://51.ruyo.net/',
      },
      {
        title: 'DXH Blog',
        desc: '',
        link: 'https://www.cnblogs.com/isdxh/',
      },
      {
        title: '钝悟的博客',
        desc: '',
        link: 'https://dunwu.github.io/waterdrop/',
      },
      // {
      //   title: 'Docusaurus',
      //   desc: '',
      //   link: '',
      // },
      // {
      //   title: 'Docusaurus',
      //   desc: '',
      //   link: '',
      // },
      // {
      //   title: 'Docusaurus',
      //   desc: '',
      //   link: '',
      // },
    ],
  },
  {
    title: '优秀项目',
    items: [
      {
        title: 'ELADMIN 在线文档',
        desc: '',
        link: 'https://eladmin.vip/',
      },
      {
        title: 'ruoyi-vue-pro文档',
        desc: '',
        link: 'https://www.cayzlh.com/wiki/ruoyi-vue-pro/',
      },
      {
        title: 'Arco Design Pro',
        desc: '',
        link: 'https://vue-pro.arco.design/login?redirect=Workplace',
      },
      {
        title: 'Vue Shop Vite',
        desc: '',
        link: 'https://vue-admin-beautiful.com/shop-vite/#/register',
      },
      {
        title: 'Vue Naive Admin',
        desc: '',
        link: 'https://admin.isme.top/',
      },
    ],
  },
  {
    title: '其他教程',
    items: [
      {
        title: 'Vim 练习',
        desc: '',
        link: 'https://www.openvim.com/tutorial.html',
      },
      {
        title: 'Git 练习',
        desc: '',
        link: 'https://learngitbranching.js.org/?locale=zh_CN',
      },
      {
        title: '打字练习',
        desc: '',
        link: 'https://www.eletypes.com/',
      },
      {
        title: 'RegexLearn',
        desc: '',
        link: 'https://regexlearn.com/zh-cn',
      },
      {
        title: 'Docker从入门到实践',
        desc: '',
        link: 'https://yeasy.gitbook.io/docker_practice/',
      },
      {
        title: 'Getting Docker',
        desc: '',
        link: 'https://dockerlabs.collabnix.com/',
      },
      {
        title: 'Markdown 官方教程',
        desc: '',
        link: 'https://markdown.com.cn/',
      },
      {
        title: 'Shell 编程范例',
        desc: '',
        link: 'https://tinylab-1.gitbook.io/shellbook/',
      },
      {
        title: 'Linux命令大全(手册)',
        desc: '',
        link: 'https://www.linuxcool.com/',
      },
      {
        title: 'Linux 命令行与 Shell 脚本教程',
        desc: '',
        link: 'https://archlinuxstudio.github.io/ShellTutorial/#/',
      },
      {
        title: 'Zorro Linux Book',
        desc: '',
        link: 'https://zorrozou.github.io/',
      },
      {
        title: 'Database Guidebook',
        desc: '',
        link: 'https://tsejx.github.io/database-guidebook/',
      },
      {
        title: 'DevOps Guidebook',
        desc: '',
        link: 'https://tsejx.github.io/devops-guidebook/',
      },
      {
        title: 'Kubernetes教程',
        desc: '',
        link: 'https://kuboard.cn/learning/',
      },
      {
        title: 'Nginx 极简教程',
        desc: '',
        link: 'https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=nginx-tutorial',
      },
      {
        title: 'NFT101',
        desc: '',
        link: 'https://nft101.lfgkids.com/',
      },
      {
        title: '区块链',
        desc: '',
        link: 'https://eternaldeath.github.io/blockchainHome/#/',
      },
      {
        title: 'Latex',
        desc: '',
        link: 'https://1024th.github.io/MathJax_Tutorial_CN/#/quickstart',
      },
    ],
  },
]
