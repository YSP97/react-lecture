/* global React, ReactDOM */

// React.createElement API 사용

const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

const itemList = listData.items.map(({ id, title }) => {
  const listElement = React.createElement(
    "li",
    { className: "item", key: id },
    React.createElement("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    React.createElement("span", { className: "content" }, title),
    React.createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      React.createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );

  return listElement;
});

const children = [...itemList];

const list = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  ...children
);

// console.log(list);

const container = document.getElementById("root");
// ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);

function render() {
  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

render();

// // 타이머 웹 API
// // setTimeOut
// // 특정 시간이 지나면 앱을 화면에 렌더링 하세요.

// setTimeout(render, 2000);

// // 특정 시간이 지나면 렌더링된 앱을 화면에서 표시하지 마세요.
// setTimeout(unmount, 4000);

// 반응성(Reactivity) 구현
// 개발자 -> 데이터 수정 -> 반응성(이를 감지) -> 화면 업데이트 구현
