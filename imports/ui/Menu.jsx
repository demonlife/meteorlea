
import React from 'react';


export const Menu = ({activeItem}) => {
  const headerStyle = {
    backgroundColor: '#00FFA0'
  }
  return (
    <div style={headerStyle}>
      <div className="ui container">
        <div className="ui segment">
          <div className="ui secondary pointing menu">
            <a className={activeItem === 'home' ? 'active item' : 'item'} href="/">
              <i className="ui large home icon"></i>主页面
            </a>
            <a className={activeItem === 'about' ? 'active item' : 'item'} href="/about">
              <i className="large ui mail icon"></i>关于
            </a>

            <div className="menu">
              <a className={activeItem === 'bug' ? 'active item' : 'item'} href="/bug">
                <i className="ui large bug icon"/>报告问题
              </a>
            </div>

            <div className="right menu">
              <a className={activeItem === 'setting' ? 'active item' : 'item'} href="/setting">
                <i className="ui large setting icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
