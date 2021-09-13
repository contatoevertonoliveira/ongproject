import React from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faChalkboard, faStream, faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

function Dashboard(){

  const faqrcode = <FontAwesomeIcon icon={faQrcode} />
  const fastream = <FontAwesomeIcon icon={faStream} />
  const facalendar = <FontAwesomeIcon icon={faCalendar} />
  const faplus = <FontAwesomeIcon icon={faPlus} />
  const fachalkboard = <FontAwesomeIcon icon={faChalkboard} />

  return(
    <React.Fragment>
      <div className="sidebar">
        <div className="header">ongR.B.</div>

        <Button icon={faqrcode} text="Dashboard" />
        <Button icon={faplus} text="Cadastro"/>
        <Button icon={fastream} text="Cursos"/>
        <Button icon={fachalkboard} text="Professores"/>
        <Button icon={facalendar} text="Lembretes"/>

      </div>
    </React.Fragment>    
  );
}

export default Dashboard;