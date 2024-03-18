function consultarCNPJ() {
  var cnpj = document.getElementById("pesquisaCNPJ").value;
  fetch("https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/" + cnpj).then((response) => {
     if(response.ok) {
         return response.json();
     }
  }).then((dados) => {
     console.log(dados)
     document.getElementById("dados").innerHTML = `
         Nome: ${dados.nome} <br>
         Complemento: ${dados.complemento}<br>
         Nome pessoal: ${dados.fantasia} <br>
         Email: ${dados.email}<br>
         Logradouro: ${dados.logradouro}<br>
         Municipio: ${dados.municipio}<br>
         UF: ${dados.uf}<br>
         Telefone: ${dados.telefone}<br>
         Tipo: ${dados.tipo}<br>
         Status: ${dados.status}<br>
         Número: ${dados.numero}<br>
         Nome: ${dados.nome}<br>
         Natureza Juridica: ${dados.natureza_juridica}<br>
         Porte: ${dados.porte}<br>
         Situação: ${dados.situacao}<br>
         Ultima atualização: ${dados.ultima_atualizacao}<br>
     `
  })
 }


