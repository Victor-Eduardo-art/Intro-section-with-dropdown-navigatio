function ativarDesativarSubmenu () {

    for (let i = 0; i < document.querySelectorAll('.ctr-submenu .botao-submenu').length; i++) {
        
        let botao = document.querySelectorAll('.ctr-submenu .botao-submenu')[i]
        
        botao.addEventListener('click', () => {
            const submenu = document.querySelectorAll('.ctr-submenu .submenu')[i]
            const icone = document.querySelectorAll('.ctr-submenu .botao-submenu img')[i] // vai receber o ícone que está no botão 
            
            submenu.classList.toggle('none')

            if (submenu.classList.contains('none') === true) {
                icone.src = 'images/icon-arrow-down.svg'
            } else if (submenu.classList.contains('none') === false) {
                icone.src = 'images/icon-arrow-up.svg'
            }
        })
    }
}

function gerenciarFuncoes () {
    ativarDesativarSubmenu()
}

window.addEventListener('load', gerenciarFuncoes)