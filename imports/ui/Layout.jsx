import React from 'react'

export const Layout = ({menu, content}) =>(
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 50}}>
      <h1>出行比价 <span style={{color: "yellow"}}><small>(北京)</small></span></h1>
      <hr />
      {content}
    </div>
  </div>
);

// 设置布局
export const SettingLayout = ({menu, content}) => (
  <div>
    <div>{menu}</div>
    <div className="ui container" style={{paddingTop: 50}}>
      <h1>设置</h1>
      <hr />
      {content}
    </div>
  </div>
);
