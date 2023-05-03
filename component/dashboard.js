import styles from '@/styles/dashboard.module.css'
import Image from 'next/image';

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
                    <div className={styles.card}>
                        <Image className={styles.image} src="/course_img.jpg" alt="image" width="200" height="100" />
                        <strong>Class 6</strong>
                        <p>ode has to be executed after the state has been updated ?
                            Place that code in the call back function which is
                            the second argument to the setState method.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src="/course_img.jpg" alt="image" width="200" height="100" />
                        <strong>Class 7</strong>
                        <p>ode has to be executed after the state has been updated ?
                            Place that code in the call back function which is
                            the second argument to the setState method.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src="/course_img.jpg" alt="image" width="200" height="100" />
                        <strong>Class 8</strong>
                        <p>ode has to be executed after the state has been updated ?
                            Place that code in the call back function which is
                            the second argument to the setState method.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;