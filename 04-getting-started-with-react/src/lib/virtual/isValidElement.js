import { VIRTUAL_ELEMENT_TYPE } from "./creatElement.js";



export default function isValidElement(node) {
  // 전달받은 노드가 가상요소인가?
  if ("$$typeof" in node && node?.$$typeof === VIRTUAL_ELEMENT_TYPE) {
    
  } else {
    return false;
  }
}
