import { TextInput } from '../../components/TextInput'
import './styles.css'

export function Home() {
  return (
    <div className="main-container">
      <div className="center-container">
        <div className='top-text'>
          <h1>Formulário de pedidos</h1>
        </div>
        <div className='form'>
          <TextInput type={'text'} text='Nome' />
          <TextInput type={'text'} text='Data da entrega' />
          <TextInput type={'text'} text='Lista de compras' />
        </div>
        <div className='form-buttons'>
          <input type={'button'} className='button-close' value="Cancelar" />
          <input type={'button'} className='button-done' value="Confirmar"/>
        </div>
      </div>
    </div>
  )
}
