const Input = ({className = ''}) => {
    return (
        `
            
           <input 
               type="url" 
               class="${className}"
               id="lib-scripts" 
               placeholder="Enter valid script URL..." 
           />
        
        
        
        
        `
    )
}

export default Input