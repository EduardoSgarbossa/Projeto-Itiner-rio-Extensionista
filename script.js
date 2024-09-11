const dashboardItems = document.querySelectorAll('.sidebar ul li a');

const dashboardCards = [
  {
      id: 1,
      title: "Programming logic",
      content: `
        <p>Calculadora de área de um triângulo utilizando a fórmula de Heron</p>
        <p>Função para calcular a área do triângulo:</p>
        <p>function calcularAreaTriangulo() {</p>
        <p>  const <code>ladoA</code> = parseFloat(prompt("Informe o lado A do triângulo: "));</p>
        <p>  const <code>ladoB</code> = parseFloat(prompt("Informe o lado B do triângulo: "));</p>
        <p>  const <code>ladoC</code> = parseFloat(prompt("Informe o lado C do triângulo: "));</p>
        <p>  const <code>semiPerimetro</code> = (<code>ladoA</code> + <code>ladoB</code> + <code>ladoC</code>) / 2;</p>
        <p>  const <code>area</code> = Math.sqrt(<code>semiPerimetro</code> * (<code>semiPerimetro</code> - <code>ladoA</code>) * (<code>semiPerimetro</code> - <code>ladoB</code>) * (<code>semiPerimetro</code> - <code>ladoC</code>));</p>
        <p>  alert(\`A área do triângulo é: \${<code>area</code>.toFixed(2)} unidades quadradas\`);</p>
        <p>}</p>
        <p>Chamada da função para calcular a área do triângulo:</p>
        <p><code>calcularAreaTriangulo()</code>;</p>
        <img src="./images/image1.jpg" alt="Image 1">
      `,
      detalhes: "Este é um excelente conteúdo para aprender lógica de programação.",
      image: "image1.jpg"
  },
  {
    id: 2,
    title: "Basic Concepts in C#",
    content: "Basic Concepts in C# content",
    detalhes: "Aprenda os conceitos básicos de C# e comece a desenvolver suas habilidades.",
    image: "image2.jpg"
  },
  {
    id: 3,
    title: "Object-oriented programming",
    content: "Object-oriented programming content",
    detalhes: "Entenda os princípios da programação orientada a objetos e melhore sua capacidade de desenvolver software.",
    image: "image3.jpg"
  },
  {
    id: 4,
    title: "Using ASP.NET",
    content: "Using ASP.NET content",
    detalhes: "Aprenda a utilizar ASP.NET para desenvolver aplicações web robustas e escaláveis.",
    image: "image4.jpg"
  }
];

function verDetalhes(cardId) {
  const card = dashboardCards.find(c => c.id === cardId);
  const overlayDiv = document.getElementById('overlay');

  if (card && overlayDiv) {
    overlayDiv.innerHTML = `
      <div class="card">
        <img src="${card.image}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.content}</p>
          <p class="card-text">${card.detalhes}</p>
          <button type="button" class="btn btn-secondary" onclick="voltar()">Voltar</button>
          <button type="button" class="btn btn-secondary close-button" onclick="closeButtonClick()">X</button>
        </div>
      </div>
    `;
  
    // Verifica se a barra de tarefas está presente
    if (document.fullscreenElement || document.msFullscreenElement) {
      // Se não estiver presente, seta o padding inferior para 0
      overlayDiv.querySelector('.card-body').style.paddingBottom = '0px';
    } else {
      // Se estiver presente, seta o padding inferior para 40px
      overlayDiv.querySelector('.card-body').style.paddingBottom = '40px';
    }
  
    overlayDiv.style.display = 'block';
  }
}

function voltar() {
  document.getElementById('overlay').style.display = 'none';
}
function closeButtonClick() {
  voltar();
}

dashboardItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const clickedItem = event.target;
    const cardId = parseInt(clickedItem.id.replace('dashboard-', ''));
    verDetalhes(cardId);
  });
});
function close() {
  document.getElementById('overlay').style.display = 'none';
}