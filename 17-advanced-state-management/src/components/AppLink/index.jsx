import { bool, node } from 'prop-types';
import S from './style.module.css';

AppLink.propTypes = {
  children: node.isRequired,
  isExternal: bool,
};

function AppLink({ children, isExternal = false, ...restProps }) {
  const externalProps = {};

  if (isExternal) {
    // isExternal이 true면 외부 링크 설정
    externalProps.target = '_blank';
    externalProps.rel = 'noreferrer noopener';
  }

  return (
    <a className={S.component} {...externalProps} {...restProps}>
      {children}
    </a>
  );
}

export default AppLink;
