﻿import React from 'react';
import { FileUploader } from 'devextreme-react';

class App extends React.Component {
  render() {
    return (
      <div className="main-block">
        <div className="file-uploader-block">
          <FileUploader multiple={true} uploadMode="useButtons" uploadUrl="https://js.devexpress.com/Content/Services/upload.aspx" allowedFileExtensions={['.jpg', '.jpeg', '.gif', '.png']} />
          <span className="note">{'Allowed file extensions: '}
            <span>.jpg, .jpeg, .gif, .png</span>
            {'.'}
          </span>
        </div>
        <div className="file-uploader-block" style={{ float: 'right' }}>
          <FileUploader multiple={true} uploadMode="useButtons" uploadUrl="https://js.devexpress.com/Content/Services/upload.aspx" maxFileSize={4000000} />
          <span className="note">{'Maximum file size: '}
            <span>4 MB</span>
            {'.'}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
