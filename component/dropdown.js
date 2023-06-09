import { Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
const UserMenu = ({mobile_mode}) => {
    const [profile, setProfile] = useState(null);
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('token');

        router.push('/login');
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.post('http://localhost:5000/showprofile', { token });
                console.log(response)
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <>
            <Dropdown >
                <Dropdown.Trigger >
                    {profile ? (
                        <Avatar
                            className="mx-10"
                            bordered
                            size="lg"
                            as="button"
                            src={profile.link}
                            css={{"z-index": -1}}
                        />
                    ) : (
                        <Avatar
                            className="mx-10"
                            bordered
                            size="lg"
                            as="button"
                            src="/user.jpg"
                        />
                    )}
                </Dropdown.Trigger>
                <Dropdown.Menu >
                    <Dropdown.Item key="Home">
                        <Link className="color-black" href="/">
                            <div className='full-width'>Home</div>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="Dashboard">
                        <Link className="color-black" href="/dashboard">
                            <div className='full-width'>Dashboard</div>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="Logout">
                        <Link className="color-black" href="#">
                            <div className='full-width' onClick={handleLogout}>Logout</div>
                        </Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default UserMenu;