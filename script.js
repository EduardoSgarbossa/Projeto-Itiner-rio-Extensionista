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
    title: "Conceitos Básicos em C#",
    content: `
        <p>C# é uma linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft. Ela é usada em uma ampla gama de aplicações, desde aplicativos desktop e web até desenvolvimento de jogos. A seguir, vamos explorar alguns dos conceitos mais básicos em C#:</p>
        
        <h3>1. Estruturas de Controle</h3>
        <p>Estruturas de controle ajudam a definir o fluxo do programa, permitindo a criação de condições e repetições. Aqui está um exemplo que verifica se um número é par ou ímpar:</p>
        
        <pre><code>int numero = 10;
if (numero % 2 == 0) {
    Console.WriteLine("O número é par.");
} else {
    Console.WriteLine("O número é ímpar.");
}</code></pre>
        
        <p>Outras estruturas de controle incluem loops como <code>for</code>, <code>while</code> e <code>foreach</code>, que repetem um bloco de código várias vezes.</p>
        
        <h3>2. Tipos de Dados</h3>
        <p>Em C#, variáveis são declaradas com tipos específicos, como <code>int</code> para números inteiros, <code>string</code> para texto e <code>bool</code> para valores booleanos (verdadeiro ou falso). Aqui estão alguns exemplos:</p>
        
        <pre><code>string nome = "João";
int idade = 30;
bool ativo = true;</code></pre>
        
        <p>Esses tipos ajudam o compilador a verificar se o código está correto e a otimizar a execução.</p>
        
        <h3>3. Funções</h3>
        <p>Funções são blocos de código que realizam uma tarefa específica e podem ser chamadas em diferentes partes do programa. No exemplo abaixo, criamos uma função chamada <code>Somar</code> que retorna a soma de dois números:</p>
        
        <pre><code>int Somar(int a, int b) {
    return a + b;
}
Console.WriteLine(Somar(5, 3)); // Saída: 8</code></pre>

        <p>Funções tornam o código mais organizado e reutilizável.</p>
        
        <h3>4. Variáveis e Constantes</h3>
        <p>Em C#, variáveis podem armazenar dados que podem mudar durante a execução do programa. Constantes, por outro lado, são valores fixos:</p>
        
        <pre><code>int idade = 25; // variável
const double PI = 3.14159; // constante</code></pre>
        
        <img src="./images/image2.jpg" alt="Conceitos Básicos em C#">
    `,
    detalhes: "Este conteúdo é uma introdução aos conceitos básicos de C#, ideal para iniciantes que desejam desenvolver suas habilidades. Inclui exemplos práticos para facilitar o aprendizado.",
    image: "image2.jpg"
},

