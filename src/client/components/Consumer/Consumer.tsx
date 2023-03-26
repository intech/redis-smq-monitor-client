import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IConsumerRouteParams } from '../../routes/routes/consumer';
import ConsumerPage from './ConsumerPage';
import { TConsumerHeartbeatStreamPayload } from '../../transport/websocket/streams/consumerHeartbeatStream';
import useWebsocketSubscription from '../../hooks/useWebsocketSubscription';

const Consumer: React.FC<RouteComponentProps<IConsumerRouteParams>> = ({ match }) => {
    const { namespace, queueName, consumerId } = match.params;
    const { isLoading, data: heartbeat } = useWebsocketSubscription<TConsumerHeartbeatStreamPayload>(
        `streamConsumerHeartbeat:${consumerId}`,
        0
    );
    return (
        <ConsumerPage
            consumerId={consumerId}
            queueName={queueName}
            namespace={namespace}
            heartbeat={heartbeat}
            isLoading={isLoading}
        />
    );
};

export default Consumer;
