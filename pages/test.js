import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from 'react';
import axios from 'axios';
import Image from "next/image";

const Course = () => {

    // const [modules, setModules] = useState([]);

    // const router = useRouter()
    // const id = router.query.id
    // console.log("course id",id );

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //       try {
    //         const response = await axios.post('http://localhost:5000/sendproduct', { productid : {id} });
    //         console.log(response)
    //         setModules(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    
    //     fetchProfile();
    //   }, []);

    // console.log(modules)

    return (
        <div >
            {/* <h1><Link style={{color : "black"}} href="/dashboard">back to dashboard</Link></h1>
            {/* <p>i am dynamic route.<strong>{`===> ${id}`}</strong></p> */}
            {
                  // modules.map((module) => (
                  //   <div key={module._id}>
                  //     {/* <Image src={module.link} alt="Module Image" width={100} height={100} /> */}
                  //     <iframe width="200" height="100" src={module.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  //     <h2>{module.subject}</h2>
                  //     <h2>{module.title}</h2>
                  //   </div>
                  // ))
            }
        </div>
    );  
}

export default Course;