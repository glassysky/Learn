require('normalize.css/normalize.css');
import style from './styles/App.css';

import React from 'react';
import Button from './components/Button/index.js';
let yeomanImage = require('./images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className={style.index}>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className={style.notice}>Please edit <code>src/components/Main.js</code> to get started!</div>
        <Button></Button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
