import React from "react";
import Carousel from "react-material-ui-carousel";
import img from "../../assets/dota-2-logo-wallpaper-preview.jpg";
import GetApi from "../SpinWheels/services/getfunction.js";

function Slider() {
  const { dataRes } = GetApi("api/sliders");
  console.log(dataRes, "slider");
  return (
    <div>
      <Carousel
        animation="slide"
        navButtonsWrapperProps={
          {
            // Move the buttons to the bottom. Unsetting top here to override default style.
          }
        }
        sx={{ height: "200px" }}>
        {/* <img src={img} alt="" style={{ width: "100%", height: "200px" }} />
        <img src={img} alt="" style={{ width: "100%", height: "200px" }} /> */}
        {dataRes.map((item, index) => (
          <img src={item.image} alt="" style={{ width: "400px", height: "200px" }} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
