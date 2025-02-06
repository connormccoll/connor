import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="flex flex-col md:w-[800px] p-4 pb-40">
      <Card className="h-full w-full p-10">
        <CardHeader>Connor McColl</CardHeader>
        <CardContent>
          As the front-end team lead, I constantly connect with the front-end team, back-end team, and others including systems, service, security, reliability, architects, product managers and consuming stakeholders to ensure the product meets the users’ requirements and is delivered on time and with a robust and maintainable implementation. I am a great addition to your team with my ability to learn new technologies and problem solve quickly, plan reliably, collaborate flexibly, and lead and mentor others. I keep focus on the users and maintain high testing standards for low defect rates. I get feedback and start delivering results early utilizing Figma for iterative wireframe design and AI and generated code to increase velocity. I have recently delivered the UI for the first two releases of a high impact application which enables subscription-based revenue and reduces application order fulfilment time from weeks to days. I worked on the project throughout the development lifecycle from proof of concept through component and system verification for the first two releases while pulling in improvements from feedback. I regularly practice skills in planning for sprints and program increments in the Scrum environment. I often implement front-end code and use component libraries, write documentation, review merge requests, write unit tests and behavioral driven development (BDD) tests, and close out defects and security vulnerabilities. I have experience with Angular, Node JS, AWS, Cucumber, python, Docker, and Kubernetes and can pick up new technologies quickly. I have valuable knowledge outside of software development that helps me work cross functionally as well. I have experience with data analytics, project management, and intellectual property.
        </CardContent>
      </Card>
      <Card className="h-full w-full p-10">
        <CardHeader>Professional Experience</CardHeader>
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
                <div className="flex justify-between">
                  <h3>GE Healthcare</h3>
                  <h4>Remote</h4>
                  <h4>January 2022 – September 2023</h4>
                </div>
                <ul className="list-disc pl-5">
                  <li>As a full stack software developer for cloud native business applications, I contributed to on time development of multiple products.</li>
                  <li>I interfaced with users for investigating and fixing defects on legacy applications.</li>
                  <li>I collaborated with Product Owner, customers, and usability to improve products, gather feedback, and solve defects.</li>
                  <li>I managed two interns on our team and ran the summer internship program on a successful project.</li>
                  <li>I regularly practiced skills in Angular, Node JS, Kubernetes, rigorous unit testing, software design document (SWDD) development, and Scrum.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Edison Engineering Development Program (EEDP) post-grad rotational program</AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-between">
                  <h3>GE Healthcare</h3>
                  <h4>Hybrid</h4>
                  <h4>January 2020 – January 2022</h4>
                </div>
                <ul className="list-disc pl-5">
                  <li>Details about the role and responsibilities.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <Card className="h-full w-full p-10">
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
                  <span>Milwaukee, WI</span>
                  <span>2015-2020</span>
                </div>
                <ul className="list-disc pl-5">
                  <li>Bachelor’s in Mechanical Engineering • GPA 3.44/4.0</li>
                  <li>I interfaced with users for investigating and fixing defects on legacy applications.</li>
                  <li>I collaborated with Product Owner, customers, and usability to improve products, gather feedback, and solve defects.</li>
                  <li>I managed two interns on our team and ran the summer internship program on a successful project.</li>
                  <li>I regularly practiced skills in Angular, Node JS, Kubernetes, rigorous unit testing, software design document (SWDD) development, and Scrum.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <Card className="h-full w-full p-10 mb-20">
        <CardHeader>Patents</CardHeader>
        <CardContent className="flex items-center justify-center">
          <a
            href="https://patents.google.com/?inventor=Connor+Douglas+McColl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Patents
          </a>
        </CardContent>
      </Card>
    </div>
  );
}