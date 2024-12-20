import React, { useContext, useEffect } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { HiOutlineBars2 } from 'react-icons/hi2';
import logo from '../assets/mylogo2.png';
import { gsap } from 'gsap';
import { AppContext } from './Context';
import AuthContext from './AuthContext'; // Import AuthContext
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isNavbarOpen, openNavbar, closeNavbar, total_items } = useContext(AppContext);
    const { user, logout } = useContext(AuthContext); // Lấy user và logout từ AuthContext

    useEffect(() => {
        gsap.fromTo(
            'nav',
            { y: '-100%', opacity: 0, duration: 1.5 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3' }
        );
        gsap.fromTo(
            '.navbar li',
            { duration: 0.75, opacity: 0 },
            { duration: 0.75, opacity: 1, stagger: 0.5, delay: 0.25 }
        );
    }, []);

    return (
        <div className={`outer-nav ${isNavbarOpen ? 'toggle-on' : 'toggle-off'}`}>
            <nav>
                <div className="navbar container-fluid">
                    <div className="nav1">
                        <ul>
                            <li>
                                <Link to="/about" onClick={closeNavbar}>
                                    Ăn Lành Mạnh! hoạt động như thế nào?
                                </Link>
                            </li>
                            <li>
                                <Link to="/articles" onClick={closeNavbar}>
                                    Bài Viết
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav2">
                        <Link to="/home" onClick={closeNavbar}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <Link to="/home" onClick={closeNavbar}>
                            <h3>Ăn Lành Mạnh</h3>
                        </Link>
                        <div className="badge rounded rounded-circle h-30 bg-success">
                            {total_items}
                        </div>
                    </div>
                    <div className="nav3">
                        <ul>
                            {!user ? (
                                <>
                                <li className="btn-register">
                                    <Link to="/register">Đăng Ký</Link>
                                </li>
                                <li className="btn-login">
                                <Link to="/login">Đăng Nhập</Link>
                            </li>
                            </>
                            
                            ) : (
                                <>
                                    <li className="username">Chào, {user.name}</li>
                                    <li className="btn-logout" onClick={logout}>
                                        Đăng Xuất
                                    </li>
                                </>
                            )}
                            <li className="meals">
                                <Link to="/shop" onClick={closeNavbar}>
                                    Menu
                                </Link>
                            </li>
                            <li className="btn-cart">
                                <Link to="/cart">
                                    <BsFillBagFill onClick={() => console.log('you clicked cart')} />
                                </Link>
                            </li>
                            <li className="btn-cross">
                                <RxCross1 onClick={closeNavbar} />
                            </li>
                            <li className="btn-bar">
                                <HiOutlineBars2 className="btn-bar-size" onClick={openNavbar} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
