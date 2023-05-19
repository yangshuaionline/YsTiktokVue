# YsTiktokVue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 页面

- LoginView.vue 登录页面（done）

> 手机号验证、验证码登录、发送验证码倒计时

- HomeVue.vue 主页（doing）

> 上方title，左边列表，右边子页面

- AboutVue.vue 关于我们（暂时无用）

### 结构说明

- assets 资源
- bean 结构返回得 data 结构
- components 辅页面
- manager 数据处理（UserManager 为本地数据处理）
- param 接口预处理（接口、参数）
- router 路由
- store 【待定】
- utils 工具类
- views 主页面
- App.vue（壳）
- main.ts (程序入口)
- permission.ts (路由拦截)
- request.ts (网络请求顶层处理)
