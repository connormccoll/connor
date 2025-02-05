import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <div className="w-full md:w-1/2 p-10">
        <Image
          src="/images/connor-mccoll.jpg"
          alt="Connor McColl"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="w-full p-10">
        <Card style={{ paddingRight: '20px' }}>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
            Hi, I'm Connor! Currently, I am a user interface (UI) owner and Senior Software Engineer working on cloud-based applications in the healthcare industry. As the front-end team lead, I constantly connect with the front-end team, back-end team, and others including systems, service, security, reliability, architects, product managers and consuming stakeholders to ensure the product meets the users’ requirements and is delivered on time and with a robust and maintainable implementation. I am a great addition to your team with my ability to learn new technologies and problem solve quickly, plan reliably, collaborate flexibly, and lead and mentor others. I keep focus on the users and maintain high testing standards for low defect rates. I get feedback and start delivering results early utilizing Figma for iterative wireframe design and AI and generated code to increase velocity. I have recently delivered the UI for the first two releases of a high impact application which enables subscription-based revenue and reduces application order fulfilment time from weeks to days. I worked on the project throughout the development lifecycle from proof of concept through component and system verification for the first two releases while pulling in improvements from feedback. I regularly practice skills in planning for sprints and program increments in the Scrum environment. I often implement front-end code and use component libraries, write documentation, review merge requests, write unit tests and behavioral driven development (BDD) tests, and close out defects and security vulnerabilities. I have experience with Angular, Node JS, AWS, Cucumber, python, Docker, and Kubernetes and can pick up new technologies quickly. I have valuable knowledge outside of software development that helps me work cross functionally as well. I have experience with data analytics, project management, and intellectual property including filing two patents (detector enclosure, detector structure).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}