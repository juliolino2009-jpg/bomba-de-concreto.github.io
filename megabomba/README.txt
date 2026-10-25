MEGA BOMBAS — SITE INICIAL
==========================

ARQUIVOS
- index.html: estrutura e conteúdo das páginas/seções.
- style.css: cores, tipografia, layout e adaptação para celular.
- script.js: menu móvel, telefone com formatação automática e envio do orçamento pelo WhatsApp.

COMO ABRIR NO COMPUTADOR
1. Extraia a pasta do ZIP.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo index.html no navegador; ou instale a extensão Live Server no VS Code e clique em “Go Live”.

CONFIGURAÇÃO DOS CONTATOS
No início de script.js, procure o objeto COMPANY:
  name: "Mega Bombas",
  whatsapp: "13 97417-7919",
  phone: "13 97417-7919"
Edite os números caso seja necessário. O WhatsApp deve conter o DDD e o número; o código normaliza os dígitos automaticamente.

FUNCIONALIDADES EXISTENTES
- Layout responsivo para celular e computador.
- Menu adaptado para telas pequenas.
- Botões de WhatsApp e ligação.
- Formulário que monta uma mensagem para enviar pelo WhatsApp.
- Máscara de telefone brasileiro enquanto a pessoa digita.
- Seleção das cidades atendidas: São Vicente, Guarujá, Praia Grande, Santos, Peruíbe, Itanhaém, Cubatão e Mongaguá.

IMPORTANTE
O formulário não envia dados para um servidor: ele abre o WhatsApp com uma mensagem preenchida, que o cliente ainda precisa enviar. O projeto é a primeira versão do site, pronta para testes e melhorias antes da publicação.
