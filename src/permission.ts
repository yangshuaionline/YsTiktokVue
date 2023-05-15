import router from "./router";
/**
 * beforeEach()
 * 作用：全局拦截所有路由，在每次修改路由地址之前触发回调函数
 * 参数：回调函数（副作用函数）
 *  回参一：变化后路由地址信息。当前展示的路由地址信息
 *  回参二：上一个路由地址信息
 *  回参三：next() 管道函数，表示进入下一个钩子函数
 *         next() 可以修改url地址。
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == true) {
    //判断是否存在token，如果存在正常跳转，如果不存在，跳转登录页
    if (localStorage.getItem("Authorization")) {
      console.log(localStorage.getItem("Authorization"));
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

/**
 *
 */
router.afterEach((to, from, failure) => {
  console.log("after each，路由组件加载完毕以后执行");
});
