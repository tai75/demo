import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const SocialMedia = () => {
    return (
        <article className='sm'>
            <a className='a-ig' href="https://www.instagram.com/hiiamtaismile/">
                <div className='ig' >
                    <InstagramIcon />
                    <span>Chia sẻ</span>
                </div>
            </a>
            <div className='fb'>
                <FacebookIcon />
                <span>Thích</span>
            </div>

            <div className='twt'>
                <TwitterIcon />
                <span>Đăng lại</span>
            </div>

            <div className='em'>
                <EmailIcon />
                <span>Email</span>
            </div>
        </article>
    )
}

export default SocialMedia
