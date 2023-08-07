import './styles/Button.scss'

export default function Button({ text, selected, onClick })
{
    return <button
        className={"button " + (selected ? 'selected' : '')}
        onClick={onClick}>
        {text}
    </button>
}