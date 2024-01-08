import "./App.css";
import Pagination from "./Components/Pagonation";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function App() {
  return (
    <div>
      <div className="lg:flex lg:flex-row flex  flex-col-reverse justify-start lg:justify-between ">
        {/* Left Content */}

        <div className="left-content">
          <div className="logo hidden lg:block mt-[33px] ml-[100px]">
            <img src="truck.png" alt="" />
          </div>
          <div className=" lg:mt-[111px] lg:ml-[100px]">
            <div className="lg:text-5xl text-[#0E2368] mt-[75px] m-auto lg:m-0  text-center  lg:mt-[26px] lg:text-left text-4xl w-2/3 font-bold lg:leading-[4rem] font-sans">
              Discover the <br /><span className="text-red-500">Best</span>  Food and Drinks
            </div>
            <div className="mt-[21px] lg:mt-[26px] text-center lg:text-left text-[#444957]">
              Naturally made Healthcare Products for the <br /> better care &
              support of your body.
            </div>
            <div className="lg:text-start text-center">
              <button className="bg-red-500 text-white lg:mt-[41px] mt-[28px] mb-[31px]  px-5 py-3 rounded-3xl">
                Explore Now!
              </button>
            </div>
          </div>
        </div>
       

        {/* Right Content */}
        <div className="right-content relative">
          <div className=" absolute z-30 top-0 right-0">
            <button className="border m-8 p-3 rounded-3xl text-white btn">
              Get In Touch
            </button>
          </div>
          <img
            className="absolute lg:w-[735px] lg:h-[804px] w-100 h-[100%]"
            src={"pizza.png"}
            alt=""
          />
          <img
            className="relative lg:w-[735px] lg:h-[804px] w-100 h-[100%] top-0"
            src={"design.png"}
            alt=""
          />
        </div>
      </div>




      {/* about page */}
      <div className="bg-gray-100 lg:mt-[186px] mt-0 flex items-center justify-evenly">
        <div className="w-[384px] h-[468px] hidden lg:block">
          <img src="about.png" alt="" />
        </div>
        <div className="text-center lg:text-start">
          <div>
            <h1 className="font-bold text-4xl mt-[140px] lg:mt-[107px] text-[#0E2368]">About Us</h1>
          </div>
          <div className="mx-[50px] lg:mx-[0px] mt-[21px] lg:mt-[27px] w-[275px] h-[139px] lg:w-[447px] lg:text-md text-sm lg:h-[138px] text-[#444957]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </div>
          <div className="lg:text-start my-[25px] lg:my-[15.5px]  mb-[135px] lg:mb-0  text-center">
            <button className="bg-[#E23744] text-white py-2 px-4  rounded-3xl">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="">
     
       
      <div class="text-[#0E2368] text-center lg:text-start lg:ml-[118px] mt-[157px] font-source-sans-pro font-semibold lg:text-5xl text-3xl leading-tight tracking-wider">
              Latest Articles
        </div>
        <div className="lg:mt-[41px] mt-[21px]">
           <Pagination/>
        </div>
     
      </div>
     

      {/* contact */}
      <div className="lg:flex items-center block bg-gray-100 justify-evenly">
        <div className="lg:pt-[123px] pt-[52px] lg:mb-[113px] ml-[142px] lg:ml-[103px]">
          <img src="truck.png" alt="" />
        </div>

        <div className="lg:mt-[64px] mt-[42px]">
          <div className="text-lg w-[94px] h-[27px] ml-[42px]  lg:ml-[211px] font-bold text-[#0E2368]">Contact Us</div>
          <div className="text-xs lg:text-sm lg:py-0 py-[28px] w-[275px] lg:ml-[210px] ml-[42px] lg:mt-[12px] h-[69px] text-[#646874]">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </div>
          <div className="text-[#646874] lg:text-sm text-xs  lg:ml-[210px] ml-[42px] h-[21px] ">example2020@gmail.com</div>
          <div className="text-[#646874] text-xs lg:text-sm py-[18px] lg:ml-[210px]   ml-[42px] h-[21px]">(904) 443-0343</div>
        </div>
        <div className="w-100">
        <div className="text-lg mt-[29px] lg:mt-[44px] ml-[42px] font-bold text-[#0E2368]">More</div>
        <div className="text-sm text-[#646874] lg:mt-[14px]">
            <p className="lg:mt-[14px] lg:py-0 py-[13px] lg:text-sm text-xs ml-[42px]">About Us</p>
            <p className="lg:mt-[14px] lg:py-0 py-[13px] lg:text-sm text-xs ml-[42px]">Produts</p>
            <p className="lg:mt-[14px] lg:py-0 py-[13px] lg:text-sm text-xs ml-[42px]">Career</p>
            <p className="lg:mt-[14px] lg:py-0 py-[13px] lg:text-sm text-xs ml-[42px]">Contact Us</p>
            </div>
        </div>
        <div className="w-100  lg:w-[18vw]">
        <div className="text-lg lg:mt-[48px]  lg:block hidden font-bold text-[#0E2368] ml-[42px]">Social Links</div>
          <div className="mb-8 lg:mt-[12px] lg:block text-[#0E2368] hidden ml-[42px]">
            <span><InstagramIcon/></span>
            <span className="mx-6 "><TwitterIcon/></span>
            <span><FacebookIcon/></span>
          </div>
          <div className="text-[#646874] text-sm text-center mt-[42px] lg:mt-[72px]">© 2022 Food Truck Example</div>
          <div className="text-center block lg:hidden pt-[14px] lg:pt-0 lg:pb-0 pb-[114px]">
            <InstagramIcon/> <span className="mx-6"><FacebookIcon/></span> <TwitterIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
