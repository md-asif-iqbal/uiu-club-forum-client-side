import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ForumBanner from '../CLub&Forum/ForumBanner';
import ForumRegister from '../CLub&Forum/ForumRegister';
import ForumFAQ from '../CLub&Forum/ForumFAQ';
import ForumAnnouncment from '../CLub&Forum/ForumActivity/ForumAnnouncment';
import ForumActivitys from '../CLub&Forum/ForumActivity/ForumActivitys';
import ForumBlogs from '../CLub&Forum/ForumActivity/ForumBlogs';

const Services = () => {
    const [serviceId, setServiceId] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:8000/service/${id}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setServiceId(data)
                console.log(data);
            });
    }, [id]);
    console.log(serviceId)

    return (
        <div>
            <ForumBanner serviceId={serviceId} />
            <ForumRegister serviceId={serviceId} />
            <ForumAnnouncment serviceId={serviceId} />
            <ForumBlogs  serviceId={serviceId}/>
            <ForumActivitys serviceId={serviceId} />
            <ForumFAQ serviceId={serviceId} />

        </div>
    );
};

export default Services;