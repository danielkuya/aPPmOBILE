import disco from '../../assets/produtos/discodemons.jpg'
import camisapreta from '../../assets/produtos/camisaurbanpreta.jpeg'
import bonepreto from '../../assets/produtos/boneurbanpreto.jpeg'


const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit SenegalWAR",
        detalhes: "Nosso Kit exclusivo para fãs de HAMAS e Guerra Urbana",
        preco: "R$699,99",
        botao: "Adicionar a lista de desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "Grock do Pente Extendido",
                imagemKit: camisapreta,
            },
            {
                nome: "GROCK PEQUENA",
                imagemKit: bonepreto,
            },
            {
                nome: "AK-47",
                imagemKit: disco,
            },
        ]
    }
}

export default produto;

