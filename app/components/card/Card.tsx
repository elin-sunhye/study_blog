'use client'
export default function Card({ children }: any) {
    return (
        <div
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}
        >
            {children}
        </div>
    )
}
