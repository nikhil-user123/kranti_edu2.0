import styles from '@/styles/dashboard.module.css'
import Image from 'next/image';
import { Courses } from '@/helper/constants';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useAuth } from '../useAuth';


const Dashboard = () => {
    useAuth();
    return (
        <div className={styles.dashboard_container} >
            <div className={styles.courses_section}>
                <span>
                    <h2>My Courses</h2>
                    <hr />
                </span>
                <div className={styles.courses}>
                    {
                        Courses.map((course, index) => (
                            <div key={index} className={styles.card}>
                                {/* <iframe width="200" height="100" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <Image className={styles.image} src={course.url} alt="image" width="200" height="100" />
                                <strong>{course.subject}</strong>
                                <p>{course.desctiption}</p>
                                <Link href={`/dashboard/${course.id}`}>
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