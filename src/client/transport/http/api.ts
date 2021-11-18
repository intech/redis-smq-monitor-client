import axios from 'axios';
import { TPendingMessagesWithPriorityResponse, TQueueMessagesResponse, TScheduledMessagesResponse } from './contract';

const API_URL = process.env.API_URL ?? '';

export const getScheduledMessages = async (skip: number, take: number) => {
    return axios.get<TScheduledMessagesResponse>(`${API_URL}/api/scheduled-messages?skip=${skip}&take=${take}`);
};

export const deleteScheduledMessage = async (messageId: string) => {
    return axios.delete(`${API_URL}/api/scheduled-messages?messageId=${messageId}`);
};

export const purgeScheduledMessages = async () => {
    return axios.delete(`${API_URL}/api/scheduled-messages`);
};

export const getQueuePendingMessagesWithPriority = async (
    ns: string,
    queueName: string,
    skip: number,
    take: number
) => {
    return axios.get<TPendingMessagesWithPriorityResponse>(
        `${API_URL}/api/queues/${queueName}/pending-messages-with-priority?ns=${ns}&skip=${skip}&take=${take}`
    );
};

export const getQueuePendingMessages = async (ns: string, queueName: string, skip: number, take: number) => {
    return axios.get<TQueueMessagesResponse>(
        `${API_URL}/api/queues/${queueName}/pending-messages?ns=${ns}&skip=${skip}&take=${take}`
    );
};

export const getQueueAcknowledgedMessages = async (ns: string, queueName: string, skip: number, take: number) => {
    return await axios.get<TQueueMessagesResponse>(
        `${API_URL}/api/queues/${queueName}/acknowledged-messages?ns=${ns}&skip=${skip}&take=${take}`
    );
};

export const getQueueDeadLetteredMessages = async (ns: string, queueName: string, skip: number, take: number) => {
    return axios.get<TQueueMessagesResponse>(
        `${API_URL}/api/queues/${queueName}/dead-lettered-messages?ns=${ns}&skip=${skip}&take=${take}`
    );
};

export const deleteQueueDeadLetteredMessage = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number
) => {
    return axios.delete(
        `${API_URL}/api/queues/${queueName}/dead-lettered-messages/${messageId}?ns=${ns}&sequenceId=${sequenceId}`
    );
};

export const deleteQueuePendingMessage = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number
) => {
    return axios.delete(
        `${API_URL}/api/queues/${queueName}/pending-messages/${messageId}?ns=${ns}&sequenceId=${sequenceId}`
    );
};

export const deleteQueuePendingMessageWithPriority = async (ns: string, queueName: string, messageId: string) => {
    return axios.delete(`${API_URL}/api/queues/${queueName}/pending-messages-with-priority/${messageId}?ns=${ns}`);
};

export const deleteQueueAcknowledgedMessage = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number
) => {
    return axios.delete(
        `${API_URL}/api/queues/${queueName}/acknowledged-messages/${messageId}?ns=${ns}&sequenceId=${sequenceId}`
    );
};

export const purgeAcknowledgedMessages = async (ns: string, queueName: string) => {
    return axios.delete(`${API_URL}/api/queues/${queueName}/pending-messages?ns=${ns}`);
};

export const purgeDeadLetteredMessages = async (ns: string, queueName: string) => {
    return axios.delete(`${API_URL}/api/queues/${queueName}/dead-lettered-messages?ns=${ns}`);
};

export const purgePendingMessages = async (ns: string, queueName: string) => {
    return axios.delete(`${API_URL}/api/queues/${queueName}/pending-messages?ns=${ns}`);
};

export const purgePendingMessagesWithPriority = async (ns: string, queueName: string) => {
    return axios.delete(`${API_URL}/api/queues/${queueName}/pending-messages-with-priority?ns=${ns}`);
};

export const requeueDeadLetteredMessage = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number
) => {
    return axios.post(
        `${API_URL}/api/queues/${queueName}/dead-lettered-messages/${messageId}/requeue?ns=${ns}&sequenceId=${sequenceId}`
    );
};

export const requeueAcknowledgedMessage = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number
) => {
    return axios.post(
        `${API_URL}/api/queues/${queueName}/acknowledged-messages/${messageId}/requeue?ns=${ns}&sequenceId=${sequenceId}`
    );
};

export const requeueDeadLetteredMessageWithPriority = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number,
    priority: number
) => {
    return axios.post(
        `${API_URL}/api/queues/${queueName}/dead-lettered-messages/${messageId}/requeue?ns=${ns}&sequenceId=${sequenceId}&priority=${priority}`
    );
};

export const requeueAcknowledgedMessageWithPriority = async (
    ns: string,
    queueName: string,
    messageId: string,
    sequenceId: number,
    priority: number
) => {
    return axios.post(
        `${API_URL}/api/queues/${queueName}/acknowledged-messages/${messageId}/requeue?ns=${ns}&sequenceId=${sequenceId}&priority=${priority}`
    );
};
