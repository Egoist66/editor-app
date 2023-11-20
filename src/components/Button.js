const Button = ({_disabled = false, parent = 'span', name, id, className = 'success', type = "submit"}) => {

    return (

        `
        
           <${parent} ${_disabled ? 'disabled' : ''}  target="_blank" id=${id}>
                <button type="${type}"  ${_disabled ? 'disabled' : ''}  class="btn btn-${className}">${name}</button>
           </${parent}>
        
        `
    )
}

export default  Button