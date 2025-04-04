import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills } from "./skills";
import { seniorSoftwareEngineerContent } from "./senior-software-engineer";
import { softwareEngineerContent } from "./software-engineer";
import { pennContent } from "./penn";
import { marquetteContent } from "./marquette";

export default function Resume() {
    return (
        <div className="flex flex-col md:flex-row md:w-full p-2 pb-40">
            <div className="md:w-full">

                <div className="flex md:w-full p-1 ">
                    <Card className="h-full w-full p-2">
                        <CardHeader><h3 className="text-2xl">Connor McColl</h3></CardHeader>
                        <CardContent>
                        Senior software engineer leading UI development with full stack and cross-functional experience. Fostering a team culture of delivering intuitive and easily maintainable UIs with pair programming, thorough testing, continuous improvement, and sound planning. Passionate about the users and ensuring the design meets requirements by leading product discussions, quickly resolving defects, and prioritizing new features. Take a creative and open-minded approach to product decisions and design UIs with animated wireframes for early and iterative feedback.
                        </CardContent>
                    </Card>
                </div>
                <div className="flex md:w-full p-1 ">
                    <Card className="h-full w-full p-2">
                        <CardHeader><h3 className="text-2xl">Professional Experience</h3></CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Senior Software Engineer</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex justify-between">
                                            <h3>GE Healthcare</h3>
                                            <h4>Hybrid</h4>
                                            <h4>September 2023 – Present</h4>
                                        </div>
                                        <ul className="list-disc pl-5">
                                        {seniorSoftwareEngineerContent.map((item, index) => (
                                            <li key={`senior-software-${index}`}>{item}</li>
                                            ))}
                                                                                    </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Software Engineer</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex justify-between">
                                            <h3>GE Healthcare</h3>
                                            <h4>Remote</h4>
                                            <h4>January 2022 – September 2023</h4>
                                        </div>
                                        <ul className="list-disc pl-5">
                                        {softwareEngineerContent.map((item, index) => (
                                            <li key={`software-${index}`}>{item}</li>
                                            ))}                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Edison Engineering Development Program (EEDP) post-grad rotational program</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex justify-between">
                                            <h3>GE Healthcare</h3>
                                            <h4>Hybrid</h4>
                                            <h4>6 month rotations</h4>
                                        </div>
                                        <ul className="list-disc pl-5">
                                            <li key={"rotation-4"}>
                                                <div className="flex justify-between">
                                                    <h3>MR Data Analytics Leader</h3>
                                                    <span>July – January 2022</span>
                                                </div>
                                                <p>Rotation 4: As part of the data team for service and lifecycle on this 6 month rotation in MR, led data validation efforts through database migration and redesign. Improved data pipelines for new tech stack. Fulfilled data requests and analysis with SQL and Tableau.
                                                </p>
                                            </li>
                                            <li key={"rotation-3"}>
                                                <div className="flex justify-between">
                                                    <h3>Edison Health Link Software Engineer</h3>
                                                    <span>January – July 2021</span>
                                                </div>
                                                <p>Rotation 3: Developed and demonstrated an Angular application Proof of Concept utilizing data grids, modals, and a backend mock. Troubleshooted defects for legacy applications.
                                                </p>
                                            </li>
                                            <li key={"rotation-2"}>
                                                <div className="flex justify-between">
                                                    <h3>VCP Project Leader</h3>
                                                    <span>July 2020 – January 2021</span>
                                                </div>
                                                <p>Rotation 2: Led a product introduction enabling a supplier switch enabling over $100k in annual cost reduction, worked on part number standardization. Led team meetings and developed project timeline in Smartsheet. After a corporate restructuring, led test automation for a global testing laboratory.
                                                </p>
                                            </li>
                                            <li key={"rotation-1"}>
                                                <div className="flex justify-between">
                                                    <h3>Systems Engineer, ISS Detector</h3>
                                                    <span>January – July 2020</span>
                                                </div>
                                                <p>Rotation 1: Developed and implemented three-point calibration algorithm in Python and worked with physicists to extract the first data from a next generation deep silicon photon counting x-ray detector. Solved a years-long manufacturing tolerance failure by implementing an optical laser measurement study issue and presenting a mitigation plan.
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
                                            <li key={"intern-4"}>
                                                <div className="flex justify-between">
                                                    <h3>Systems Productivity Tools Engineer</h3>
                                                    <span>May 2019 – December 2020</span>
                                                </div>
                                                <p>Contracted co-op in CT Systems, Rally scrum tool administrator, developed custom apps to integrate into the Rally software and visualizations for program managers. Ran integration tests developed pass/fail performance test in Python
                                                </p>
                                            </li>
                                            <li key={"intern-3"}>
                                                <div className="flex justify-between">
                                                    <h3>CT Systems Co-op</h3>
                                                    <span>May 2018 – December 2018</span>
                                                </div>
                                                <p>Programmed script in Python for exam protocol manipulation improving functional test coverage of automated verification test execution.
                                                </p>
                                            </li>
                                            <li key={"intern-2"}>
                                                <div className="flex justify-between">
                                                    <h3>ISS Detectors Co-op</h3>
                                                    <span>January 2017 - December 2017</span>
                                                </div>
                                                <p>Designed manufacturing fixtures and validated tools for improving environmental health and safety, ran first article inspection with supplier, wrote documentation for CT field modification instructions. Filed two patents and joined the modality’s patent evaluation board.
                                                </p>
                                            </li>
                                            <li key={"intern-1"}>
                                                <div className="flex justify-between">
                                                    <span>MR Hardware Intern</span>
                                                    <span className="ml-auto">May 2016 - August 2016</span>
                                                </div>
                                                <p>Completed Scrum/Agile team training class. Developed skills iterating early MR patient bed arm board designs through rapid testing.
                                                </p>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col w-full p-1">
                    <Card className="h-full p-2">
                        <CardHeader><h3 className="text-2xl">Education</h3></CardHeader>
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
                                        {pennContent.map((item, index) => (
                      <li key={`penn-${index}`}>{item}</li>
                    ))}
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
                                        {marquetteContent.map((item, index) => (
                      <li key={`mu-${index}`}>{item}</li>
                    ))}
                                                                                    </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col w-full p-1">
                    <Card className="h-full p2 style={{ paddingBottom: '20px' }}">
                        <CardHeader>
                            <a
                                href="https://patents.google.com/?inventor=Connor+Douglas+McColl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            ><h3 className="text-2xl">Patents</h3>
                            </a></CardHeader>
                        <CardContent className="flex items-center justify-center">
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="md:w-1/4 p-1">

                <Card className="h-full w-full p-2">
                    <CardHeader><h3 className="text-2xl">Technical Skills</h3></CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <div >
                                <Badge key={`skill-${index}`} className="p-2">{skill}</Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>

            </div>
        </div>

    );
}