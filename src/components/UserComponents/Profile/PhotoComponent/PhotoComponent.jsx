import React from "react";

import UploadUtil from "../../../../utils/FormUtils/UploadUtil/UploadUtil";

const PhotoComponent = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <UploadUtil txt="Upload Image" />
    </div>
  );
};

export default PhotoComponent;
