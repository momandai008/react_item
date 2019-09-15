import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import screenfull from 'screenfull';
import { withTranslation, getI18n } from 'react-i18next';

import './index.less';

@withTranslation()
class HeaderMain extends Component {
  state = {
    isScreenFull: false,
    isEnglish: getI18n().language === 'en'
  };

  screenFull = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };

  change = () => {
    this.setState({
      isScreenFull: !this.state.isScreenFull
    })
  };

  changeLanguage = () => {
    const isEnglish = !this.state.isEnglish;

    this.props.i18n.changeLanguage(isEnglish ? 'en' : 'zh-CN');

    this.setState({
      isEnglish
    })
  };

  componentDidMount() {
    screenfull.on('change', this.change);
  }

  componentWillUnmount() {
    screenfull.off('change', this.change);
  }

  render() {
    const { isScreenFull, isEnglish } = this.state;

    return <div className="header-main">
      <div className="header-main-top">
        <Button size="small" onClick={this.screenFull}><Icon type={isScreenFull ? 'fullscreen-exit' : 'fullscreen'} /></Button>
        <Button size="small" className="header-main-btn" onClick={this.changeLanguage}>{isEnglish ? '中文' : 'English'}</Button>
        <span>欢迎, xxxx</span>
        <Button type="link">退出</Button>
      </div>
      <div className="header-main-bottom">
        <h3>首页</h3>
        <span>2019-09-12 15:31:16</span>
      </div>
    </div>;
  }
}

export default HeaderMain;