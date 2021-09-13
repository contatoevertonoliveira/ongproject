import React from 'react';

import './styles.scss';

function Button(props){
  return(
    <React.Fragment>
        <button className="linkButton" type="button" {...props}>
          <span className="icons">{props.icon}</span>
          {props.text}
        </button>
    </React.Fragment>
  )
}

export default Button;