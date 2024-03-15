import { h, type VNode } from "vue";

const renderElement = (child: any): VNode => {
  return h(child.type, child.props, child.children);
};

export default renderElement;
