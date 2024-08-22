import S from './style.module.css';
import Child from './Child';
import { useTheme } from '@/contexts/theme';

function Parent() {
  const { theme } = useTheme();

  const {
    Parent: { background, label },
  } = theme;

  const boxStyles = {
    backgroundColor: background,
    borderColor: label,
  };

  const labelStyles = {
    color: label,
  };

  return (
    <div className={S.box} style={boxStyles}>
      <strong className={S.label} style={labelStyles}>
        Parent
      </strong>
      <Child />
    </div>
  );
}

export default Parent;
