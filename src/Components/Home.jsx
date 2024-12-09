import React, {useEffect} from 'react'

import { AiOutlineHeart } from 'react-icons/ai'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import wallppr from '../assets/home2.jpg'
import wallppr2 from '../assets/vegan.jpg'
import img3 from '../assets/img3.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.jpg'

gsap.registerPlugin(ScrollTrigger)


const Home = () => {


    useEffect(() => {

        /*GSAP*/
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content p',
                start: 'top 90%',
                //markers:true
            }
        });
        tl3.fromTo('.content p', { y: 100, opacity: 0, duration: 1.5 }, { y: 0, opacity: 1, duration: 1.5 })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content h1',
                start: 'top 80%',
                //markers:true    

            }
        })
        tl4.fromTo('.content h1', { x: 50, opacity: 0, duration: 1.5 }, { x: 0, opacity: 1, duration: 1.5 })
        /*CONTAINER1*/
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.img1',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl.fromTo(".img1", { width: '0%', opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgOne',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl5.fromTo(".imgOne", { width: '0%', opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        /*CONTAINER2*/
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.img2',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl2.fromTo(".img2", { width: 0, opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgTwo',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl6.fromTo(".imgTwo", { width: 0, opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')
        /**/

    }, [])



    return (
        <section>
            <main>
                <div className='wall-home'>

                    <div>
                        <img src={wallppr} alt="img" />
                        <img className='res-img' src={wallppr2} alt="img2" />
                        <div className='title'>
                            <span className='t1'>Ăn lành mạnh & </span>
                            <span className='t2'>Giàu dinh dưỡng,</span>
                            <br />
                            <span className='t3'>là những gì mà chúng tôi mong muốn</span>
                        </div>
                    </div>


                    <div className='container-title'>
                        <img src={img3} alt="intro" />
                        <div className='content'>
                            <h1>Chúng Tôi là Ăn Lành Mạnh!</h1>
                            <p>Nhiệm vụ của chúng tôi là làm ra những thức ăn thanh đạm và giàu dinh dưỡng đén cho mọi người <br /> Chúng tôi phục những bữa ăn lành mạnh và giàu dinh dưỡng ngay tại nhà bạn. Chúng tôi cũng giúp bạn cảm thấy thoải mái và được hỗ trợ trong việc đưa nhiều thực phẩm từ thực vật vào bữa ăn, đồ ăn nhẹ, món tráng miệng và mọi thứ khác!</p>
                            <Link to='/about'>
                                <button onClick={() => { console.log('you clicked learn-more') }}>Learn more <AiOutlineHeart /> </button>
                            </Link>
                        </div>
                    </div>


                    <div className='container1'>
                        <div className='content1'>
                            <h1>Ăn uống là rất cần thiết.Nhưng ăn uống một cách khoa học chính là một nghệ thuật.</h1>
                            <p>Ăn những gì tốt nhất,bỏ những gì hại nhất.</p>
                        </div>
                        <img className='img1 ' src={img1} alt="img1" />
                        <img className='imgOne' src={img1} alt="img1" />
                    </div>

                    <div className='container2'>
                        <img className='img2' src={img2} alt="img2" />
                        <img className='imgTwo' src={img2} alt="img2" />
                        <div className='content2'>
                            <h1>Mục đích của chúng tôi là giúp cho mọi người có một đời sống sức khỏe và tốt đẹp hơn.</h1>
                            <p>Không sử dụng màu hóa chất và các gia vị nhân tạo</p>
                        </div>
                    </div>


                </div>
            </main>
        </section >
    )
}

export default Home
