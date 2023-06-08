// Função para clicar no elemento
function clickElement(element) {
  element.click();
}

// Obter os elementos que representam os dias de aula
const diasAulas = document.getElementsByClassName('c-jpoxul icon');
const quantidadeDiasAulas = diasAulas.length;

// Função para iterar sobre os dias de aula e clicar nos conteúdos
function processDiaAula(diaIndex) {
  if (diaIndex >= quantidadeDiasAulas) {
    console.log('Processo concluído!');
    return;
  }

  const diaAula = diasAulas[diaIndex];
  console.log('Clicando na aula do dia', diaIndex + 1);

  // Obter os conteúdos do dia atual
  const conteudosDia = diaAula.nextElementSibling.getElementsByClassName('c-hKhFYS');
  const quantidadeConteudosDia = conteudosDia.length;

  // Função para clicar no botão de conclusão do conteúdo
  function processConteudo(conteudoIndex) {
    if (conteudoIndex >= quantidadeConteudosDia) {
      // Avançar para o próximo dia de aula
      diaIndex++;
        processDiaAula(diaIndex);
      return;
    }

    const conteudo = conteudosDia[conteudoIndex];

    // Clicar no link do conteúdo
    if (conteudo) {
      console.log('Clicando no conteúdo', conteudoIndex + 1, 'do dia', diaIndex + 1);
      clickElement(conteudo);
    }

    // Aguardar 5 segundos
    setTimeout(() => {
      // Clicar no botão de conclusão do conteúdo
      const button = document.getElementsByClassName("c-eqzuyj c-eqzuyj-dbhHqa-size-medium c-eqzuyj-bEHIds-kind-primary conclude-button__ada-button")[0];

      if (button) {
        console.log('Clicando em lição concluída!')
        clickElement(button);
      } else {
        console.log('Lição já foi concluída!');
      }

      // Avançar para o próximo conteúdo
      conteudoIndex++;
      processConteudo(conteudoIndex);
    }, 5000);
  }

  // Iniciar o processo para o primeiro conteúdo do dia
  processConteudo(0);
}

// Chamar a função para iniciar o processo no primeiro dia de aula
processDiaAula(0);
