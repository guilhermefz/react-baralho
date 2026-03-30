import Card from "../card/card"

const cardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>
            <div>
                {   
                    cardsTitle.map((cardTitle, index) =>
                        <Card key={index}>
                            <h3>{cardTitle}</h3>
                            <p>esse é um texto do card</p>
                        </Card>
                    )           
                }
                <Card color='blue'>
                            <h3>card com fundo azul</h3>
                            <p>esse é um texto do card</p>
                </Card>
            </div>
        </div>
    )
}

export default Cards