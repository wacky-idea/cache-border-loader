class CacheBorderLoader {
  //ES6类的静态方法（只能直接由类名调用的方法）：static getInstance
  //ES6类的静态属性：直接挂载在类名上的方法，如：CacheBorderLoader.instance()
  
  /**
   *获取 实例
   *
   * @static
   * @returns
   * @memberof CacheBorderLoader
   */
  static getInstance() {
      // 使用单例模式 初始化对象
      if (!CacheBorderLoader.instance) {
          CacheBorderLoader.instance = new CacheBorderLoader();
          return CacheBorderLoader.instance
      }
      return CacheBorderLoader.instance;
  }
  constructor() {

  }

  /**
   * 加载资源
   *
   * @memberof CacheBorderLoader
   */
  loader(){

  }


  /**
   * 删除缓存
   *
   * @memberof CacheBorderLoader
   */
  delCache(){

  }



}
