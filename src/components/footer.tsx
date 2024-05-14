import React from "react";
import SocialLink from "./svgs/sociallink";
import SocialLinkM from "./svgs/sociallinkm";
import Sldlogo from "./svgs/sldlogo";

function Footer() {
  return (
    <>
      <div className="w-full flex flex-col bg-[#00103E] px-[4%] pt-[2%] gap-3">
        <div className="flex w-full justify-center">
          <Sldlogo />
        </div>
        <div className="flex w-full justify-center">
          <div className="w-2/6 text-[#F0FDFF]">
            <p className="text-center leading-5 py-5 text-[14px]">
              JALAN MELONG TENGAH NO.138 CIMAHI SELATAN, KOTA CIMAHI, JAWA BARAT
              40534
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#F0FDFF]"></div>
        <div className="grid grid-cols-5 items-center font-bold text-[16px] text-[#2ABDFB]">
          <div className="flex justify-start">
            <a href="/#">CONTACT US</a>
          </div>
          <div></div>

          <div className="flex justify-end">
            <a href="/#">WORK WITH US</a>
          </div>
          <div className="flex justify-end">
            <a href="/#">PRIVACY POLICY</a>
          </div>

          <div className=" flex justify-end">
            <SocialLinkM />
          </div>
        </div>
      </div>
      <div className="px-[4%] flex flex-col text-[14px] text-[#F0FDFF] bg-[#00103E] pb-[2%]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div>
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.375 0H2.625C1.92881 0 1.26113 0.274842 0.768843 0.764067C0.27656 1.25329 0 1.91683 0 2.6087V12.3913C0 13.0832 0.27656 13.7467 0.768843 14.2359C1.26113 14.7252 1.92881 15 2.625 15H18.375C19.0712 15 19.7389 14.7252 20.2312 14.2359C20.7234 13.7467 21 13.0832 21 12.3913V2.6087C21 1.91683 20.7234 1.25329 20.2312 0.764067C19.7389 0.274842 19.0712 0 18.375 0ZM6.36562 9.59347L3.74062 12.2022C3.61261 12.2898 3.45744 12.3295 3.30275 12.3141C3.14806 12.2987 3.00389 12.2292 2.89595 12.118C2.788 12.0068 2.72329 11.8611 2.71333 11.7069C2.70337 11.5528 2.74881 11.4001 2.84156 11.2761L5.46656 8.6674C5.58952 8.54593 5.75585 8.47774 5.92922 8.47774C6.10259 8.47774 6.26892 8.54593 6.39188 8.6674C6.4517 8.72973 6.4985 8.80321 6.52959 8.88362C6.56067 8.96403 6.57541 9.04976 6.57297 9.13587C6.57053 9.22197 6.55096 9.30675 6.51537 9.38529C6.47978 9.46383 6.42888 9.53459 6.36562 9.59347V9.59347ZM10.5 10.4348C10.3467 10.4351 10.1981 10.382 10.08 10.2848L2.86125 4.41521C2.78869 4.36293 2.72768 4.29643 2.68197 4.21982C2.63626 4.14322 2.60683 4.05811 2.59548 3.96977C2.58413 3.88142 2.59113 3.7917 2.61601 3.70613C2.64089 3.62057 2.68314 3.54099 2.74016 3.47228C2.79718 3.40356 2.86775 3.34719 2.94754 3.30663C3.02732 3.26606 3.11462 3.24216 3.20406 3.23641C3.29349 3.23066 3.38316 3.24316 3.46754 3.27317C3.55192 3.30318 3.62923 3.35004 3.69469 3.41088L10.5 8.9413L17.2791 3.41088C17.3458 3.35634 17.4227 3.31542 17.5054 3.29049C17.588 3.26555 17.6748 3.25706 17.7608 3.26555C17.8468 3.27403 17.9302 3.2993 18.0063 3.3399C18.0824 3.38051 18.1498 3.43566 18.2044 3.50217C18.3132 3.6357 18.3645 3.80651 18.3473 3.97747C18.3301 4.14843 18.2458 4.30573 18.1125 4.41521L10.8938 10.2848C10.7827 10.3765 10.6443 10.4292 10.5 10.4348V10.4348ZM18.1781 12.2022C18.0552 12.3236 17.8888 12.3918 17.7155 12.3918C17.5421 12.3918 17.3758 12.3236 17.2528 12.2022L14.6278 9.59347C14.5663 9.53284 14.5175 9.46072 14.4842 9.38125C14.4508 9.30178 14.4337 9.21653 14.4337 9.13044C14.4337 9.04434 14.4508 8.95909 14.4842 8.87962C14.5175 8.80015 14.5663 8.72803 14.6278 8.6674C14.7508 8.54593 14.9171 8.47774 15.0905 8.47774C15.2638 8.47774 15.4302 8.54593 15.5531 8.6674L18.1781 11.2761C18.2396 11.3367 18.2885 11.4088 18.3218 11.4883C18.3551 11.5678 18.3722 11.653 18.3722 11.7391C18.3722 11.8252 18.3551 11.9105 18.3218 11.9899C18.2885 12.0694 18.2396 12.1415 18.1781 12.2022V12.2022Z"
                  fill="#E4F7FF"
                />
              </svg>
            </div>
            <a href="/#">ADMIN@SAPTALOKADIGITAL.COM</a>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8785 11.3687C14.75 11.22 14.591 11.1007 14.4122 11.019C14.2335 10.9373 14.0393 10.895 13.8428 10.895C13.6462 10.895 13.452 10.9373 13.2733 11.019C13.0946 11.1007 12.9355 11.22 12.807 11.3687C12.3231 11.8467 11.8391 12.3306 11.3611 12.8205C11.3161 12.8816 11.2493 12.9231 11.1746 12.9363C11.0999 12.9495 11.0229 12.9334 10.9598 12.8913C10.647 12.7202 10.3106 12.5844 10.0096 12.3956C8.62835 11.5004 7.40407 10.3838 6.38588 9.09059C5.85427 8.46385 5.41505 7.76428 5.08158 7.01315C5.04531 6.95087 5.0331 6.87747 5.04723 6.8068C5.06136 6.73613 5.10087 6.67308 5.1583 6.62954C5.64225 6.15739 6.11439 5.67936 6.59243 5.19541C6.74844 5.06581 6.874 4.90344 6.96017 4.71983C7.04634 4.53623 7.09102 4.33592 7.09102 4.1331C7.09102 3.93028 7.04634 3.72994 6.96017 3.54634C6.874 3.36274 6.74844 3.20036 6.59243 3.07077L5.45339 1.93173C5.06387 1.54221 4.67436 1.14679 4.27304 0.751374C4.14344 0.604424 3.98406 0.486739 3.80548 0.406125C3.6269 0.325511 3.4332 0.283813 3.23727 0.283813C3.04134 0.283813 2.84765 0.325511 2.66907 0.406125C2.49049 0.486739 2.3311 0.604424 2.20151 0.751374C1.71166 1.22942 1.24542 1.72516 0.743767 2.1973C0.302113 2.61384 0.037919 3.18453 0.00605446 3.79078C-0.0359877 4.78506 0.141328 5.77641 0.525414 6.69447C1.26153 8.60293 2.32171 10.3699 3.65925 11.9175C5.4197 14.0315 7.61079 15.7458 10.0863 16.9458C11.1863 17.5219 12.3901 17.873 13.6274 17.9787C14.0418 18.0252 14.4614 17.9725 14.8514 17.8247C15.2414 17.6769 15.5905 17.4383 15.87 17.1288C16.2831 16.6626 16.7494 16.2376 17.192 15.795C17.3451 15.6648 17.468 15.5029 17.5523 15.3205C17.6366 15.1381 17.6803 14.9395 17.6803 14.7386C17.6803 14.5376 17.6366 14.3391 17.5523 14.1567C17.468 13.9743 17.3451 13.8124 17.192 13.6822C16.4287 12.911 15.6576 12.1398 14.8785 11.3687Z"
                  fill="#E4F7FF"
                />
                <path
                  d="M17.9415 7.99876C16.4049 4.40921 13.5362 1.55535 9.93874 0.0372731C9.79386 -0.016811 9.63353 -0.011878 9.49225 0.0510334C9.35098 0.113945 9.24005 0.229794 9.18331 0.373661C9.1524 0.445652 9.13614 0.52308 9.13546 0.601425C9.13478 0.67977 9.1497 0.757468 9.17937 0.829982C9.20903 0.902496 9.25284 0.968371 9.30824 1.02378C9.36363 1.07919 9.42951 1.12302 9.50201 1.1527C12.8181 2.55368 15.4623 5.18518 16.8792 8.49451C16.9426 8.63485 17.0583 8.74487 17.2016 8.80111C17.3449 8.85734 17.5046 8.85533 17.6465 8.7955C17.7191 8.76371 17.7846 8.71759 17.839 8.65992C17.8935 8.60224 17.9357 8.53419 17.9633 8.45982C17.9908 8.38545 18.0031 8.3063 17.9993 8.22708C17.9956 8.14787 17.976 8.07021 17.9415 7.99876Z"
                  fill="#E4F7FF"
                />
                <path
                  d="M9.19509 4.35738C11.2052 5.20404 12.8087 6.797 13.6686 8.80142C13.7143 8.90029 13.7864 8.98462 13.8771 9.04503C13.9677 9.10544 14.0733 9.13961 14.1821 9.14373C14.2618 9.14313 14.3404 9.125 14.4123 9.09062C14.548 9.02412 14.653 8.90809 14.7057 8.76644C14.7584 8.62479 14.7548 8.46832 14.6956 8.32928C13.7208 6.05359 11.9014 4.24472 9.62002 3.28327C9.47954 3.2334 9.32539 3.23854 9.18854 3.29766C9.05169 3.35678 8.94228 3.46548 8.8823 3.60195C8.82681 3.7439 8.82839 3.9018 8.88669 4.04261C8.945 4.18341 9.05551 4.29621 9.19509 4.35738Z"
                  fill="#E4F7FF"
                />
              </svg>
            </div>
            <a href="/#">+6283873296832</a>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8785 11.3687C14.75 11.22 14.591 11.1007 14.4122 11.019C14.2335 10.9373 14.0393 10.895 13.8428 10.895C13.6462 10.895 13.452 10.9373 13.2733 11.019C13.0946 11.1007 12.9355 11.22 12.807 11.3687C12.3231 11.8467 11.8391 12.3306 11.3611 12.8205C11.3161 12.8816 11.2493 12.9231 11.1746 12.9363C11.0999 12.9495 11.0229 12.9334 10.9598 12.8913C10.647 12.7202 10.3106 12.5844 10.0096 12.3956C8.62835 11.5004 7.40407 10.3838 6.38588 9.09059C5.85427 8.46385 5.41505 7.76428 5.08158 7.01315C5.04531 6.95087 5.0331 6.87747 5.04723 6.8068C5.06136 6.73613 5.10087 6.67308 5.1583 6.62954C5.64225 6.15739 6.11439 5.67936 6.59243 5.19541C6.74844 5.06581 6.874 4.90344 6.96017 4.71983C7.04634 4.53623 7.09102 4.33592 7.09102 4.1331C7.09102 3.93028 7.04634 3.72994 6.96017 3.54634C6.874 3.36274 6.74844 3.20036 6.59243 3.07077L5.45339 1.93173C5.06387 1.54221 4.67436 1.14679 4.27304 0.751374C4.14344 0.604424 3.98406 0.486739 3.80548 0.406125C3.6269 0.325511 3.4332 0.283813 3.23727 0.283813C3.04134 0.283813 2.84765 0.325511 2.66907 0.406125C2.49049 0.486739 2.3311 0.604424 2.20151 0.751374C1.71166 1.22942 1.24542 1.72516 0.743767 2.1973C0.302113 2.61384 0.037919 3.18453 0.00605446 3.79078C-0.0359877 4.78506 0.141328 5.77641 0.525414 6.69447C1.26153 8.60293 2.32171 10.3699 3.65925 11.9175C5.4197 14.0315 7.61079 15.7458 10.0863 16.9458C11.1863 17.5219 12.3901 17.873 13.6274 17.9787C14.0418 18.0252 14.4614 17.9725 14.8514 17.8247C15.2414 17.6769 15.5905 17.4383 15.87 17.1288C16.2831 16.6626 16.7494 16.2376 17.192 15.795C17.3451 15.6648 17.468 15.5029 17.5523 15.3205C17.6366 15.1381 17.6803 14.9395 17.6803 14.7386C17.6803 14.5376 17.6366 14.3391 17.5523 14.1567C17.468 13.9743 17.3451 13.8124 17.192 13.6822C16.4287 12.911 15.6576 12.1398 14.8785 11.3687Z"
                  fill="#E4F7FF"
                />
                <path
                  d="M17.9415 7.99876C16.4049 4.40921 13.5362 1.55535 9.93874 0.0372731C9.79386 -0.016811 9.63353 -0.011878 9.49225 0.0510334C9.35098 0.113945 9.24005 0.229794 9.18331 0.373661C9.1524 0.445652 9.13614 0.52308 9.13546 0.601425C9.13478 0.67977 9.1497 0.757468 9.17937 0.829982C9.20903 0.902496 9.25284 0.968371 9.30824 1.02378C9.36363 1.07919 9.42951 1.12302 9.50201 1.1527C12.8181 2.55368 15.4623 5.18518 16.8792 8.49451C16.9426 8.63485 17.0583 8.74487 17.2016 8.80111C17.3449 8.85734 17.5046 8.85533 17.6465 8.7955C17.7191 8.76371 17.7846 8.71759 17.839 8.65992C17.8935 8.60224 17.9357 8.53419 17.9633 8.45982C17.9908 8.38545 18.0031 8.3063 17.9993 8.22708C17.9956 8.14787 17.976 8.07021 17.9415 7.99876Z"
                  fill="#E4F7FF"
                />
                <path
                  d="M9.19509 4.35738C11.2052 5.20404 12.8087 6.797 13.6686 8.80142C13.7143 8.90029 13.7864 8.98462 13.8771 9.04503C13.9677 9.10544 14.0733 9.13961 14.1821 9.14373C14.2618 9.14313 14.3404 9.125 14.4123 9.09062C14.548 9.02412 14.653 8.90809 14.7057 8.76644C14.7584 8.62479 14.7548 8.46832 14.6956 8.32928C13.7208 6.05359 11.9014 4.24472 9.62002 3.28327C9.47954 3.2334 9.32539 3.23854 9.18854 3.29766C9.05169 3.35678 8.94228 3.46548 8.8823 3.60195C8.82681 3.7439 8.82839 3.9018 8.88669 4.04261C8.945 4.18341 9.05551 4.29621 9.19509 4.35738Z"
                  fill="#E4F7FF"
                />
              </svg>
            </div>
            <a href="/#">+6281999737800</a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-5 bg-[#000820] text-[#F0FDFF] text-[14px]">
        <p>© 2024 PT SAPTALOKA DIGITAL - ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
}

export default Footer;
