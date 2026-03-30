import './button.css'

// export const Button = (props) => {
//     return (
//         <button className="btn">{props.label}</button>
//     )
// }

const sayHello = () => {
    console.log('Olá mundo');
}

const Button = (props = 'Clique Aqui') => {
        return <button className='btn' onClick={sayHello}>{props.label}</button>
      }

export default Button