import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.scss'

import Textarea from "./Textarea.js";
import Button from "./Button.js";

const App = () => {

    return (

        `
            <div class='app-wrapper container'>
                <h2>Enter HTML code here</h2>

                <h4>Choose download file type</h4>
                <select name="file-type" id="file-type">
                    <option disabled selected>Select type</option>
                    <option value="html">HTML</option>
                    <option value="txt">TXT</option>
                
                </select>

                <h4>Choose web-view file type</h4>
                <select name="file-format" id="file-format">
                    <option disabled selected>Select format</option>
                    <option value="text/html">As HTML</option>
                    <option value="text/plain">As plain text</option>
                
                </select>
                
                ${Textarea(() => {
                    return (
                        ` <div class="btn-block">
                            ${Button({
                                _disabled: true,
                                parent: 'a',
                                name: 'See changes', 
                                id: 'view-changes'
                            })}
                            
                            ${Button({
                                _disabled: true,
                                parent: 'a', 
                                name: 'Download', 
                                id: 'download-file'
                            })}
                            
                            ${Button({
                                name: 'Upload', 
                                id: 'upload-file'
                            })}
                             ${Button({
                                name: 'Clear textarea',
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