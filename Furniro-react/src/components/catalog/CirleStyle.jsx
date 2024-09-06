export function CircleStyle({ style, text }) {
    return (
        <div className={`circle ${style}`}>
            <p style={{ color: 'white' }}>{text}</p>
        </div>
    )
}