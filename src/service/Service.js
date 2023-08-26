import useState from "./State.js";

function delay(fn, ms){
    const timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
    }, ms)
}

const Service = () => {


    const {state, setState} = useState()

    const view = document.querySelector('#view-changes');
    const download = document.querySelector('#download-file');
    const viewBtn = document.querySelector('#view-changes > .btn');
    const downloadBtn = document.querySelector('#download-file > .btn');
    const textarea = document.querySelector('textarea');

    const file = document.querySelector('#file');
    const upload = document.querySelector('#upload-file');
    const fileDetails = document.querySelector('#file-details');
    const clear = document.querySelector('#clear');
    const file_type = document.querySelector('#file-type');
    const file_format = document.querySelector('#file-format');
    const template_btn = document.querySelector('#template button')



    template_btn.addEventListener('click', () => {
        setState('data', '<style></style>\n\n<script></script>')
        textarea.dataset.value = state.data
        textarea.value = textarea.dataset.value
    })



    file_type.addEventListener('change', (e) => {
        setState('file-type', e.target.value)
        textarea.dispatchEvent(new Event('change'))


       
    });

    file_format.addEventListener('change', (e) => {
        setState('file-format', e.target.value)
        textarea.dispatchEvent(new Event('change'))


       
    })



    textarea.addEventListener('change', function(e){
        const btnControls = [viewBtn, view, download, downloadBtn]


        setState('data', e.target.value)
        this.dataset.value = state.data

        btnControls.forEach(btn => {
            btn.disabled = this.dataset.value.length <= 0
        })


        console.log(state)

        const blob = new Blob([this.dataset.value], {type: `${state['file-format']}`})
        view.href = URL.createObjectURL(blob)
        download.download = `${Date.now()}.${state['file-type'] ?? 'txt'}`
        download.href = URL.createObjectURL(blob)


        if(textarea.value === ''){
            state.data = ''
            fileDetails.textContent = ''
            download.removeAttribute('href')
            download.removeAttribute('download')
            view.removeAttribute('href')
            URL.revokeObjectURL(download.href)
            URL.revokeObjectURL(view.href)
        }

    })

    upload.addEventListener('click', (e) => {
        file.click()

        file.onchange = function(e){
            const file = e.target.files[0]
            console.log(fileDetails)

            if(file){
                let fileReader
                fileDetails.textContent = `
                   name: ${file.name};
                   size: ${file.size / 1000}kb;
                   type: ${file.type};
            
                `
                const changeEvent = new Event('change')
                
                fileReader = new FileReader()
                fileReader.onload = (e) => {
                    const result = e.target.result
                    if(result){
                        setState('file', result)
                        textarea.value = state.file
                        textarea.dataset.value = state.file
                        textarea.focus()

                        delay(() => {
                            textarea.blur()
                            textarea.dispatchEvent(changeEvent)
                        }, 2000)
                    }
                }

              fileReader.readAsText(file)

            }


        }
    })



    clear.addEventListener('click', () => {
        if(textarea.value === ''){
            alert('Nothing to clean')
        }
        else {
            state.data = ''
            textarea.value = ''
            textarea.dispatchEvent(new Event('change'))
        }

    })
}

export default  Service