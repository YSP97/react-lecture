import S from './style.module.css';
import Parent from './Parent';
import { useTheme } from '@/contexts/theme';

function GrandParent() {
  const { theme } = useTheme();

  const {
    GrandParent: { background, label },
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
        Grand Parent
      </strong>
      <Parent />
    </div>
  );
}

export default GrandParent;
