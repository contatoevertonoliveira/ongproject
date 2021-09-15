import React, { useState } from 'react';
import styled from 'styled-components';

import './styles.scss';

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    border-left: 5px solid #593632;
    color: #b93632;
    opacity: 1;
  `}
`;

function Button(props){

  const types = [props.text]
  const [active, setActive] = useState(types[0]);

  return(
    <React.Fragment>
      {types.map(text => (
        <ButtonToggle
          className='linkButton'
          key={text}
          active={active === text} 
          onClick={()=>setActive(text)}>
          {text}
        </ButtonToggle>
      ))}
        
        {/* <button className="linkButton" type="button" {...props}>
          <span className="icons">{props.icon}</span>
          {props.text}
        </button> */}
    </React.Fragment>
  )
}



export default Button;