import Button from "./Button.js";

const Textarea = (fn) => {
    return (

        `
        <div style="padding-bottom: 30px">
            ${Button({
                name: 'Create template',
                parent: 'div',
                id: 'template'
            })}   
        </div>
        
           <textarea data-value="" class="form-control" id="area"></textarea>
           
           ${fn()}
        
        
        `
    )
}

export default Textarea