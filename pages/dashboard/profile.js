import Image from "next/image";
import styles from "@/styles/profile.module.css"

const Profile = () => {
    return (
        <div className={styles.profile_container}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src="/background.jpg" alt="backgroung image" height={300} width={200} />
                </div>
                <div className={styles.profile_image}>
                    <Image src="/user.jpg" alt="userimage" height={100} width={100} />
                </div>
                <div className={styles.details}>
                    <div className={styles.card_content}>
                        <h3>Nikhil Prajapat</h3>
                        <p>
                            <strong>Student ID: </strong>321000001
                        </p>
                        <p><strong>Class: </strong>8th</p>
                        <p><strong>Section: </strong>A</p>
                    </div>
                    <div className={styles.general_info}>
                        <div className="card shadow-sm">
                            <div className="">
                                <h3 className={styles.table_header}>General Information</h3>
                            </div>
                            <div className="card-body pt-0">
                                <table className={styles.table}>
                                    <tr>
                                        <th width="40%">Roll</th>
                                        <td width="5%">:</td>
                                        <td>125</td>
                                    </tr>
                                    <tr>
                                        <th width="40%">Academic Year	</th>
                                        <td width="5%">:</td>
                                        <td>2020</td>
                                    </tr>
                                    <tr>
                                        <th width="40%">Gender</th>
                                        <td width="5%">:</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <th width="40%">Religion</th>
                                        <td width="5%">:</td>
                                        <td>Group</td>
                                    </tr>
                                    <tr>
                                        <th width="40%">blood</th>
                                        <td width="5%">:</td>
                                        <td>B+</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;