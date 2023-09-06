'use client'

export default function CardTag({
    tags,
}: {
    tags: { name: string; id: number }[]
}) {
    return (
        <div>
            <ul>
                {tags.map((tag) => {
                    return <li key={tag.id}>{tag.name}</li>
                })}
            </ul>
        </div>
    )
}
