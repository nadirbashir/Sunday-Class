export default function Button({text, onAdd}){
    return (
        <button onClick={onAdd}>{text}</button>
    )
}