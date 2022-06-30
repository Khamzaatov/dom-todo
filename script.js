const div = document.querySelector('.container')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const list = document.querySelector('.list')



btn.addEventListener('click', () => {
    const p = document.createElement('p')
    const btnDelete = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    p.textContent = input.value
    list.append(p)
    input.value = ''
    btnDelete.textContent = 'Удалить'
    btnDelete.style.marginLeft = '40px'
    checkbox.style.marginLeft = '40px'
    p.append(checkbox)
    p.append(btnDelete)
    
    
    btnDelete.addEventListener('click', () => {
        todoDelete()
    })
    const todoDelete = () => {
        list.removeChild(p)
    }
    
})

const checkbox = () => {
    
}


