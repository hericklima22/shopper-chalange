import './styles.css'

export function TextInput(props) {
  return (
    <div className='container'>
      <h3 className='label'>{props.text || ''}</h3>
      <input type={props.type} className='input-text' />
    </div>
  )
}