{
  id: 3,
  title: "Programação Orientada a Objetos",
  content: `
      <p>A Programação Orientada a Objetos (POO) é um paradigma de programação que usa 'objetos' para modelar dados e comportamentos. Em C#, a POO é fundamental, pois permite organizar o código de forma clara e modular. Vamos explorar seus principais conceitos:</p>
      
      <h3>1. Classes e Objetos</h3>
      <p>Classes são estruturas que definem propriedades e comportamentos de um objeto. Objetos são instâncias de classes, ou seja, representam elementos específicos. Exemplo de uma classe <code>Carro</code>:</p>
      
      <pre><code>class Carro {
  public string Modelo { get; set; }
  public string Cor { get; set; }

  public void Acelerar() {
      Console.WriteLine("O carro está acelerando.");
  }
}

// Criando um objeto
Carro meuCarro = new Carro();
meuCarro.Modelo = "Fusca";
meuCarro.Cor = "Azul";</code></pre>

      <h3>2. Herança</h3>
      <p>A herança permite que uma classe herde atributos e métodos de outra. Isso promove o reaproveitamento de código. Exemplo:</p>
      
      <pre><code>class Veiculo {
  public int NumeroDeRodas { get; set; }
}

class Carro : Veiculo {
  public string Modelo { get; set; }
}</code></pre>

      <p>No exemplo, a classe <code>Carro</code> herda de <code>Veiculo</code>, o que significa que <code>Carro</code> tem uma propriedade <code>NumeroDeRodas</code>.</p>
      
      <h3>3. Polimorfismo</h3>
      <p>O polimorfismo permite que métodos com o mesmo nome se comportem de maneira diferente, dependendo da classe. Exemplo:</p>
      
      <pre><code>class Animal {
  public virtual void FazerSom() {
      Console.WriteLine("Som de animal.");
  }
}

class Cachorro : Animal {
  public override void FazerSom() {
      Console.WriteLine("Au Au!");
  }
}</code></pre>

      <p>O método <code>FazerSom</code> é implementado de forma diferente em <code>Animal</code> e <code>Cachorro</code>.</p>
      
      <h3>4. Encapsulamento</h3>
      <p>Encapsulamento é o princípio de restringir o acesso direto a certos dados e métodos de uma classe. Isso melhora a segurança e a organização do código:</p>
      
      <pre><code>class Pessoa {
  private string nome;

  public void SetNome(string nome) {
      this.nome = nome;
  }

  public string GetNome() {
      return nome;
  }
}</code></pre>
      
      <img src="./images/image3.jpg" alt="Programação Orientada a Objetos">
  `,
  detalhes: "Este conteúdo oferece uma visão abrangente dos princípios da programação orientada a objetos, essencial para o desenvolvimento de software. Inclui exemplos para facilitar a compreensão de cada conceito.",
  image: "image3.jpg"
},
{
  id: 4,
  title: "Usando ASP.NET",
  content: `
      <p>ASP.NET é um framework da Microsoft para desenvolvimento de aplicações web. Ele permite criar aplicações robustas e escaláveis. Vamos ver como começar:</p>
      
      <h3>1. Estrutura de um Projeto ASP.NET</h3>
      <p>Um projeto típico de ASP.NET pode incluir:</p>
      <ul>
          <li><code>Controllers</code>: gerenciam a lógica da aplicação e respondem às solicitações do usuário.</li>
          <li><code>Views</code>: definem a interface do usuário, onde os dados são apresentados ao usuário.</li>
          <li><code>Models</code>: representam os dados da aplicação e a lógica de negócios.</li>
      </ul>

      <h3>2. Criando um Controller</h3>
      <p>Um controller é responsável por processar as solicitações e retornar as respostas. Aqui está um exemplo de um controller simples:</p>
      
      <pre><code>using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller {
  public IActionResult Index() {
      return View();
  }
}</code></pre>

      <h3>3. Criando uma View</h3>
      <p>Uma view é uma página da web que apresenta dados ao usuário. Aqui está um exemplo de uma view em Razor:</p>
      
      <pre><code>@model IEnumerable&lt;string&gt;

<h2>Lista de Nomes</h2>
<ul>
  @foreach (var nome in Model) {
      <li>@nome</li>
  }
</ul></code></pre>

      <h3>4. Usando Models</h3>
      <p>Models são usados para representar dados. Aqui está um exemplo de um model simples:</p>
      
      <pre><code>public class Produto {
  public int Id { get; set; }
  public string Nome { get; set; }
  public decimal Preco { get; set; }
}</code></pre>

      <h3>5. Conectando-se a um Banco de Dados</h3>
      <p>ASP.NET pode se conectar a bancos de dados usando Entity Framework. Aqui está um exemplo de como configurar um contexto de banco de dados:</p>
      
      <pre><code>using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext {
  public DbSet&lt;Produto&gt; Produtos { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
      optionsBuilder.UseSqlServer("sua_string_de_conexão");
  }
}</code></pre>

      <h3>6. Executando a Aplicação</h3>
      <p>Após configurar seu projeto, você pode executá-lo usando o comando <code>dotnet run</code> no terminal. A aplicação estará disponível em <code>http://localhost:5000</code> por padrão.</p>

      <img src="./images/image4.jpg" alt="Usando ASP.NET">
  `,
  detalhes: "Este conteúdo fornece uma introdução prática ao uso do ASP.NET, cobrindo a estrutura de projetos, controllers, views e models.",
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