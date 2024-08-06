// --------------------------------------------------------------------------
// ✅ TermAndConditions 컴포넌트
// --------------------------------------------------------------------------
// - [ ] 사용자가 이용 약관에 동의하면 확인 버튼 활성화
// - [ ] 사용자가 이용 약관에 동의하지 않으면 확인 버튼 비활성화
// --------------------------------------------------------------------------
import { Component } from 'react';
import './TermAndCondition.class.css';

class TermAndConditions extends Component {
  constructor(props) {
    super(props); // 반드시 해야함!

    // 컴포넌트의 기억(메모리)
    this.state = {
      argeement: false,
    };
  }
  render() {
    // JSX

    const { argeement } = this.state;
    console.log(argeement);

    // 컴포넌트 속성 또는 상태로부터 파생된 상태(state나 props로 파생된 상태)
    const isDisabled = argeement ? false : true;

    return (
      <form className="TermAndConditions">
        <h2>이용 약관</h2>
        <p>
          OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을
          숙지하는 것이 중요합니다. 본 약관 외에도 OOO은 개인정보처리방침을
          게시합니다.
        </p>
        <div>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            // this: <TermAndConditions/>
            onChange={this.handleCheck}
            checked={argeement}
          />
          <label htmlFor="terms">이용 약관에 동의합니다.</label>
        </div>
        <button type="submit" disabled={isDisabled}>
          확인
        </button>
      </form>
    );
  }

  handleCheck = (e) => {
    const { checked: nextArgreement } = e.target;

    this.setState({ argeement: nextArgreement });
  };
}

export default TermAndConditions;
