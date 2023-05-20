import {Dropdown, Avatar} from '@nextui-org/react';
import Link from 'next/link';
const UserMenu = () => {
    return (
        <>
           <Dropdown>
                    <Dropdown.Trigger >
                        <Avatar
                            // css ={{"width": "auto"}}
                            className="mx-10"
                            bordered
                            size="lg"
                            as="button"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
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
                    </Dropdown.Menu>
                </Dropdown>
        </>
    );
}

export default UserMenu;