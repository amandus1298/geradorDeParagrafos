const text = [
  `Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável`,
  `Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.`,
  `Existem cinco tipos de textos que são classificados com base em estruturas específicas. Eles se dividem em: narrativo, descritivo, expositivo, dissertativo e injuntivo.`
];

const form = document.querySelector(".lorem-form");

const amount = document.getElementById("amount");

const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(amount.value);

  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innertHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
