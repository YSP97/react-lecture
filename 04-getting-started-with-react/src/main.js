// 실습(Practice)
import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";
// 가상요소로 이거 만드는 게 목표 <ul className="architectures" lang="en"></ul>

//Data (선언적 프로그래밍)
const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

const listItems = listData.items.map(({ id, title }) => {
  // 가상 요소 반환
  const itemElement = createElement(
    "li",
    { className: "item" },
    createElement("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    createElement("span", { className: "content" }, title),
    createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

// 리액트가 이러한 구조로 변경사항을 감지하여 렌더링한다고 함 그래서 속도가 빠르당
// API: createElement(type, props, ...children)
const list = createElement(
  // type
  "ul",
  // props
  { className: "architectures", lang: "en" },
  // 자식(가상요소 삽입) 넣기 <li class= "item"></li>
  // ...children(child1,child2,...childN)
  ...listItems
);

// 가상 돔(실제 돔 흉내: 단순화해서) 생성됨
console.log(list);

const root = createRoot(document.getElementById("virtual-dom"));

root.render(list);
