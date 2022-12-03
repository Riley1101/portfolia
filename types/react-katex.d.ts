declare module "react-katex" {
  import * as React from "react";
  export interface KatexProps {
    math?: string;
    block?: boolean;
    throwOnError?: boolean;
    errorColor?: string;
    displayMode?: boolean;
    errorColor?: string;
    children?: string;
    className?: string;
    macros?: {
      [key: string]: string;
    };
    maxExpand?: number;
    minRuleThickness?: number;
    renderError?: (error: Error) => React.ReactNode;
    strict?: boolean;
  }
  export class BlockMath extends React.Component<KatexProps> {}
  export class InlineMath extends React.Component<KatexProps> {}
}
