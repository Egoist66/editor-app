export function delay(fn, ms){
    const timer = setTimeout(() => {
        fn()
        clearTimeout(timer)
    }, ms)
}