import VirtualDomRoot from "./VirtualDomRoot.js";

// ReactDOM.createRoot와 유사
function createRoot(rootElement) {
  return new VirtualDomRoot(rootElement);
}

export default createRoot;
