import { ParameterizedRoute } from '../common';
import { IQueueRouteParams } from './queue';
import QueueConsumers from '../../components/QueueConsumers/QueueConsumers';

export const consumers = ParameterizedRoute<IQueueRouteParams>({
    path: '/namespaces/:namespace/queues/:queueName/consumers',
    exact: true,
    component: QueueConsumers,
    caption: 'Consumers'
});
