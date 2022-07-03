const url_web = 'https://web.whatsapp.com/send?phone="'
const url_pc = 'https://api.whatsapp.com/send?phone="'
var contatos = []
var salva = true

function carregaJson() {
    var url = "ddi.json";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    let resposta = xhttp.responseText
    var dados = JSON.parse(resposta)

    return dados
}

function geraCombobox() {
    dados  = carregaJson()
    const select = document.querySelector('#ddi')

    for (let index = 0; index <= 235; index++) {
        var i = index.toString()
        var text = dados[i].pais + ': +' + dados[i].ddi
        if (dados[i].ddi == '55') {
            select.options[select.options.length] = new Option(text, dados[i].ddi, true, true)
        } else {
            select.options[select.options.length] = new Option(text, dados[i].ddi)
        }
    }

}

function confereConfig() {
    var mem = localStorage.getItem('config')
    let text = document.getElementById('en-save')
    let history = document.getElementById('history')
    let info = document.getElementById('menu-info')
    if (mem == null || mem == '' || mem == false) {
        salva = true
        text.innerHTML = 'Desabilitar Histórico'
        localStorage.setItem('config', 'enable')
        history.style.cssText = 'display: flex;'
        info.classList.remove('info-2')
    } else {
        if (mem == 'disable') {
            salva = false
            text.innerHTML = 'Habilitar Histórico'
            history.style.cssText = 'display: none;'
            info.classList.add('info-2')
            document.getElementById('body').classList.toggle('trava')
        } else if (mem == 'enable') {
            salva = true
            text.innerHTML = 'Desabilitar Histórico'
            history.style.cssText = 'display: flex;'
            info.classList.remove('info-2')
        }
        return true
    }    
}

function habilitaSalvamento() {
    let text = document.getElementById('en-save')
    let history = document.getElementById('history')
    let info = document.getElementById('menu-info')
    if (confereConfig()) {
        if (salva) {
            salva = false
            text.innerHTML = 'Habilitar Histórico'
            localStorage.setItem('config', 'disable')
            history.style.cssText = 'display: none;'
            info.classList.add('info-2')
            document.getElementById('body').classList.toggle('trava')
        } else {
            salva = true
            text.innerHTML = 'Desabilitar Histórico'
            localStorage.setItem('config', 'enable')
            history.style.cssText = 'display: flex;'
            info.classList.remove('info-2')
        }
    }
    showInfo()
}

function showInfo() {
    let info = document.getElementById('menu-info')
    info.classList.toggle('show-info')
}

function showConfig() {
    let menu  = document.getElementById('menu')
    let btnConfig = document.getElementById('icon-config')
    let checkbox  = document.getElementById('confmenu')
    btnConfig.classList.toggle('btn-config-animate')
    if (!checkbox.checked) {
        menu.style.cssText = 'display: flex;'
    } else {
        menu.style.cssText = 'display: none;'
    }
}

function showModal() {
    let modal = document.getElementById('modal')
    modal.style.cssText = 'transform: translateY(0px);'
    if (conferePlataforma()) {
        window.scroll({top: 500, left: 0, behavior: 'smooth' })
        document.getElementById('body').classList.toggle('trava')
    }
}
function hideModal() {
    let modal = document.getElementById('modal')
    modal.style.cssText = 'trasnform: traslateY(var(--position-modal));'
    document.getElementById('body').classList.toggle('trava')
}

function conferePlataforma() {
    var check = false; //wrapper no check
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function confereRadio(radio) {
    for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var wpp = radio[i].value;
		}
	}
    return wpp
}

function confereNumero(ddi, ddd, tel) {
    var numero = ddi +  ddd + tel
    var numeros = []
    contatos.forEach(function(contato, index) {
        contato = JSON.parse(contato)
        numeros[index] = contato.ddi + contato.ddd + contato.tel
    })
    var existe = numeros.indexOf(numero)
    return existe
}

function confereNome(nome) {
    var nomes = []
    contatos.forEach(function(contato, index) {
        contato = JSON.parse(contato)
        nomes[index] = contato.nome.toLowerCase()
    })
    var existe = nomes.indexOf(nome.toLowerCase())
    return existe
}

function buscaContato() {
    let busca = document.getElementById('busca')
    let result = document.getElementById('result')
    var index = confereNome(busca.value)
    if (index == -1 && busca.value != null && busca.value != '') {
        busca.style.cssText = 'animation: error .3s 2 linear none;'
        setTimeout(() => {
            busca.style.cssText = ''
        },600)
    } else if (busca.value == '' || busca.value == null) {
        result.innerHTML = '';
    } else {
        let contact = document.getElementById('contato-' + index)
        var contactSelected = contact.innerHTML
        result.innerHTML = contactSelected
    }
}

