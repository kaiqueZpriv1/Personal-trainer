const vantagemElement = document.getElementById("vantagem")

const indexVantagem = [
	{
		id: 0,
		image: "./src/img/imgVantagens/musculacaoVant.png",
		title: "Resultados visiveis",
		paragrafo:
			"Tenha resultados visiveis e satisfatório em menos de 90 dias após o inicio !",
	},
	{
		id: 1,
		image: "./src/img/imgVantagens/prevencao.png",
		title: "Prevenção de lesões",
		paragrafo:
			"Treine com tranquilidade livre de lesões, respeitando os limites do seu corpo !",
	},
	{
		id: 2,
		image: "./src/img/imgVantagens/motivacaoVantagem.png",
		title: "Foco e motivação",
		paragrafo:
			"Tenha a segurança e a certeza de seus resultados o mais rapido possivel. Descubra o poder da transformação pessoal com um treino adequado ! ",
	},
];

function innerVantagem() {
    indexVantagem.forEach(vantagem => {
        vantagemElement.innerHTML+= `
        <div class="box-vantagem">
            <img src="`+vantagem.image+`">
            <h3>`+vantagem.title+`</h3>
            <p>`+vantagem.paragrafo+`</p>
        </div>
        `
    })
}
innerVantagem();