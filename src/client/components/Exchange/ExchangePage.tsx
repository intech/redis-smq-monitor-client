import React from 'react';
import { IMessageQueue } from '../../transport/http/api/common/IMessage';
import BindQueue from './BindQueue/BindQueue';
import UnbindQueue from './UnbindQueue/UnbindQueue';
import { Badge, ListGroup } from 'react-bootstrap';
import DeleteExchange from './DeleteExchange/DeleteExchange';

interface IExchangePageProps {
    exchangeName: string;
    queues: IMessageQueue[];
}


const ExchangeQueues: React.FC<IExchangePageProps> = ({ exchangeName, queues }) => {
    if (!queues.length) {
        return <p>The exchange has not yet any bound queue.</p>
    }
    return (
        <ListGroup as="ol" numbered>
        {
            queues.map((queue, index) => {
                return <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={index}
                    >
                        <div className="ms-2 me-auto">
                            {queue.name}@{queue.ns}
                        </div>
                        <Badge bg="light" pill>
                            <UnbindQueue exchangeName={exchangeName} queue={queue} />
                        </Badge>
                    </ListGroup.Item>

            })
        }
        </ListGroup>
    )
}

const ExchangePage: React.FC<IExchangePageProps> = ({ exchangeName, queues }) => {
    return <>
        <div className={'exchange fullWidth'}>
            <h1 className={'display-4'}>{exchangeName}</h1>
            <div className={'mb-4 d-flex flex-row-reverse'}>
                <DeleteExchange exchangeName={exchangeName} />
                <BindQueue exchangeName={exchangeName} />
            </div>
            <ExchangeQueues queues={queues} exchangeName={exchangeName} />
        </div>
    </>
}

export default ExchangePage;