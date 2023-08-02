import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams()
    return (
        <>
            <h1>Event Detail Page of ID {params.eventId} </h1>
        </>
    )
};

export default EventDetailPage;