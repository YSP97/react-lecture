import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from './../data/learn';

const { statusMessages, imageType } = learnData;

function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessages} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
