import styles from '@/styles/dashboard.module.css'
import Image from 'next/image';
import { Courses } from '@/helper/constants';



const Dashboard = () => {
    return (
        <div className={styles.dashboard_container} >
            <header className={styles.header}>
                <h1>
                    Kranti
                </h1>
                <p>Lets change india together</p>
            </header>
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
                        </div>))

                    }

                </div>
            </div>  
        </div>
    );
}

export default Dashboard;