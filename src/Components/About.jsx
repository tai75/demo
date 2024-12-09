import React from 'react'
import pic from '../assets/meals2.jpg'

const About = () => {
  return (
    <section className='about'>
      <main>
        <div>
          <img src={pic} alt="img" />
          <h1>Ăn Lành Mạnh</h1>
          <p>Chúng tôi tại Ăn Lành Mạnh! giao hàng mỗi ngày trong tuần; đảm bảo sẽ có mặt tại cửa nhà bạn mọi nơi. Bữa ăn của bạn đã sẵn sàng và chờ bạn thưởng thức, thật dễ dàng và tiện lợi!
            <br />
            Các bữa ăn từ thực vật bổ dưỡng của chúng tôi bao gồm nhiều trái cây, rau củ, ngũ cốc nguyên hạt và một lượng vừa phải chất béo không bão hòa, không có sản phẩm từ sữa, giúp bạn duy trì cân nặng ổn định. Việc có một sự đa dạng tốt của những thực phẩm này mỗi ngày sẽ giảm bớt không gian cho những thực phẩm có hàm lượng chất béo và đường cao - một nguyên nhân hàng đầu gây tăng cân.
          </p>
        </div>
      </main>
    </section>
  )
}

export default About
