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
    { className: "item" },
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
const reactDomRoot = ReactDOM.createRoot(container);

reactDomRoot.render(list);
