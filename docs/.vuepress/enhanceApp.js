export default ({ Vue, isServer, options, router, siteData}) => {
  /**
   * Only import element-ui under client side.
   */
  if (!isServer) {
    import("@canyuegongzi/web-ui/lib").then(() => {})
    try {
    } catch (e) {}
    import("./core.umd").then((ss) => {
      window.WebCorePlus = ss
    })
    import("./web-plus.umd").then(() => {})
    try {
    } catch (e) {
      console.log(e);
      console.error(e.message)
    }
  }
}
