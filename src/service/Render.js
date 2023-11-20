function DOMRender({root, app}){
  
    this.render = (...initFns) => {
        window.onload = function (){
            document.getElementById(root).insertAdjacentHTML('beforeend', app())

            initFns.forEach(fn => fn())
        }
    }
}

export  default  DOMRender