import Link from "next/link";

const Course = ({params}) => {
    return (
        <div >
            <Link href="/dashboard">back to dashboard</Link>
            i am dynamic route.
        </div>
    );
}

export default Course;