function inputbusca(event) {
	if (event.key === 'Enter') {
	    buscaContato()
	} else if (event.key === 'Backspace') {
        buscaContato()
    }
}

function editaContato(index) {
    let ddi = document.getElementById('ddi')
    let ddd = document.getElementById('ddd')
    let tel = document.getElementById('tel')
    let nome = document.getElementById('nome')
    var contato = JSON.parse(contatos[index])
    nome.value = contato.nome
    ddi.value = contato.ddi
    ddd.value = contato.ddd
    tel.value = contato.tel
}

function limpaContatos() {
	localStorage.clear()
	document.location.reload(true)
}

function removeContato(index, anima) {
    let contact = document.getElementById('contato-' + index) 
    contatos.splice(index, 1)
    localStorage.setItem('contacts', JSON.stringify(contatos))
    if (anima) {
        contact.style.cssText = 'animation: delete 1s ease-in forwards;'
        setTimeout(() => {  
            document.location.reload(true)
        }, 1000)
    }
}

function gravaContato(nome, ddi, ddd, tel) {
    var contato = {nome: nome, ddi: ddi, ddd: ddd, tel: tel}
    contatos.push(JSON.stringify(contato))
    localStorage.setItem('contacts', JSON.stringify(contatos))
}

function geraContatos() {
    let contacts = document.getElementById('contacts')
    
    contatos = localStorage.getItem('contacts')
    contatos = JSON.parse(contatos)
    if (contatos == null) {
        contatos = []
        contacts.innerHTML = '<h2>Ainda não há registros de contatos salvos!</h2>' +
        '<img src="img/empty.png" class="img-empty">'
        contacts.style.cssText = 'justify-content: center;'
    } else {
        if (contatos.length > 0) {
            contatos.reverse().forEach(function(contato, index) {
                var i = index.toString()
                contato = JSON.parse(contato)
                contacts.innerHTML += '<div id="contato-' + i +  '" class="div-contact">' +
                '<div class="text-contact" onclick="editaContato('+ i +')">' +
                '<h3>' + contato.nome + '</h3>' +
                '<p>+' + contato.ddi + ' (' + contato.ddd + ') ' + contato.tel + '</p>' +
                '</div><img src="img/x.svg" class="icon-contact" onclick="removeContato('+ i +', true)"></div>'
            })
        } else {
            contacts.innerHTML = '<h2>Ainda não há registros de contatos salvos!</h2>' +
            '<img src="img/empty.png" class="img-empty">'
            contacts.style.cssText = 'justify-content: center;'
        }
    }
}

function enviaMensagem() {
    let ddi = document.getElementById('ddi')
    let ddd = document.getElementById('ddd')
    let tel = document.getElementById('tel')
    let nome = document.getElementById('nome')
    let plataforma = document.getElementsByName('whatsapp')

    if (confereRadio(plataforma) == 'web') {
        var url = url_web
    } else {
        var url = url_pc
    }

    var numero = ddi.value + ddd.value + tel.value
    url += numero + '"'

    if (salva) {
        var index = confereNumero(ddi.value, ddd.value, tel.value)
        if (index == -1) {
            gravaContato(nome.value, ddi.value, ddd.value, tel.value)
        } else {
            removeContato(index, false)
            gravaContato(nome.value, ddi.value, ddd.value, tel.value)
        }
    }

    window.open(url, '_blank')

}

function geraPagina() {
    geraCombobox()

    confereConfig()

    if (conferePlataforma()) {
        document.getElementById('PCWhatsapp').checked = true
    } else {
        document.getElementById('WebWhatsapp').checked = true
    }

    geraContatos()
}

function download(filename, textInput) {
	var element = document.createElement('a');
	element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(textInput));
	element.setAttribute('download', filename);
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function exportarContatos() {
	var data = new Date();
	var hoje = String(data.getDate()).padStart(2, '0')
	hoje += String(data.getMonth() + 1).padStart(2, '0')
	hoje += data.getFullYear()

	var filename = 'contatos' + hoje + '.jsl'

	var text = JSON.stringify(contatos)

	download(filename, text)
}

async function loadFile(file) {
	let text = await file.text()
	let output = JSON.parse(text)
	output.forEach(function(contato, index) {
        contato = JSON.parse(contato)
        var i = confereNumero(contato.ddi, contato.ddd, contato.tel)
        if (i == -1) {
            gravaContato(contato.nome, contato.ddi, contato.ddd, contato.tel)
        } else {
            removeContato(i, false)
            gravaContato(contato.nome, contato.ddi, contato.ddd, contato.tel)
        }  
    })

	document.location.reload(true)
}