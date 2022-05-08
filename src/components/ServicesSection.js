import back from "../image/back.png";
import pay from "../image/pay.png";
import garanti from "../image/gr.png";
import gift from "../image/gift.png";
import post from "../image/free.png";

const ServicesSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={garanti} alt="garanti" />
                <p>زمانت اصالت</p>
                <p>اصالت برند محصول</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={post} alt="post" />
                <p>ارسال رایگان</p>
                <p>بالای 300 هزار تومن</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={back} alt="back" />
                <p>بازگشت محصول</p>
                <p>بی قید و شرط تا سه روز</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={pay} alt="pay" />
                <p>پرداخت در محل</p>
                <p>برای سفارش های قم</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={gift} alt="gift" />
                <p>سورپرایز هفته</p>
                <p>تخفیف و هدایای هفتگی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
