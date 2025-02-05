import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Resume() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-2">
            <div className="w-full md:w-8/10 p-10">
            <Card className="md:w-8/10 max-w-3xl">
                <CardHeader>Professional Experience</CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Senior Software Engineer</AccordionTrigger>
                            <AccordionContent>
                                <h3>GE Healthcare</h3>
                                <h4>Hybrid • September 2023 – Present</h4>
                                <ul className="list-disc pl-5">
                                    <li>As UI owner, I lead the sub-team in delivering high quality code for the UI for an AWS run product with high business impact through reducing application install time from weeks to days after order.</li>
                                    <li>I created the usability and service feedback operating mechanism and effectively use it to ensure quality documentation, gather feedback and funnel multiple improvements into the product design and features.</li>
                                    <li>I improved development velocity by creating a generated SDK interface for robust integration between UI and API and a generated API mock for UI development.</li>
                                    <li>I gave the product release demo and regularly demo to stakeholders. I review merge requests, pair program and mentor team members, and ensure the product is thoroughly unit and BDD tested.</li>
                                    <li>Technologies I use include Angular, Node JS, AWS, Cucumber, Figma, OpenAPI.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Software Engineer</AccordionTrigger>
                            <AccordionContent>
                                <h3>GE Healthcare</h3>
                                <h4>Remote • January 2022 – September 2023</h4>
                                <ul className="list-disc pl-5">
                                    <li>As a full stack software developer for cloud native business applications, I contributed to on time development of multiple products. </li>
                                    <li>I interfaced with users for investigating and fixing defects on legacy applications. </li>
                                    <li>I collaborated with Product Owner, customers, and usability to improve products, gather feedback, and solve defects. </li>
                                    <li>I managed two interns on our team and ran the summer internship program on a successful project. </li>
                                    <li>I regularly practiced skills in Angular, Node JS, Kubernetes, rigorous unit testing, software design document (SWDD) development, and Scrum.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Edison Engineering Development Program (EEDP) post-grad rotational program</AccordionTrigger>
                            <AccordionContent>
                            <div className="flex justify-between">
                                <h3>GE Healthcare</h3>
                                <h4>Hybrid + Remote • 6 month rotations</h4>
                                </div>
                                <ul className="list-disc pl-5">
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>MR Data Analytics Leader</h3>
                                        <span>July – January 2022</span>
                                    </div>
                                        <p>Rotation 4: As part of the data team for service and lifecycle on this 6 month rotation in MR, I led data validation efforts for database provider migration and redesign and improve pipelines for new tech stack. Queried and ran analysis for data consumers.
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>Edison Health Link Software Engineer</h3>
                                        <span>January – July 2021</span>
                                    </div>
                                        <p>Rotation 3: As a software engineer I implemented Proof of Concept including an Angular application and served as a liaison between our team and other teams for researching new opportunities. I worked closely with the scrum team and other Edison engineers.
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>VCP Project Leader</h3>
                                        <span>July 2020 – January 2021</span>
                                    </div>
                                        <p>Rotation 2: Working on a centralized team, I lead a product introduction surrounding new suppliers contributing to  hundreds of thousands in annual cost savings, standardizing components, leading team meetings and owning the project timeline. I also contributed to automation efforts in a global testing laboratory.
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>Systems Engineer, ISS Detector</h3>
                                        <span>January – July 2020</span>
                                    </div>
                                        <p>Rotation 1: Worked closely with principal engineer and physicist and was responsible for developing the calibration algorithm for a next generation deep silicon photon counting x-ray detector. I also designed and coordinated a data centric manufacturing issue investigation and determined the cause of a years-long common spec failure and created a mitigation plan within a few weeks. While working remotely I organized and instructed a thermal and optical laser measurement study which I used to model and determine the issue and mitigations.
                                        </p>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Internships + Co-ops</AccordionTrigger>
                            <AccordionContent>
                            <div className="flex justify-between">
                                <h3>GE Healthcare</h3>
                                <h4>Waukesha, WI</h4>
                                </div>
                                <ul className="list-disc pl-5">
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>Systems Productivity Tools Engineer</h3>
                                        <span>May 2019 – December 2020</span>
                                    </div>
                                        <p>As a contracted co-op in CT Systems I was the administrator for managing accounts and partnering with program managers to code custom apps and visualizations for Scrum project tracking in Rally. I ran  integration tests and troubleshooting with new contrast media injectors, determined execution plan for performance testing, and developed tools to automatically measure systems against defined metrics.
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>CT Systems Co-op</h3>
                                        <span>May 2018 – December 2018</span>
                                    </div>
                                        <p>Programmed tools for exam protocol manipulation to improve test coverage and organization, data manipulation, and automated verification test execution in python. Ran verification tests and documented in Application Lifecycle Management (ALM).
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <h3>ISS Detectors Co-op</h3>
                                        <span>January 2017 - December 2017</span>
                                    </div>
                                        <p>Designed and implemented manufacturing fixtures and validated tools for improving production environmental health and safety, tested and implemented production part change and first article inspection with supplier, worked on CT field modification instructions and joined patent evaluation board in addition to working with inside and outside counsel to file two patents. Continued part time work into the fall term.
                                        </p>
                                    </li>
                                    <li>
                                    <div className="flex justify-between">
                                        <span>MR Hardware Intern</span>
                                        <span  className="ml-auto">May 2016 - August 2016</span>
                                        </div>
                                        <p>Completed Scrum/Agile team training class and became accustomed to the task tracking methodology. Developed and reviewed innovative concepts and created proof of concept in early prototypes. I developed skills iterating early designs through rapid testing.
                                        </p>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
            </div>
            <div>
            <Card>
                <CardHeader>Education</CardHeader>
                <CardContent>

                <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>University of Pennsylvania</AccordionTrigger>
                            <AccordionContent>
                            <div className="flex justify-between">
                                <h3>Penn Engineering Online</h3>
                                <span>2021-2024</span>
                            </div>
                                <ul className="list-disc pl-5">
                                    <li>Masters of Computer and Information Technology • GPA 3.6/4.0</li>
                                    <li>I created the usability and service feedback operating mechanism and effectively use it to ensure quality documentation, gather feedback and funnel multiple improvements into the product design and features.</li>
                                    <li>Relevant courses include: ML for Data Science, AI, Database and Information Systems, Data Structures, Algorithms and Computation, Big Data Analytics</li>
                                    <li>Accomplished degree through part time enrollment while working full-time.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Marquette University</AccordionTrigger>
                            <AccordionContent>
                            <div className="flex justify-between">
                                <h3>College of Engineering</h3>
                                <span> Milwaukee, WI</span>
                                <span> 2015-2020</span>
                            </div>
                                <ul className="list-disc pl-5">
                                    <li>Bachelor’s in Mechanical Engineering • GPA 3.44/4.0 </li>
                                    <li>I interfaced with users for investigating and fixing defects on legacy applications. </li>
                                    <li>I collaborated with Product Owner, customers, and usability to improve products, gather feedback, and solve defects. </li>
                                    <li>I managed two interns on our team and ran the summer internship program on a successful project. </li>
                                    <li>I regularly practiced skills in Angular, Node JS, Kubernetes, rigorous unit testing, software design document (SWDD) development, and Scrum.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
                </Card>
                </div>
                </div>

    );
}