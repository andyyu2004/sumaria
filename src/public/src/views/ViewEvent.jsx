import React from 'react'
import { withProtection } from '../components/hoc';
import { useUser } from '../hooks/useUser';
import { uploadFileForEvent } from '../api/files';
import { toast } from 'react-toastify';

/** Component for viewing a specific event in detail */
const ViewEvent = props => {
  const { event } = props.location.state;
  const { _id, creatorid, date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;

  const user = useUser();

  const uploadFile = async e => {
    const { files } = e.target;
    console.log(Array.from(files));
    (await uploadFileForEvent(_id, Array.from(files)))
      .map(x => {
        console.log('file', x);
        toast.success("succesfully uploaded files")
      })
      .mapLeft(toast.error);
  };

  return (
    <div>
      <h4>{name}</h4>
      {/* Just temporary debugging displays */}
      <h5>organizer: {creatorid}</h5>
      <h5>me: {user._id}</h5>
      <p>etc....</p>

      {/* Show button to add event file if the user is the creator of the event */}
      {/* /api/event/event_id/file/file_id */}
      {creatorid === user._id && <input type="file" onChange={uploadFile} multiple/>}
    </div>
  );
};

export default withProtection(ViewEvent);
