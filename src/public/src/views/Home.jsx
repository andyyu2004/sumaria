import React from 'react'
import { Link } from '@reach/router'

const Home = props => {

  return (
    <div>
      <h2 className="m-3 text-center">Home</h2>
      <div class="row mx-3">
        <Link to="browse" className="col-6">
          <div className="py-5 mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4 className="py-5"><i className="fa fa-calendar-alt mr-2"></i>Browse for events</h4>
          </div>
        </Link>
        <Link to="import" className="col-6">
          <div className="py-5 mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4 className="py-5"><i className="fa fa-upload mr-2"></i>Import Excel file</h4>
          </div>
        </Link>
        <Link to="addevent" className="col-6">
          <div className="py-5 mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4 className="py-5"><i className="fa fa-plus mr-2"></i>Add event</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;