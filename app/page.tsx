import Card from './components/card/Card'
import CardImg from './components/card/CardImg'
import CardBody from './components/card/CardBody'
import CardTag from './components/card/CardTag'

export default function Home() {
    const tags = [
        { name: 'WKwk', id: 1 },
        { name: 'df', id: 2 },
        { name: 'c', id: 3 },
        { name: 'sdfs', id: 4 },
        { name: 'sg', id: 5 },
        { name: 'sdgvf', id: 6 },
    ]
    return (
        <div>
            <Card>
                <CardImg />
                <CardBody>
                    <CardTag tags={tags} />
                </CardBody>
            </Card>
        </div>
    )
}
