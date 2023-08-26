function DOMRender({root, app}){
  
    this.render = (fn) => {
        window.onload = function (){
            document.getElementById(root).insertAdjacentHTML('beforeend', app())

            fn()
        }
    }
}

export  default  DOMRender