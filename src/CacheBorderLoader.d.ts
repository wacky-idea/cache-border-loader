interface CacheBorderLoader {
  new(): this;

  /**
   * 获取 实例
   *
   * @static
   * @returns {this}
   * @memberof CacheBorderLoader
   */
  static getInstance(): CacheBorderLoader

  /**
   * 加载资源
   *
   * @memberof CacheBorderLoader
   */
  loader()

  /**
   * 删除缓存
   *
   * @param {string} id 缓存key
   * @returns {number}
   * @memberof CacheBorderLoader
   */
  delCache(id: string): number

  /**
   *清除所有缓存
   *
   * @memberof CacheBorderLoader
   */
  clearCache()
}

declare var CacheBorderLoader: CacheBorderLoader;

export {
  CacheBorderLoader
}