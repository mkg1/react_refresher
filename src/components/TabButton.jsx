export default function TabButton({children, isSelected, ...plop}) {
    return (
    <li>
        <button className={isSelected ? 'active' : undefined} {...plop}>
        {children}
        </button>
    </li>
    )
}