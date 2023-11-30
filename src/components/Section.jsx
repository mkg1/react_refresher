export default function Section({ title, children, ...plop }) {
    return (
    <section {...plop}>
        <h2>{title}</h2>
        {children}
    </section>
    )
}