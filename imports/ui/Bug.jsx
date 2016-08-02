import React from 'react';
import ReactDom from 'react-dom';

/*
export default Bug = ({firstname, lastname})=> <div className="example">
    <h4 className="ui header">bug内容</h4><a className="anchor" id="form"></a>
    <p>小小程序问题多, 只能等我慢慢摸</p>
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>

      <button className="ui button" type="submit">提交</button>
    </form>

    <div className="ui segment">
          <div className="field">
            <div className="ui toggle checkbox">
              <input type="checkbox" name="gift" tabindex="0" class="hidden" />
              <label>点赞</label>
            </div>
          </div>
    </div>
  </div>
*/

export default class Bug extends React.Component {
  btnClicked() {
    const firstname = this.refs.firstname.value
    FlowRouter.go(`/bug/first-name=${firstname}`)
  }
render(){
  return(<div className="example">
    <h4 className="ui header">bug内容</h4><a className="anchor" id="form"></a>
    <p>小小程序问题多, 只能等我慢慢摸</p>
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>

      <button className="ui button" type="submit">提交</button>
    </form>

    <div className="ui segment">
          <div className="field">
            <div className="ui toggle checkbox">
              <input type="checkbox" name="gift" tabindex="0" className="hidden" />
              <label>点赞</label>
            </div>
          </div>
    </div>
  </div>)}
}
