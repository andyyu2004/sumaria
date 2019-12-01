import React from 'react'
import { TNotification } from '../types/notifications';
import { Button } from 'react-bootstrap';
import deleteicon from '../assets/images/del_icon.svg';
import { useDispatch } from 'react-redux';
import { dismissNotification } from '../actions/actionCreators';
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Header.css'

type PropType = {
  notification: TNotification;
};

export const Notification: React.FC<PropType> = ({ notification }) => {
  const { cb, message, id } = notification;
  const dispatch = useDispatch();

  return (
    <div>
      <ButtonGroup className='notification-button-group'>
        <Button className='notification-button' variant='success' onClick={() => cb && cb()}>{message}</Button>
        <Button variant='success' onClick={() => dispatch(dismissNotification(id))}><img src={deleteicon} alt="del" className="small-generic-icon" /></Button>
      </ButtonGroup>
    </div>
  );
};

export default Notification;
