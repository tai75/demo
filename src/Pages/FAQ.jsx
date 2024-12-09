import React from 'react'

const FAQ = () => {
    return (
        <section className='faq p-3'>
            <span className='faq-title'>FAQs</span>
            <div className="accordion" id="ac">
                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Những mẹo nào cho những ai muốn chuyển sang ăn nhiều thực phẩm từ thực vật hơn?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac1">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac1" data-bs-parent="#ac">
                        <p>Hãy đối xử tốt với bản thân, từ từ và tận hưởng quá trình. Học hỏi càng nhiều càng tốt, và hãy giải quyết từng điều mới một để không cảm thấy quá tải. Bắt đầu từ những điều nhỏ. Hãy xem xét việc thay thế sữa bò bằng sữa yến mạch, sữa đậu nành hoặc sữa hạnh nhân. Sau đó, hãy cân nhắc việc thay thế sữa chua từ sữa động vật bằng sữa chua từ thực vật. May mắn thay, hiện có nhiều sản phẩm thay thế thịt và sữa từ thực vật trên thị trường. Bạn cũng có thể tìm các phiên bản từ thực vật của những công thức mà bạn đã thích.
                        </p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Các loại thực phẩm bổ sung nào được khuyến nghị cho người ăn chay?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac2">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac2" data-bs-parent="#ac">
                        <p>Chúng tôi khuyên bạn nên bổ sung vitamin B12, vitamin D và có thể là một loại thực phẩm bổ sung omega-3 từ tảo. Liều lượng và số lượng bạn cần phụ thuộc vào một số yếu tố như tuổi tác, giới tính, vị trí địa lý, mùa, chế độ ăn uống và lối sống..</p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Ăn Lành Mạnh chỉ hướng đến những khách hàng ăn chay?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac3">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac3" data-bs-parent="#ac">
                        <p>Chắc chắn là không! Các bữa ăn của Ăn Lành Mạnh có thể được mọi người thưởng thức, bất kể lựa chọn chế độ ăn uống. Tại Ăn Lành Mạnh, chúng tôi tin vào nhiều lợi ích về sức khỏe, môi trường và đạo đức của việc theo lối sống dựa trên thực vật, nhưng chúng tôi sẽ không bao giờ ép buộc ai cả. Cuối cùng, đây là quyết định của bạn. Chúng tôi hy vọng rằng nếu bạn chọn thêm nhiều thực phẩm từ thực vật vào cuộc sống của mình, các bữa ăn của chúng tôi sẽ giúp bạn cảm thấy tự tin hơn khi làm điều đó</p>
                    </div>
                </div>
                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Các món ăn của Ăn Lành Mạnh có giá cả phải chăng không?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac4">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac4" data-bs-parent="#ac">
                        <p>Chắc chắn rồi! Trung bình, mọi người chi khoảng 50-100 nghìn mỗi ngày cho thực phẩm mà không đảm bảo khẩu phần hợp lý, sự tiện lợi, vitamin và khoáng chất cân bằng, dinh dưỡng, hoặc chất lượng tổng thể. Ăn Lành Mạnh cung cấp cho bạn tất cả những lợi ích đó với mức giá hàng ngày tương đương. Giá cả của chúng tôi xuất phát từ chất lượng. Các đầu bếp có kinh nghiệm cao và nguyên liệu chất lượng hàng đầu là điều chúng tôi yêu cầu để đảm bảo bạn nhận được đúng những gì bạn đã trả tiền.
                        </p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Các sản phẩm được giao cho tôi như thế nào và khi nào?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac5">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac5" data-bs-parent="#ac">
                        <p>Các đơn hàng của bạn được giao đến tận nơi vào mỗi ngày trong tuần; đảm bảo sẽ có mặt trước cửa nhà bạn đúng giờ. Chúng tôi chỉ đơn giản là để bữa ăn của bạn tại địa chỉ của bạn. Bữa ăn của bạn đã sẵn sàng và chờ bạn thưởng thức, thật dễ dàng và tiện lợi.!</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FAQ
