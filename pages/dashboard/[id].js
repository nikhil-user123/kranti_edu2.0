import Link from "next/link";
import { useRouter } from "next/router";

const Course = () => {
    const router = useRouter()
    console.log(router.query.id);
    return (
        <div >
            <h1><Link style={{color : "black"}} href="/dashboard">back to dashboard</Link></h1>
            <p>i am dynamic route.<strong>{`===> ${router.query.id}`}</strong></p>
        </div>
    );  
}

export default Course;