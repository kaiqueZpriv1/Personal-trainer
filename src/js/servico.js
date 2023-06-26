const servicoElement = document.getElementById("servico")

const servicoInner = [
	{
		id: 0,
		title: "Aulas de musculação",
		link: "https://api.whatsapp.com/send?phone=5511954886575",
		button: "Contate-me",
		image: "./src/img/imgServicos/aulaMusculacao.png",
	},
	{
		id: 0,
		title: "Aulas coletivas",
		link: "https://api.whatsapp.com/send?phone=5511954886575",
		button: "Contate-me",
		image: "./src/img/imgServicos/aulaColetiva.png",
	},
	{
		id: 0,
		title: "Aulas de futebol <br> e vôlei",
		link: "https://api.whatsapp.com/send?phone=5511954886575",
		button: "Contate-me",
		image: "./src/img/imgServicos/aulaFutebol.png",
	},
	{
		id: 0,
		title: "Aulas em cruzeiro",
		link: "https://api.whatsapp.com/send?phone=5511954886575",
		button: "Contate-me",
		image: "./src/img/imgServicos/aulaNavio.png",
	},
	{
		id: 0,
		title: "Aulas de funcional <br> e alongamento",
		link: "https://api.whatsapp.com/send?phone=5511954886575",
		button: "Contate-me",
		image: "./src/img/imgServicos/aulaFuncional.png",
	},
];

function indexServico() {
    servicoInner.forEach(servico =>{
        servicoElement.innerHTML+=`
        <div class="box-serv">
            <div class="text-serv">
                <h3>`+servico.title+`<h3>
                <a href="`+servico.link+`">`+servico.button+`</a>
            </div>
            <img src="`+servico.image+`">
        </div>
        `
    })
}
indexServico();