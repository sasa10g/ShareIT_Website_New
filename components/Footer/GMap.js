import React from 'react';
import PropTypes from 'prop-types';

const GMap = ({ width, height }) => (
  <div className="map">
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="maps"
          width={width}
          height={height}
          id="gmap_canvas"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs6nCzFwQW0cRprHhV2U8sjY&key=AIzaSyAAmABSKLDgAGRfswraDEcmL6S-ARpZaok"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  </div>
);

GMap.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default GMap;
