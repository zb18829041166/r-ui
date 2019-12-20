import * as ReactDOM from 'react-dom';
import * as React from 'react'
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
};

ReactDOM.render(<div>
    <Icon name="qq" onClick={fn}/>
  </div>, document.getElementById("root"));

