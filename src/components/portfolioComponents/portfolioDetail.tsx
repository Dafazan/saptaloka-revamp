// import React from 'react'

// function PortfolioDetail({ title, description, img, text, cover }: { title: String, description: String, img: any, text: String, cover: any }) {
//     return (
//         <>
//             <div>
//                 <img src={cover} alt="" />
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//             </div>

//             <div>

//                 {img.map((im: { img: string | undefined }, index: React.Key | null | undefined) => (
//                     <img key={index} src={im.img} alt={`Content ${index}`} />
//                 ))}
//                 <p>{text}</p>
//             </div>
//         </>
//     )
// }

// export default PortfolioDetail
import React from 'react';

interface PortfolioDetailProps {
    title: string;
    description: string;
    img: string[]; // Array of image URLs
    text: string;
    cover: string;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ title, description, img, text, cover }) => {
    return (
        <>
            <div>
                <img src={cover} alt="Cover Image" />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                {img.map((image, index) => (
                    <img key={index} src={image} alt={`Content ${image}`} />
                ))}
                <p>{text}</p>
            </div>
        </>
    );
}

export default PortfolioDetail;
