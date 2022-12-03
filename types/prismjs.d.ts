// declare type for prismjs
declare module "prismjs" {
  export interface Prism {
    highlightAll: () => void;
  }
  const prism: Prism;
  export default prism;
}
