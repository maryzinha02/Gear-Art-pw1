document.querySelector('#homepage').addEventListener('click', () => {
    document.querySelector('.abas #homepage').classList.add('ativa');
    document.querySelector('#homepageSec').setAttribute("class" , "");
    

    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');

    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
    
});

document.querySelector('#catalogo').addEventListener('click', () => {
    document.querySelector('.abas #catalogo').classList.add('ativa');
    document.querySelector('#catalogoSec').setAttribute("class" , "");
    

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');

    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
});

document.querySelector('.abas #contate').addEventListener('click', () => {
    document.querySelector('.abas #contate').classList.add('ativa');
    document.querySelector('#contateSec').setAttribute("class" , "");
    

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');

    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
});

document.querySelector('.abas #config').addEventListener('click', () => {
    document.querySelector('.abas #config').classList.add('ativa');
    document.querySelector('#configSec').setAttribute("class" , "");
    

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');

    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');

    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
});

//submenu de entrar e cadastrar

document.querySelector('.abas2 #abaEntrar').addEventListener('click', () => {
    document.querySelector('.abas2 #abaEntrar').classList.add('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "");

    document.querySelector('.abas2 #abaCadastrar').classList.remove('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden");

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
});

document.querySelector('.abas2 #abaCadastrar').addEventListener('click', () => {
    document.querySelector('.abas2 #abaCadastrar').classList.add('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "");

    document.querySelector('.abas2 #abaEntrar').classList.remove('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "hidden");

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
    
});

document.querySelector('#mercha').addEventListener('click', () => {
    document.querySelector('.abas #config').classList.add('ativa');
    document.querySelector('#configSec').setAttribute("class" , "");

    document.querySelector('.abas2 #abaCadastrar').classList.add('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden"); 
    
    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');
    
    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');
    
    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('.abas2 #abaEntrar').classList.remove('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "hidden");

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");

});

//cadastro e login
const message = document.querySelector('#aut-simple');
const message2 = document.querySelector('#aut-simple2');
const mercha = document.querySelector('#mercha');
const btnSuaConta = document.querySelector('#btnSuaConta');

var logado = false;

var logout = false;

if(logout == true){
    logado = false;
}

inicioLogout = false;

var users = [];

var loggedUser = null;

//atributos do carrinho

const listProdutos = document.querySelector('.container .cart-items');
const precoTotal = document.querySelector('.container #precoTotal');

var carrinhoVazio = true;

var total = 0;

var foiRemovido = false;

var carrinhoItens = [];

var emailRepetido = false;

//atributos do favoritos

const itensFavoritos = document.querySelector('.container #itensFavoritos');
const favoritosKey = 'favoritoss';


let favoritados = [];


console.log(users);


document.querySelector("#cadastre").addEventListener("click", (prevent) => {
  prevent.preventDefault();
  var thisEmailcanExist = true;

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  var emailBah = JSON.parse(localStorage.getItem("users"));

  emailBah.forEach((e)=>{
    if(email === e.email){
        thisEmailcanExist = false;
    }
  })
  if(name!=""&&email!=""&&password.value!=""){
    if(thisEmailcanExist === true){
        console.log("pode cadastrar")
        var user = {
            name: name,
            email: email,
            password: password
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        console.log(localStorage.getItem("users"));

        let txt = '';
        txt = `<div>
            <span>Usuário cadastrado com sucesso!</span>
        </div>`;

        message.innerHTML = txt;
    }else {
        let txt = '';
        txt = `<div>
            <span>Este email já está cadastrado!</span>
        </div>`;

        message.innerHTML = txt;
    }
    } else {
        let txt = '';
        txt = `<div>
            <span>Preencha todos os dados!</span>
        </div>`;

        message.innerHTML = txt;
    }
});

document.querySelector("#ent").addEventListener("click", (prevent) => {
  prevent.preventDefault();

  const enEmail = document.querySelector("#enEmail").value;
  const enPassword = document.querySelector("#enPassword").value;

  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  users.forEach((log) => {
    if (enEmail === log.email && enPassword === log.password) {
      loggedUser = log;
      logado = true;

      message2.classList.remove('hidden');

      let txt = '';
      txt = `<div>
        <span>Bem-vindo(a) ${log.name}!</span>
      </div>`;

      message2.innerHTML = txt;

      mercha.innerHTML = txt;
      mercha.classList.add('mercha');

      btnSuaConta.classList.remove('hidden');

      //localStorage
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    }
  });

  if (!loggedUser) {
    logado = false;

    let txt = '';
    txt = `<div>
      <span>Senha ou Email inválidos.</span>
    </div>`;

    message2.innerHTML = txt;
  }
});

//envento pra manter o usuario se recarregar a pagina
function carregarDdados() {
    if (localStorage.getItem("loggedUser")) {

        loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        logado = loggedUser !== null;

        //manter as informações do usuário
        let txt = '';
        txt = `<div>
        <span>Bem-vindo(a) ${loggedUser.name}!</span>
        </div>`;

        message2.innerHTML = txt;

        mercha.innerHTML = txt;
        mercha.classList.add('mercha');
        btnSuaConta.classList.remove('hidden');

        //carrinho do usuario
        const carrinhoKey = 'carrinho';
        let carrinhoItens = localStorage.getItem(carrinhoKey);
        carrinhoItens = carrinhoItens ? JSON.parse(carrinhoItens) : [];

        carrinhoItens.forEach(item => {
            var divCarrinho = document.createElement("div");
            var btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.setAttribute("class", "removeItem");
        
            divCarrinho.innerHTML = `
              <img src="${item.img}" height="130px">
              <h2>${item.nome}</h2>
              <h1>${item.preco}</h1>
            `;
            carrinhoVazio = false;

            listProdutos.insertAdjacentElement("beforeend", divCarrinho);
            divCarrinho.appendChild(btnRemover);

            btnRemover.addEventListener('click', (btn) => {
                btn.target.parentElement.remove();
          
                total -= item.preco;
          
                let pT = '';
                pT = `Preço total: ${total.toFixed(2)}`;
                precoTotal.innerHTML = pT;
     
                carrinhoItens = carrinhoItens.filter((carrinhoItem) => carrinhoItem.nome !== item.nome);
                
                // Atualizar o localStorage
                localStorage.setItem(carrinhoKey, JSON.stringify(carrinhoItens));
            });

            total += item.preco;

            let pT = '';
            pT = `Preço total: ${total.toFixed(2)}`;
            precoTotal.innerHTML = pT;
        
        });

        //coraçãozinho
        const favoritosKey ='favoritoss';
        let favoritados = localStorage.getItem(favoritosKey);
        favoritados = favoritados ? JSON.parse(favoritados) : [];

        favoritados.forEach(item => {
        var divFavoritar = document.createElement("div");
        divFavoritar.classList.add("produtos");
        var btnRemover2 = document.createElement("button");
        btnRemover2.textContent = "Remover";
        btnRemover2.setAttribute("class", "removeItem");

            divFavoritar.innerHTML = `
            <img src="${item.img}" height="200px">
            <h2>${item.nome}</h2>
            <h4>${item.autor}</h4>
            <h1>R$${item.preco}</h1>
            `;

            itensFavoritos.insertAdjacentElement("beforeend", divFavoritar);
            divFavoritar.appendChild(btnRemover2);

            btnRemover2.addEventListener('click', (btn1) => {
                btn1.target.parentElement.remove();
            
                favoritados = favoritados.filter((favorito) => favorito.nome !== item.nome);
            
                    // Atualizar o localStorage com os itens restantes nos favoritos
                localStorage.setItem(favoritosKey, JSON.stringify(favoritados));
            });
        });

    }
}

carregarDdados();
//verificador de senha

function verificaSenha(){
    const textaS = document.querySelector('.conteudos #textaPassword');

    if(password.value.length != 0 ){

        if(password.value.length <=  5 ){
            textaS.textContent ="Senha Fraca";
            textaS.setAttribute("class", "fraca")
        }

        if(password.value.length > 5 && password.value.length <= 8){
            textaS.textContent = "Senha Media";
            textaS.setAttribute("class", "media");
        }

        if(password.value.length >= 10){
            textaS.textContent = "Senha Forte";
            textaS.setAttribute("class", "forte");
        }
    }
}

password.addEventListener('input', verificaSenha);

//catalogo

let pinturas = [
{
    img: "assets/img/ponte.jpeg",
    nome: "A ponte",
    autor: "Claude Monet",
    preco: 900.99
},
{
    img: "assets/img/vangogh.jpeg",
    nome: "Vincent Van Gogh",
    autor: "Van Gogh",
    preco: 1899.99
},

{
    img: "assets/img/paisagem.jpeg",
    nome: "A paisagem",
    autor: "Claude Monet",
    preco: 949.99
},
{
    img: "assets/img/noite estrelada.jpeg",
    nome: "Noite Estrelada",
    autor: "Van Gogh",
    preco: 2999.99
},
{
    img: "assets/img/crianca.jpeg",
    nome: "A janela",
    autor: "Claude Monet",
    preco: 1899.99
},
{
    img: "assets/img/monalisa.jpeg",
    nome: "Mona Lisa",
    autor: "Leonardo da Vinc",
    preco: 19.99
},
{
    img: "assets/img/maraleras.jpeg",
    nome: "Girrasois",
    autor: "Van Gogh",
    preco: 1299.99
},
{
    img: "assets/img/flores.jpeg",
    nome: "Vaso de flores",
    autor: "Claude Monet",
    preco: 1249.99

},
{
    img: "assets/img/lua.jpeg",
    nome: "Lua",
    autor: "Van Gogh",
    preco: 999.99
},
{
    img: "assets/img/lago.jpeg",
    nome: "O lago",
    autor: "Claude Monet",
    preco: 1500.50
},
{
    img: "assets/img/frida.jpeg",
    nome: "Auto Retrado",
    autor: "Frida Khalo",
    preco: 999.99
},
{
    img: "assets/img/casa.jpeg",
    nome: "A casa",
    autor: "Claude Monet",
    preco: 1399.15
}];
console.log(pinturas);

const catalogo = document.querySelector('.catalogo');
pinturas.forEach((cata) => {
    //console.log(cata);

    var divPinturas = document.createElement("div");

    var btnAddChart = document.createElement("button");
    btnAddChart.textContent = "Adicione ao carrinho";
    btnAddChart.setAttribute("class", "btnAddChart");

    var btnFavoritar = document.createElement("button");
    btnFavoritar.textContent = "Favoritar";
    btnFavoritar.setAttribute("class", "btnFavoritar");


    divPinturas.classList.add("produtos");
    divPinturas.innerHTML = `
    <img src="${cata.img}" height="200px">
        <h2>${cata.nome}</h2>
        <h4>${cata.autor}</h4>
        <h1>R$${cata.preco}</h1>

    `;

    catalogo.insertAdjacentElement("beforeend", divPinturas);
    divPinturas.appendChild(btnAddChart);
    divPinturas.appendChild(btnFavoritar);
});

const filtrarAutor = document.querySelector('#filtrarAutor');

filtrarAutor.addEventListener('change', (obra) => {

    catalogo.innerHTML = "";
    pinturas.forEach((cata) => {
        //console.log(obra.target.value);
        if(obra.target.value === cata.autor || obra.target.value === 'Todos'){

            var divPinturas = document.createElement("div");
            divPinturas.classList.add("produtos");
            
            var btnAddChart = document.createElement("button");
            btnAddChart.textContent = "Adicione ao carrinho";
            btnAddChart.setAttribute("class", "btnAddChart");

            var btnFavoritar = document.createElement("button");
            btnFavoritar.textContent = "Favoritar";
            btnFavoritar.setAttribute("class", "btnFavoritar");

            divPinturas.innerHTML = `
            <img src="${cata.img}" height="200px">
                <h2>${cata.nome}</h2>
                <h4>${cata.autor}</h4>
                <h1>${cata.preco}</h1>

            `;

            catalogo.insertAdjacentElement("beforeend", divPinturas);
            divPinturas.appendChild(btnAddChart);
            divPinturas.appendChild(btnFavoritar);
        }
    });
});

//sua Conta
document.querySelector('#btnSuaConta').addEventListener('click', (prevent) => {
    prevent.preventDefault();
    
    document.querySelector('#suaConta').setAttribute("class", "");

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');
    
    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');
    
    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('.abas2 #abaCadastrar').classList.add('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden");

    document.querySelector('.abas2 #abaEntrar').classList.remove('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "hidden");

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");

    //console.log(loggedUser.name);

    const Lunome = document.querySelector('.conteudoCc #seuNome');
    const Luemail = document.querySelector('.conteudoCc #seuEmail');

    let txtNome = '';
    txtNome = `<div class="nomeCss">${loggedUser.name}</div>`;
    Lunome.innerHTML = txtNome;

    let txtEmail = '';
    txtEmail = `<div class="emailCss">${loggedUser.email}</div>`;
    Luemail.innerHTML = txtEmail;

});

document.querySelector('#logout').addEventListener('click', () => {

    listProdutos.innerHTML = ""
    precoTotal.innerHTML = "0.00"
    loggedUser = null;
    localStorage.setItem("loggedUser",JSON.stringify(loggedUser));

    logado = false;
    
    message2.innerHTML = '';
    mercha.innerHTML = 'Cadastre-se';

    document.querySelector('.abas #config').classList.add('ativa');
    document.querySelector('#configSec').setAttribute("class" , "");

    document.querySelector('.abas2 #abaEntrar').classList.add('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "");
    
    document.querySelector('.abas2 #abaCadastrar').classList.remove('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden");
    
    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#btnSuaConta').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");


});

//ir pro carrinho
document.querySelector('#shopCart').addEventListener('click', () => {
    document.querySelector('#carrinhoCompras').setAttribute("class", "");

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');
    
    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');
    
    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('.abas2 #abaCadastrar').classList.add('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden");

    document.querySelector('.abas2 #abaEntrar').classList.remove('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "hidden");

    document.querySelector('#favoritos').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
   
    
});

/*
"atributos" do carrinho.

const listProdutos = document.querySelector('.container .cart-items');
const precoTotal = document.querySelector('.container #precoTotal');

var carrinhoVazio = true;

var total = 0;

var foiRemovido = false;

var carrinhoItens = [];*/ 

document.querySelectorAll('.btnAddChart').forEach((e,i) => e.addEventListener('click', () => {
   
    if(logado===true){
        console.log("entrei");

        document.querySelector('#seNLogado').setAttribute("class", "hidden");
        const carrinhoKey = 'carrinho';
        
        let carrinhoItens = localStorage.getItem(carrinhoKey);
        carrinhoItens = carrinhoItens ? JSON.parse(carrinhoItens) : [];
    
        pinturas.forEach((cata2, posi2) => {
            listProdutos.classList.remove('hidden');
          if (posi2 == i) {
            carrinhoVazio = false;
    
            var item = {
              img: cata2.img,
              nome: cata2.nome,
              preco: cata2.preco
            };
    
            carrinhoItens.push(item);
            carrinhoVazio = false;
    
            var divCarrinho = document.createElement("div");
            var btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.setAttribute("class", "removeItem");
    
            divCarrinho.innerHTML = `
              <img src="${item.img}" height="130px">
              <h2>${item.nome}</h2>
              <h1>${item.preco}</h1>
            `;
    
            listProdutos.insertAdjacentElement("beforeend", divCarrinho);
            divCarrinho.appendChild(btnRemover);
    
            e.textContent = "Adicionado!";
            console.log(carrinhoItens);
    
            localStorage.setItem(carrinhoKey, JSON.stringify(carrinhoItens));
    
            btnRemover.addEventListener('click', (btn, i) => {
              btn.target.parentElement.remove();
              e.textContent = "Adicione ao carrinho";

              total -= item.preco;
    
              let pT = '';
              pT = `Preço total: ${total.toFixed(2)}`;
              precoTotal.innerHTML = pT;

                carrinhoVazio = true;

            });
    
            if (foiRemovido == false) {
              total += item.preco;
    
              let pT = '';
              pT = `Preço total: ${total.toFixed(2)}`;
              precoTotal.innerHTML = pT;
            }
          }
        });

      } else {
        document.querySelector('#seNLogado').setAttribute("class", "");
      }
}));

document.querySelector('#comprarItem').addEventListener('click',() => {
    listProdutos.classList.remove('hidden');

    if(carrinhoVazio==false){
       alert("Parabéns! compra efetuada com sucesso!");
       listProdutos.classList.add('hidden');

    }else{
        alert("Adicione itens no carrinho!"); 
    }
    
});

//ir pro favoritos

document.querySelector('#heart').addEventListener('click', () => {
    document.querySelector('#favoritos').setAttribute("class", "");

    document.querySelector('#homepageSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #homepage').classList.remove('ativa');
    
    document.querySelector('#catalogoSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #catalogo').classList.remove('ativa');
    
    document.querySelector('#contateSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #contate').classList.remove('ativa');

    document.querySelector('#configSec').setAttribute("class" , "hidden");
    document.querySelector('.abas #config').classList.remove('ativa');

    document.querySelector('.abas2 #abaCadastrar').classList.add('ativa');
    document.querySelector('.conteudos #cadastrar').setAttribute("class", "hidden");

    document.querySelector('.abas2 #abaEntrar').classList.remove('ativa');
    document.querySelector('.conteudos #entrar').setAttribute("class", "hidden");

    document.querySelector('#carrinhoCompras').setAttribute("class", "hidden");
    document.querySelector('#suaConta').setAttribute("class", "hidden");
    document.querySelector('#seNLogado').setAttribute("class" , "hidden");
});

//favoritar

document.querySelectorAll('.btnFavoritar').forEach((e1,i1) => e1.addEventListener('click', () => {
    
    if(logado===true){
        document.querySelector('#seNLogado').setAttribute("class" , "hidden");

        pinturas.forEach((cata3, posi3) => {
            if(posi3 == i1){

                var ilove = {
                    img: cata3.img,
                    nome: cata3.nome,
                    autor: cata3.autor,
                    preco: cata3.preco
                };

                favoritados.push(ilove);

                var divFavoritar = document.createElement("div");
                divFavoritar.classList.add("produtos");
                var btnRemover2 = document.createElement("button");
                btnRemover2.textContent = "Remover";
                btnRemover2.setAttribute("class", "removeItem");

                divFavoritar.innerHTML = `
                <img src="${ilove.img}" height="200px">
                <h2>${ilove.nome}</h2>
                <h4>${ilove.autor}</h4>
                <h1>R$${ilove.preco}</h1>
                `;

                itensFavoritos.insertAdjacentElement("beforeend", divFavoritar);
                divFavoritar.appendChild(btnRemover2);
                
                e1.textContent = "Favoritado!";
                
                localStorage.setItem(favoritosKey, JSON.stringify(favoritados));


                btnRemover2.addEventListener('click', (btn1) => {
                    btn1.target.parentElement.remove();
                    e1.textContent = "Favorite";

                    
                    favoritados = favoritados.filter((favorito) => favorito.nome !== ilove.nome);

                    localStorage.setItem(favoritosKey, JSON.stringify(favoritados));
                    
                });

            }
        });
    }else {
        document.querySelector('#seNLogado').setAttribute("class" , "");
    }
}));
