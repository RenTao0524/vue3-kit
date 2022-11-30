// 扩展全局属性类型
declare module "vue" {
  interface ComponentCustomProperties {
    $msg: string;
    $calc: (one: number, two: number) => number
  }
}
export {};
