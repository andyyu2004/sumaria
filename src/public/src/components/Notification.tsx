import React from 'react'
import { TNotification } from '../types/notifications';
import { Button } from 'react-bootstrap';
import deleteicon from '../assets/images/del_icon.svg';
import { useDispatch } from 'react-redux';
import { dismissNotification } from '../actions/actionCreators';

type PropType = {
  notification: TNotification;
};

export const Notification: React.FC<PropType> = ({ notification }) => {
  const { cb, message, id } = notification;
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => cb && cb()}>{message}</Button>
      <Button onClick={() => dispatch(dismissNotification(id))}><img src={deleteicon} alt="del" className="small-generic-icon" /></Button>
    </div>
  );
};

export default Notification;
