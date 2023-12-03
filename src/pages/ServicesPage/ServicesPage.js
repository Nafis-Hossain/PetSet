import React, { useEffect, useState } from 'react'
import SingleService from '../../components/Services/SingleService/SingleService';
import { Spinner } from 'react-bootstrap';

const ServicesPage = () => {
    const [services, setServices] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.org/posts');
                const jsonData = await response.json();
                setServices(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container mt-3 centering_items_flex' style={{ flexDirection: 'column', flexWrap: 'nowrap' }}>
            <h3>Our services for your PET</h3>
            <div className='centering_items_flex' >
                {services &&
                    services.map((service) => (
                        <SingleService service={service} key={service.id} />
                    ))
                }
                {!services &&
                    <div className='centering_items_flex'>
                        <Spinner animation='border' />
                    </div>
                }
            </div>
        </div>
    )
}

export default ServicesPage