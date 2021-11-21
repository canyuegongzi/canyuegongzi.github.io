/*import "@canyuegongzi/web-ui/lib/Button";
import "@canyuegongzi/web-ui/lib/Radio";*/
// import "@canyuegongzi/web-ui/lib";
export default ({ Vue, isServer }) => {
  /**
   * Only import element-ui under client side.
   */
  if (!isServer) {
    import("@canyuegongzi/web-ui/lib").then(() => {})
  }
}
