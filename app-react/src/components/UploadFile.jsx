import React from "react";
import { useDispatch} from 'react-redux'
import { uploadFileAction } from "../redux/actions/category";


function UploadFile() {
    const dispatch = useDispatch()
    const handleFileChange = (event) => {
   
         const formData = new FormData();
         formData.append("file", event.target.files[0]);
          dispatch(uploadFileAction(formData))
        };

      return (
        <div>
          <input className="form-control" onChange={handleFileChange} type="file" />    
        </div>
      );
    }
export default UploadFile;