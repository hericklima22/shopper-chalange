import './styles.css'

export function TextInput(props) {
  return (
    <div className='container'>
      <input type={props.type} />
    </div>
  )
}