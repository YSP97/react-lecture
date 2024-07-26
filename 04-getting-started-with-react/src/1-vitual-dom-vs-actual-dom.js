// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM

// virtual
import { createElement } from "./lib/virtual/index.js";

// virtual-dom
import { createRoot } from "./lib/virtual-dom/index.js";

// 실제 DOM 생성
// cf) HTML 코드는 DOM이 아니라 텍스트고 파싱되어야 실제 DOM이 되는것임!
// 웹 API를 사용해 문서 객체(Document Object) 생성
// <figure> 요소를 생성하고 싶어요.
// 부모 요소
const figureElement = document.createElement("figure");
// console.dir(figureElement);

// 자식 요소
const figcationElement = document.createElement("figcaption");

//요소간 관계 형성
figureElement.append(figcationElement);

// 실제 DOM에 마운트(착장 === 렌더링)
const actualDomElement = document.getElementById("actual-dom");

actualDomElement.append(figureElement);
console.log(actualDomElement);

// 가상(추상화된, 단순화된) 요소(엘리먼트) 생성
// 자식 요소
const figcaptionVElement = createElement("figcation");
// 부모 요소
// API: createElement(type, props, ...children)로 구성됨
const figureVElement = createElement("figure", null, figcaptionVElement);
// console.log(figureVElement);

/* ----------------------------------------------------------- */
// virtual-dom / createRoot
// 가상 요소를 실제 DOM 요소로 렌더링

// API: createRoot(container => virtual-dom)
const virtualRootElement = document.getElementById("virtual-dom");
const vRoot = createRoot(virtualRootElement);
vRoot.render(figureVElement);
