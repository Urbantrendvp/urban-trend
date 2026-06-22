catalogo.innerHTML += `
<div class="card">

<img src="${prodotto.immagine}" alt="${prodotto.nome}">

<div class="info">

<div class="nome">${prodotto.nome}</div>

<div class="categoria">
${prodotto.categoria}
</div>

<div>
Taglie: ${prodotto.taglia}
</div>

<div class="prezzo">
€ ${prodotto.prezzo}
</div>

<a href="#" class="buy">
Acquista Ora
</a>

</div>

</div>
`;
