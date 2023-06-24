import styles from '@/styles/dashboard.module.css'
import Image from 'next/image';
// import { Courses } from '@/helper/constants';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import  useAuth  from '../useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {
    // useAuth();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post(`https://kranti-back.onrender.com/sendproduct`);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div className={styles.dashboard_container} >
            <div className={styles.courses_section}>
                <span>
                    <h2>My Courses</h2>
                    <hr />
                </span>
                <div className={styles.courses}>
                    {
                        products.map((course) => (
                            <div key={course._id} className={styles.card}>
                                {/* <iframe width="200" height="100" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <Image className={styles.image} src={course.image} alt="image" width="200" height="100" />
                                <strong>Subject : {course.subject}</strong>
                                <p>Title : {course.title.substring(0,18)}</p>
                                <p>Description : {course.description.substring(0,50)}...</p>
                                <Link className={styles.button} href={`/dashboard/${course._id}`} >
                                    <Button>click here</Button>
                                </Link>
                            </div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;