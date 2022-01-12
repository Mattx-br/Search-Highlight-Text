// Characters to be escaped [.*+?^${}()|[\]\\] 

// selecionando um elemento HTML pelo seu id
const txtinput = document.querySelector('#text-to-search');
const textNotFound = document.querySelector('#textNotFound');
const btnSearch = document.querySelector('#search-button');

function search() {
    // pegando só o valor do elemento 
    if (txtinput.value != "") {

        let text = txtinput.value;


        // selecionando um elemento HTML pelo seu id
        let paragraph = document.querySelector('#paragraph');

        // esse replace troca tudo q ta na primeira parte pela segunda, a letra g aqui representa todas as ocorrências
        text = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        // esse RegExp 
        var pattern = new RegExp(`${text}`, "gi");

        // letra i: Executa a busca ignorando letras maiúsculas e minúsculas.

        // letra g: Executa uma pesquisa global (encontre todas os resultados em vez de parar após a primeira ocorrência).

        var count = paragraph.textContent.match(pattern);

        // textContent é exatamente isso, o texto de um elemento html
        paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
        // console.log(text);
        // console.log(count);
        txtinput.select();
        textNotFound.style.display = 'none';
        
        if (count == null) {
            textError(count);
            paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `${match}`);
        }
    }
    else {
        textError(count);
        paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `${match}`);
    }
}

function textError(count) {
    let textError = '';
    
    count === null 
    ? textError = 'Text not found' 
    : textError = 'Type some text';

    textNotFound.textContent = textError;
    textNotFound.style.display = 'block';

    btnSearch.setAttribute('disabled', 'disabled');
    btnSearch.style.border = '2px solid #d62c2c';

    txtinput.style.borderBottom = '1px solid #d62c2c';

    document.documentElement.style
        .setProperty('--roxoBackground', '#d62c2c');

    setTimeout(() => {
        btnSearch.removeAttribute('disabled');
        btnSearch.style.border = 'none';
        
        txtinput.style.border = 'none';
        
        textNotFound.style.display = 'none';

        document.documentElement.style
            .setProperty('--roxoBackground', '#201d2e');
    }, 800)
}

txtinput.addEventListener("keyup",(event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        btnSearch.click();
    }
})



// ========|==========================|========
//         * REFERÊNCIAS / REFERENCES *
// ========|==========================|========

// documentação do RegExp (Regular expressions)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
//https://www.mundojs.com.br/2018/06/14/como-usar-o-regex-no-javascript/ 

// site pra teste de regex (regex test website)
// https://regexr.com/

// propriedade setAttribute e removeAttribute (setAttribute e removeAttribute properties)
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute
// https://www.youtube.com/watch?v=PSEhNb69XpI&t=195s

// colocando css com js
// https://www.w3schools.com/js/js_htmldom_css.asp

// trigger button click on enter 
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp