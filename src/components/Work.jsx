import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Software Developer Engineer',
        duration: '3 years',
        details:
        'I bring three years of proven success as a Software Developer Engineer at ArtGeekTech, Inc. With a versatile skill set, I am adept in Java, JavaScript, Python, HTML, CSS, as well as AWS (Amazon Web Services) technologies such as EC2 and S3. My expertise extends to containerization with Docker and Kubernetes, and I am well-versed in working with essential databases like MySQL and PostgreSQL. I am passionate about crafting innovative solutions and leveraging cutting-edge technologies to drive impactful results.'
    },
    {
        year: 2017,
        title: 'IT Support Specialist',
        duration: '3 years',
        details:
        'During my tenure as an IT Support Specialist, I played a vital role in creating a seamless working environment for new employees and successfully managed and resolved various IT issues for the entire organization. My technical expertise encompasses Linux, Windows, macOS, iOS, as well as phone and PC systems. Additionally, I possess comprehensive knowledge in troubleshooting and maintaining printers for optimal functionality.'
    },
    // {
    //     year: 2015,
    //     title: 'Content Creator',
    //     duration: '3 years',
    //     details:
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit, aspernatur onnuis dolor numquam'
    // },
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    );
};
export default Work;