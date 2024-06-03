import ButtonA from "@/components/button";
import Image from "next/image";
import Changecolor from "../changecolor";
import PortofolioPrev from "@/components/pages/PortofolioPrev";
import ClientsPrev from "@/components/pages/ClientsPrev";
import CoreValue from "@/components/pages/CoreValue";
import ContactMail from "@/components/pages/ContactMail";
import NewsPrev from "@/components/pages/NewsPrev";
import Founder from "@/components/profileCard/founder";
import Team from "@/components/profileCard/team";

export default function About() {
  return (
    <main>
      <div className="h-screen w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[#000820]"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full h-full absolute">
          <div className="w-full h-screen flex flex-col">
            <div className=" h-[65%] inset-0 flex items-center w-full px-[4%] pt-[100px]">
              <div className="text-white w-full flex flex-col items-start text-start  leading-[65px]">
                <h1 className="light-text text-sky-400 text-[64px] font-extrabold">
                  ABOUT US
                </h1>
              </div>
              <div className="flex flex-col z-0  px-[2%] w-full items-center pt-64 gap-3">
                <div className="absolute z-10 top-[130px] right-[230px]">
                  <img
                    alt=""
                    className="w-[453px] h-[267px]"
                    src="/Rectangle 61.png"
                  />
                </div>
                <div className="absolute z-20 top-[263px] right-[425px]">
                  <img
                    alt=""
                    className="w-[453px] h-[267px]"
                    src="/Rectangle 62.png"
                  ></img>
                </div>
                <div className="absolute z-30 top-[419px] right-[110px]">
                  <img
                    alt=""
                    className="w-[453px] h-[267px]"
                    src="/Rectangle 63.png"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 px-[5%] flex-col">
              <h1 className="text-white text-[28px] font-medium text-start">
                WHO ARE WE?
              </h1>
              <h1 className="text-white text-[28px] font-medium text-start">
                WHAT ARE WE DOING?
              </h1>
              <h1 className="text-white text-[28px] font-medium text-start">
                WHY US?
              </h1>
              <h1 className="text-white text-[28px] font-medium text-start">
                HOW DO WE WORK?
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative overflow-hidden bg-[#000D32] px-[62px] py-[65px]">
        <div className="w-full pb-[45px]">
          <h1 className=" text-sky-200 text-3xl font-extrabold">
            STORY OF PT.SAPTALOKA DIGITAL INDONESIA
          </h1>
        </div>
        <div className="flex w-full">
          <div className="flex w-7/12 flex-col">
            <h2 className="text-sky-200 text-xl font-bold">
              PT. SAPTALOKA DIGITAL INDONESIA
            </h2>
            <h2 className="text-sky-200 text-justify text-xl font-medium">
              DIBENTUK PADA TANGGAL 1 JANUARI 2021, YANG SEBELUMNYA BERNAMA
              BENGKEL CODING.
            </h2>

            <h2 className="text-sky-200 text-xl font-bold pt-6">
              BENGKEL CODING
            </h2>
            <h2 className="text-sky-200 text-xl text-justify font-medium">
              MERUPAKAN JASA IT CONSULTANT YANG BERDIRI PADA TAHUN 2020. BENGKEL
              CODING TELAH MENYELESAIKAN PROJECT-PROJECT DARI BEBERAPA CLIENT.
            </h2>

            <h2 className="text-sky-200 text-xl text-justify font-medium pt-6">
              SEIRING BERJALANNYA WAKTU, SEMAKIN BANYAK PROJECT YANG
              TERSELESAIKAN, BENGKEL CODING MENJADI SEMAKIN BERKEMBANG.
            </h2>
            <h2 className="text-sky-200 text-xl text-justify font-medium pt-6">
              AKHIRNYA, PADA JANUARI 2021 BENGKEL CODING MEMUTUSKAN UNTUK
              MELAKUKAN RE-BRANDING, MENGUBAH NAMANYA MENJADI SAPTALOKA DIGITAL
              INDONESIA YANG DIIKUTI DENGAN PEMBERKASAN BADAN HUKUM YANG
              MEMBUATNYA RESMI MENJADI SEBUAH PT YANG TERDAFTAR
            </h2>
          </div>
          <div className="flex w-5/12 items-start justify-center relative">
            <svg
              className="w-[380px] h-[276px] "
              width="380"
              height="276"
              viewBox="0 0 380 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_125_251)">
                <path
                  d="M161.957 255.3V123.573C161.957 112.487 152.928 103.5 141.791 103.5C130.654 103.5 121.625 112.487 121.625 123.573V255.3C121.625 266.386 130.654 275.373 141.791 275.373C152.928 275.373 161.957 266.386 161.957 255.3Z"
                  fill="#0E41A2"
                />
                <path
                  d="M146.202 275.373H236.948C248.086 275.373 257.114 266.386 257.114 255.3C257.114 244.214 248.086 235.227 236.948 235.227H146.202C135.065 235.227 126.036 244.214 126.036 255.3C126.036 266.386 135.065 275.373 146.202 275.373Z"
                  fill="#0E41A2"
                />
                <path
                  d="M42.7781 246.822L133.312 156.706C141.188 148.867 141.188 136.157 133.312 128.318C125.437 120.48 112.669 120.48 104.794 128.318L14.2593 218.435C6.38405 226.274 6.38405 238.983 14.2593 246.822C22.1345 254.661 34.9029 254.661 42.7781 246.822Z"
                  fill="#0E41A2"
                />
                <path
                  d="M259.635 0H141.791C130.654 0 121.625 8.98687 121.625 20.0727C121.625 31.1586 130.654 40.1455 141.791 40.1455H259.635C270.772 40.1455 279.801 31.1586 279.801 20.0727C279.801 8.98687 270.772 0 259.635 0Z"
                  fill="#2ABDFB"
                />
                <path
                  d="M141.791 103.5H28.9886C17.8513 103.5 8.82275 112.487 8.82275 123.573C8.82275 134.659 17.8513 143.645 28.9886 143.645H141.791C152.929 143.645 161.957 134.659 161.957 123.573C161.957 112.487 152.929 103.5 141.791 103.5Z"
                  fill="#2ABDFB"
                />
                <path
                  d="M161.957 123.573V20.0727C161.957 8.98687 152.928 0 141.791 0C130.654 0 121.625 8.98687 121.625 20.0727V123.573C121.625 134.659 130.654 143.645 141.791 143.645C152.928 143.645 161.957 134.659 161.957 123.573Z"
                  fill="#2ABDFB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M229.386 76.4865H266.597H294.947C341.92 76.4865 380 114.39 380 161.146V191.13C380 237.886 341.92 275.79 294.947 275.79H266.597H229.386V76.4865ZM294.877 235.216H269.527V118.221H294.877C319.342 118.221 339.175 137.962 339.175 162.314V191.122C339.175 215.474 319.342 235.216 294.877 235.216Z"
                  fill="#2ABDFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_125_251">
                  <rect width="380" height="276" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-sky-200 text-xl text-justify font-medium pt-8 ">
            SELAMA PERJALANAN BERTRANSFORMASI INI, SAPTALOKA DIGITAL INDONESIA
            TELAH MEMBUKTIKAN KOMITMENNYA DENGAN MENCIPTAKAN BERBAGAI PROYEK
            INOVATIF. DARI IMPLEMENTASI SISTEM ENTERPRISE RESOURCE PLANNING
            (ERP) YANG EFISIEN HINGGA SOLUSI MANUFACTURING EXECUTION SYSTEM
            (MES) YANG TERDEPAN, SAPTALOKA TERUS MENUNJUKKAN DEDIKASINYA DALAM
            MENYEDIAKAN SOLUSI TEKNOLOGI YANG CANGGIH DAN TERPERCAYA BAGI
            KLIEN-KLIENNYA. KLIEN-KLIEN MEREKA BERASAL DARI BERAGAM LATAR
            BELAKANG, MULAI DARI PERUSAHAAN NEGARA HINGGA PERUSAHAAN SWASTA.
          </h2>
        </div>
      </div>
      <div className=" w-full relative overflow-hidden bg-[#C2EDFF] px-[62px] py-[75px]">
        <div className="flex w-full">
          <div className="flex w-9/12 flex-col gap-8">
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              SAPTALOKA DIGITAL MERUPAKAN PERUSAHAAN YANG BERGERAK DI BIDANG IT
              & BUSSINESS CONSULTANT.
            </h2>
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              SAPTALOKA DIGITAL MENAWARKAN JASA IT BERUPA PERMBUATAN WEBSITE,
              MULTIPLATFORM APPS DAN GAME, DAN JUGA MENAWARKAN JASA DIGITAL
              MARKETING.
            </h2>
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              SAPTALOKA DIGITAL INDONESIA MEMBANTU PERKEMBANGAN
              PERUSAHAAN-PERUSAHAAN DARI BERBAGAI INDUSTRI.
            </h2>
          </div>
          <div className="flex w-3/12 justify-center">
            <svg
              width="264"
              height="73"
              viewBox="0 0 264 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="12" width="256" height="61" fill="#019CDE" />
              <rect y="4" width="256" height="61" fill="#2ABDFB" />
              <path
                d="M19.8203 47L8.92425 13.4H18.7163L27.8843 42.488H22.9403L32.5883 13.4H41.3243L50.4443 42.488H45.6923L55.1483 13.4H64.2203L53.3243 47H43.1483L35.3723 22.28H38.1083L29.9963 47H19.8203ZM76.3616 26.408H91.9616V33.512H76.3616V26.408ZM77.0336 39.656H94.6016V47H67.6256V13.4H93.9776V20.744H77.0336V39.656ZM109.812 47L124.644 13.4H134.004L148.884 47H138.996L127.38 18.056H131.124L119.508 47H109.812ZM117.924 40.472L120.372 33.464H136.788L139.236 40.472H117.924ZM151.579 47V13.4H166.939C170.011 13.4 172.651 13.896 174.859 14.888C177.099 15.88 178.827 17.32 180.043 19.208C181.259 21.064 181.867 23.272 181.867 25.832C181.867 28.36 181.259 30.552 180.043 32.408C178.827 34.232 177.099 35.64 174.859 36.632C172.651 37.592 170.011 38.072 166.939 38.072H156.859L161.083 34.088V47H151.579ZM172.363 47L164.011 34.76H174.139L182.539 47H172.363ZM161.083 35.096L156.859 30.728H166.363C168.347 30.728 169.819 30.296 170.779 29.432C171.771 28.568 172.267 27.368 172.267 25.832C172.267 24.264 171.771 23.048 170.779 22.184C169.819 21.32 168.347 20.888 166.363 20.888H156.859L161.083 16.52V35.096ZM195.846 26.408H211.446V33.512H195.846V26.408ZM196.518 39.656H214.086V47H187.11V13.4H213.462V20.744H196.518V39.656Z"
                fill="#00103E"
              />
            </svg>
          </div>
        </div>
        <div className="w-full px-[62px] py-[75px]">
          <svg
            width="1323"
            height="3"
            viewBox="0 0 1323 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1323" height="3" fill="#2ABDFB" />
          </svg>
        </div>
        <div className="flex w-full">
          <div className="flex w-3/12 justify-center">
            <svg
              width="253"
              height="75"
              viewBox="0 0 253 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="13" width="243" height="62" fill="#019CDE" />
              <rect x="10" y="4" width="243" height="63" fill="#2ABDFB" />
              <path
                d="M72.0859 47L61.1899 13.4H70.9819L80.1499 42.488H75.2059L84.8539 13.4H93.5899L102.71 42.488H97.9579L107.414 13.4H116.486L105.59 47H95.4139L87.6379 22.28H90.3739L82.2619 47H72.0859ZM128.627 26.408H144.227V33.512H128.627V26.408ZM129.299 39.656H146.867V47H119.891V13.4H146.243V20.744H129.299V39.656ZM166.11 47V13.4H181.998C185.71 13.4 188.974 14.088 191.79 15.464C194.606 16.84 196.798 18.776 198.366 21.272C199.966 23.768 200.766 26.744 200.766 30.2C200.766 33.624 199.966 36.6 198.366 39.128C196.798 41.624 194.606 43.56 191.79 44.936C188.974 46.312 185.71 47 181.998 47H166.11ZM175.614 39.416H181.614C183.534 39.416 185.198 39.064 186.606 38.36C188.046 37.624 189.166 36.568 189.966 35.192C190.766 33.784 191.166 32.12 191.166 30.2C191.166 28.248 190.766 26.584 189.966 25.208C189.166 23.832 188.046 22.792 186.606 22.088C185.198 21.352 183.534 20.984 181.614 20.984H175.614V39.416ZM222.71 47.672C220.022 47.672 217.542 47.24 215.27 46.376C212.998 45.512 211.014 44.296 209.318 42.728C207.654 41.128 206.358 39.272 205.43 37.16C204.502 35.048 204.038 32.728 204.038 30.2C204.038 27.672 204.502 25.352 205.43 23.24C206.358 21.128 207.654 19.288 209.318 17.72C211.014 16.12 212.998 14.888 215.27 14.024C217.542 13.16 220.022 12.728 222.71 12.728C225.43 12.728 227.91 13.16 230.15 14.024C232.422 14.888 234.39 16.12 236.054 17.72C237.718 19.288 239.014 21.128 239.942 23.24C240.902 25.352 241.382 27.672 241.382 30.2C241.382 32.728 240.902 35.064 239.942 37.208C239.014 39.32 237.718 41.16 236.054 42.728C234.39 44.296 232.422 45.512 230.15 46.376C227.91 47.24 225.43 47.672 222.71 47.672ZM222.71 39.8C223.99 39.8 225.174 39.576 226.262 39.128C227.382 38.68 228.342 38.04 229.142 37.208C229.974 36.344 230.614 35.32 231.062 34.136C231.542 32.952 231.782 31.64 231.782 30.2C231.782 28.728 231.542 27.416 231.062 26.264C230.614 25.08 229.974 24.072 229.142 23.24C228.342 22.376 227.382 21.72 226.262 21.272C225.174 20.824 223.99 20.6 222.71 20.6C221.43 20.6 220.23 20.824 219.11 21.272C218.022 21.72 217.062 22.376 216.23 23.24C215.43 24.072 214.79 25.08 214.31 26.264C213.862 27.416 213.638 28.728 213.638 30.2C213.638 31.64 213.862 32.952 214.31 34.136C214.79 35.32 215.43 36.344 216.23 37.208C217.062 38.04 218.022 38.68 219.11 39.128C220.23 39.576 221.43 39.8 222.71 39.8Z"
                fill="#00103E"
              />
            </svg>
          </div>
          <div className="flex w-9/12 flex-col gap-8">
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              MEMBERI SARAN PADA KLIEN TENTANG PEMAKAIAN IT UNTUK MEMENUHI
              TARGET BISNIS ATAUPUN MEMBANTU PROBLEM SOLVING DARI MASALAH KLIEN.
            </h2>
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              MEMBANTU MIGRASI TEKNOLOGI UNTUK MEMUDAHKAN OPERASIONAL BISNIS
              KLIEN.
            </h2>
            <h2 className="text-justify text-slate-900 text-xl font-medium">
              SAAT INI KAMI SEDANG MENGEMBANGKAN PRODUK PLATFORM DIGITAL ERP DAN
              MES UNTUK MENDUKUNG PERTUMBUHAN PERUSAHAAN-PERUSAHAAN DARI
              BERBAGAI INDUSTRI.
            </h2>
          </div>
        </div>
      </div>
      <div className=" w-full relative overflow-hidden bg-[#000820] px-[62px] py-[75px]">
        <div className="w-full justify-center">
          <h1 className="text-center text-cyan-100 text-5xl font-extrabold">
            MEET THE TEAM
          </h1>
        </div>
        <div className="flex w-full justify-center items-center px-12 py-20">
          <div className="flex w-6/12 justify-center items-center flex-col">
            <Founder
              nama={"M. Nur Rizka Novanto, S.E"}
              jabatan={"FOUNDER & CEO"}
              foto={"/Rectangle 73.png"}
              linked={undefined}
              ig={undefined}
              web={undefined}
            />
          </div>
          <div className="flex w-6/12 justify-center items-center flex-col">
            <Founder
              nama={"Fikri Zaki Aditama, S.Si"}
              jabatan={"FOUNDER & HEAD OF IT"}
              foto={"/Rectangle 75.png"}
              linked={undefined}
              ig={undefined}
              web={undefined}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 w-full pt-16 gap-5">
          <Team
            nama={"Acép Wahyu Kurna"}
            jabatan={"Back-end Developer"}
            foto={"/Rectangle 76.png"}
            linked={undefined}
            ig={undefined}
            web={undefined}
          />
          <Team
            nama={"Taryo Noviar.zip"}
            jabatan={"Front-end Developer"}
            foto={"/Rectangle 77.png"}
            linked={undefined}
            ig={undefined}
            web={undefined}
          />
          <Team
            nama={"M. Daffa Fauzan"}
            jabatan={"UI/UX Designer"}
            foto={"/Rectangle 78.png"}
            linked={undefined}
            ig={undefined}
            web={undefined}
          />
          <Team
            nama={"Luthfi Khaeri Ikhsan"}
            jabatan={"Back-end Developer"}
            foto={"/Rectangle 79.png"}
            linked={undefined}
            ig={undefined}
            web={undefined}
          />
          <Team
            nama={"M. Aulia Rahman, S.Kom"}
            jabatan={"Front-end Developer"}
            foto={"/Rectangle 80.png"}
            linked={undefined}
            ig={undefined}
            web={undefined}
          />
        </div>
      </div>
    </main>
  );
}
