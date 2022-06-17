import React, { useCallback } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router';
import QueuesPanelBoxPage from './QueuesPanelBoxPage';
import { IStoreState } from '../../store/state';
import useSelector from '../../hooks/useSelector';
import { matchRoute } from '../../routes/common';
import { IWebsocketMainStreamState } from '../../store/websocket-main-stream/state';
import { addNotificationAction } from '../../store/notifications/action';
import { ENotificationType } from '../../store/notifications/state';
import { useDispatch } from 'react-redux';
import { deleteNamespace } from '../../transport/http/api';

const QueuesPanelBox: React.FC<RouteComponentProps> = (props) => {
    const { payload } = useSelector<IStoreState, IWebsocketMainStreamState>(
        (state) => state.websocketMainStream
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const deleteNamespaceRequestCallback = useCallback((ns: string) => () => deleteNamespace(ns), [payload]);
    const deleteNamespaceRequestSuccessCallback = useCallback(() => {
        dispatch(addNotificationAction(`Namespace has been successfully deleted.`, ENotificationType.SUCCESS));
        history.push('/');
    }, [payload]);
    // This component is not a child of the Router, so we can not access current route parameters.
    // This is a workaround to get the parameters.
    const match = matchRoute(props.location.pathname);
    const params = match?.params ?? {};
    return (
        <QueuesPanelBoxPage
            deleteNamespaceRequestCallback={deleteNamespaceRequestCallback}
            deleteNamespaceRequestSuccessCallback={deleteNamespaceRequestSuccessCallback}
            websocketMainStreamPayload={payload}
            matchedQueueParams={params}
        />
    );
};

export default withRouter(QueuesPanelBox);
