import { TextInput } from '../../components/TextInput'
import './styles.css'

export function Home() {
  return (
    <div className="main-container">
      <div className="center-container">
        <div className='form'>
          <TextInput type={'text'} />
          <TextInput type={'text'} />
          <TextInput type={'text'} />
        </div>
        <div className='form-buttons'>
          <button className='button-container'>Clique aqui</button>
          <button className='button-container'>Clique aqui</button>
        </div>
      </div>
    </div>
  )
}
