import DOMRender from "./src/service/Render.js";
import App from "./src/components/App.js";
import {EditorService, UploadScriptService} from "./src/service/Service.js";


const root = new DOMRender({
    root: 'app',
    app: App
})

root.render(EditorService, UploadScriptService)