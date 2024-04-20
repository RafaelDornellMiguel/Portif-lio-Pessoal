/*============================= Pagina Rf | Js ==========================*/

/**
 * OBS: Tudo que aprendi até agora;
 */

/* minha variavel */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/**
 *  CONTRUO AQUI CONJUNTO DE VAVIAVEIS DETERMINANDO PARÂMETRO DE LISTA DE NAVEGAÇÃO,
 */
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY; // Correção aqui - fiz errado era scrollY
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
  });

  // VAMOS TRABALHAR RESPONSIVIDADE AQUI! = NÃO POSSO ESQUER NO @MIDIA | CSS.

  let header = document.querySelector('header') // lembrando que document.querySelector chama o arquivo html e css para o js...

  header.classList.toggle('sticky', window.scrollY > 100);


  // link icon a navbar
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/*============================= MOVIMENTAÇÃO ICON ==========================*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

      menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };


    ScrollReveal({ 
      reset: true, 
      distance: '80px',
      duration: 2000,
      delay: 200
    
      });

    ScrollReveal().reveal('.home-content, heading', { origin:'top' });
    ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', { origin:'bottom' });
    ScrollReveal().reveal('.home-content h1, .sobre-img', { origin:'left' });
    ScrollReveal().reveal('.home-content p, .sobre-content', { origin:'right' });



    const typed = new Typed('.multiple-text', {
      strings: ['Developer Full Stack', 'Desenvolvedor Web', 'Front End'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
    

    
/**
 * Seleção de elementos: No início do código, estamos selecionando todas as seções (<section>) e todos os links de navegação dentro do cabeçalho (<header nav a>).
Evento de rolagem: O código define uma função que será executada toda vez que a página é rolada (window.onscroll). Isso significa que sempre que você rolar a página para cima ou para baixo, o código dentro dessa função será executado.
Lógica de verificação de visibilidade da seção: Dentro da função de rolagem, o código percorre cada seção (sections.forEach(sec => {...})). Para cada seção, ele verifica se está visível na janela.
Ele verifica a posição de rolagem atual da janela (window.scrollY) e compara com a posição da seção menos um deslocamento (offset). Isso é para determinar se a parte superior da seção está visível na janela.
Se a parte superior da seção estiver visível, ele verifica se a parte inferior da seção também está visível. Isso é feito comparando a posição de rolagem atual com a posição da seção mais sua altura (offset + height). Isso garante que a seção inteira esteja visível na janela.
Adição da classe ativa: Se a seção estiver visível, o código remove a classe 'active' de todos os links de navegação e, em seguida, adiciona a classe 'active' ao link de navegação correspondente à seção visível. Isso é feito usando o atributo href do link de navegação para encontrar o link que corresponde ao id da seção.
Resumindo, o código está basicamente verificando em qual seção da página o usuário está rolando e atualizando o estilo do link de navegação correspondente para indicar visualmente a seção atualmente visível. Isso é feito manipulando classes CSS para destacar o link de navegação correto.
 *  
 **/

