import shoe1 from "../image/shoe1.png";
import amir from "../image/amir.png";
const AboutSection = () => {
  return (
    <div>
      <div>
        <span>
          <img src={amir} alt="" />
        </span>
        <h2> کفش های مردانه،زنانه</h2>
        <h2>در رنگ های متنوع</h2>
        <button>نمایش</button>
      </div>
      <div>
        <img src={shoe1} alt="shoe" />
      </div>
    </div>
  );
};

export default AboutSection;
