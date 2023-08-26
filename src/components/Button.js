const Button = ({_disabled = false, parent = 'span', name, id}) => {

    return (

        `
        
           <${parent} ${_disabled ? 'disabled' : ''}  target="_blank" id=${id}>
                <button  ${_disabled ? 'disabled' : ''}  class="btn btn-success">${name}</button>
           </${parent}>
        
        `
    )
}

export default  Button