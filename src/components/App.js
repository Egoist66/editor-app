import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.scss'

import Textarea from "./Textarea.js";
import Button from "./Button.js";
import Input from "./Input.js";

const App = () => {

    return (

        `
            <div class='app-wrapper container'>
                <h2>Enter HTML code here</h2>

           
               <div class="controls">
                  <div>
                        <h6>Choose download file type</h6>
                         <select class="form-select" name="file-type" id="file-type">
                            <option disabled selected>Select type</option>
                            <option value="html">HTML</option>
                            <option value="txt">TXT</option>
                        
                        </select>
    
                        <h6>Choose web-view file type</h6>
                        <select class="form-select" name="file-format" id="file-format">
                            <option disabled selected>Select format</option>
                            <option value="text/html">As HTML</option>
                            <option value="text/plain">As plain text</option>
                        
                        </select>
                    
                  </div>
                  
                  <div>
                  
                      <form >
                           ${Input({
                              className: "form-control"
                           })}
                           
                           <input style="display: inline-block; margin-top: 20px" class="btn btn-primary" type="reset" value="Clear" />
                           
                             ${Button({
                                    name: 'Save',
                                    className: "primary",
                                    id: 'save-script'
                             })}
                      
                       </form>
                      
                  </div>
               </div>
                
                ${Textarea(() => {
                    return (
                        ` <div class="btn-block">
                            ${Button({
                                _disabled: true,
                                parent: 'a',
                                className: "primary",
                                name: 'See changes', 
                                id: 'view-changes'
                            })}
                            
                            ${Button({
                                _disabled: true,
                                parent: 'a',
                                className: "primary",
                                name: 'Download', 
                                id: 'download-file'
                            })}
                            
                            ${Button({
                                name: 'Upload',
                                className: "primary",
                                id: 'upload-file'
                            })}
                             ${Button({
                                name: 'Clear textarea',
                                className: "primary",
                                id: 'clear'
                            })}
                            <input accept=".html, .css, .js, .json" type="file" name="file" id="file">  
                            <pre id="file-details"></pre>


                          </div>
                          
                         
                        `
                    )
                })}
                
                
                
                
            </div>
            
            
        `
    )
}

export default  App