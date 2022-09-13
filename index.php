<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>AddWhats | Conversar com:</title>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/apple-touch-icon-96x96.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png">
    <meta name="msapplication-TileColor" content="#00A783">
    <meta name="theme-color" content="#008069">
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <script src='main.js'></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8528902803022160"
        crossorigin="anonymous"></script>
</head>

<body onload="geraPagina()" id="body">
    <div class="faixa"></div>
    <div class="menu-info" id="menu-info">
        <p id="en-save" onclick="habilitaSalvamento()">Desabilitar Histórico</p>
        <p>Ajuda</p>
        <p>Sobre</p>
    </div>
    <div class="container">
        <div class="send">
            <div class="top">
                <h2>Conversar com</h2>
                <img src="img/info.svg" id="icon-info" onclick="showInfo()">
            </div>
            <div class="content">
                <form onsubmit="enviaMensagem()">
                    <img src="img/icone.png" class="icon">
                    <input type="text" placeholder="Nome do contato" required id="nome">
                    <div class="div-numero">
                        <select name="ddi" id="ddi" required></select>
                        <input type="number" required value="37" id="ddd">
                        <input type="number" required value="9" id="tel">
                    </div>
                    <div class="div-radio">
                        <input type="radio" name="whatsapp" id="WebWhatsapp" value="web">
                        <label for="WebWhatsapp">
                            <p>Whatsapp Web</p>
                            <div class="btn-radio"></div>
                        </label>
                        <input type="radio" name="whatsapp" id="PCWhatsapp" value="pc">
                        <label for="PCWhatsapp">
                            <p>Whatsapp App</p>
                            <div class="btn-radio"></div>
                        </label>
                    </div>
                    <input type="submit" value="INICIAR CONVERSA" id="btn-enviar">
                </form>
            </div>
        </div>
        <div class="history" id="history">
            <div class="top">
                <h2>Histórico</h2>
                <label for="confmenu"><img src="img/config.svg" id="icon-config" onclick="showConfig()"></label>
            </div>
            <div class="menu" id="menu">
                <div class="div-btn">
                    <button class="btn-red" onclick="showModal()"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
                        </svg>
                        <p>LIMPAR</p>
                    </button>
                    <button class="btn-green" onclick="exportarContatos()"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M192 312C192 298.8 202.8 288 216 288H384V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-128H216C202.8 336 192 325.3 192 312zM256 0v128h128L256 0zM568.1 295l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 288H384v48h110.1l-39.03 39.03C450.3 379.7 448 385.8 448 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C578.3 319.6 578.3 304.4 568.1 295z" />
                        </svg>
                        <p>EXPORTAR</p>
                    </button>
                    <label for="importar" class="btn-green"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M384 0v128h128L384 0zM352 128L352 0H176C149.5 0 128 21.49 128 48V288h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128C128 490.5 149.5 512 176 512h288c26.51 0 48-21.49 48-48V160h-127.1C366.3 160 352 145.7 352 128zM24 288C10.75 288 0 298.7 0 312c0 13.25 10.75 24 24 24H128V288H24z" />
                        </svg>
                        <p>IMPORTAR</p>
                    </label>
                </div>
                <div class="div-src">
                    <button id="btn-busca" onclick="buscaContato()"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                        </svg></button>
                    <input type="search" class="busca" id="busca" onkeydown="inputbusca(event)"
                        placeholder="Buscar contato...">
                </div>
                <div class="result" id="result"></div>
            </div>
            <div class="contacts" id="contacts"></div>
        </div>
    </div>
    <div class="modal-clear" id="modal">
        <div class="top-modal">
            <h2>Limpar Contatos:</h2>
            <img src="img/x.svg" onclick="hideModal()">
        </div>
        <p>Tem certeza que deseja limpar os contatos?</p>
        <hr>
        <button class="btn-green" onclick="limpaContatos()">CONFIRMAR</button>
    </div>
</body>

</html>



<input type="checkbox" id="confmenu" name="confmenu" class="invisivel">
<input type="file" id="importar" name="importar" class="invisivel" onchange="loadFile(this.files[0])" accept=".jsl">