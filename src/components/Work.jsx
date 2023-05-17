import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Software Developer Engineer',
        duration: '3 years',
        details:
        'Working as a software develop engineer in ArtForGeeks, Inc. Teck skills including Java, JavaScript, Python, HTML, CSS, AWS, EC2, 3S, Docker, Kuburnetes, MySQL, PostgreSQL'
    },
    {
        year: 2017,
        title: 'IT Support Specialist',
        duration: '3 years',
        details:
        'Setup the working environment for new employees and manage and troubeshoot the IT issues for all employees. Teck skills inluding Linux, Windows, MacOS, iOS, Phone and PCs, printers'
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