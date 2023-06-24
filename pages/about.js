import Image from "next/image";



export default function About() {
    return (
        <>

            <div id="about-main">
                <div className="jumbotron">
                    <div className="jumbotron-inner">
                        <div className="top-box">
                            <div className="content-box">
                                <h1>
                                    {/* About APIMATIC */}
                                </h1>
                                <p>
                                    {/* APIMatic is a developer experience platform for web APIs.  <br /> Our mission is to make developers productive through automatic code generation. */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="img-layer-container">
                        <div className="team-image" id="team-image">
                            <Image className="t_image" width="600" height={1000} alt="" src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
                        </div>

                        <div className="circles-container">
                            <div className="img-1">
                                <Image width={2000} height="500" alt="" src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
                            </div>
                            <div className="img-2">
                                <Image width={1500} height="500" alt="" src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-container">
                    <div className="need-for-dx-container">
                        <h3 className="text-center">
                            Need for DX
                        </h3>
                        <p>
                            Application Programming Interfaces (APIs) have taken the world by storm and are now the de facto standard of software communication. Almost every software product nowadays consumes APIs. The business model of numerous companies around the world relies upon the consumption of their APIs. API providers, therefore, strive to increase API adoption rates by spending millions of dollars every year to improve developer experience. This is usually done by providing Software Development Kits (SDKs) and API documentation to developer consuming their API(s). Developing SDKs and writing documentation, however, are arduous, monotonous and error-prone tasks. It is a slow process and costs a lot of time and money.
                        </p>
                        <div className="img-container">
                            <Image width="600" height="400" src="https://apimatic.io/img/theme/aboutUs/dxFlow.svg" alt="apimatic developer experience process" className="img-responsive" />
                        </div>
                    </div>
                    <div className="container-divider"></div>
                    <div className="our-tech-container">
                        <h3 className="text-center">
                            Our Technology
                        </h3>
                        <p>
                            Our code generation engine enables API providers to generate SDKs for their APIs within minutes and at a fraction of the cost. We provide tools like our API editor and API transformer to further aid API providers in minimizing the time required to ship excellent quality SDKs to the developers using their APIs. Our code generation engine is also capable of generating succinct and error-free documentation for APIs and SDKs, both. The documentation for the SDKs includes dynamic screenshots detailing usage instructions tailored to the providers specific API and also code snippets showing example usage. As the cherry on the cake, we provide beautifully designed DX portals to encapsulate this documentation.
                        </p>
                        <div className="img-container">
                            <Image width="200" height="200" src="https://apimatic.io/img/theme/cgaasIcons/cgaasProcess.gif" alt="apimatic code generation engine" className="img-responsive" />
                        </div>
                    </div>
                    <div className="container-divider"></div>
                    <div className="origin-story-container">
                        <h3 className="text-center">
                            Origin Story
                        </h3>
                        <p>
                            While doing research work for their PhDs from the University
                            of Auckland in 2014, our founders came across one of the API
                            industrys pain points: SDKs. They realized that API providers who spent hundreds
                            of thousands of dollars every year on improving developer experience, by providing
                            SDKs and user-friendly documentation were able to reach a wider developer audience for
                            their APIs compared to API providers who werent able to do so.
                        </p>
                        <p>
                            It was so clear that even though writing SDKs and documentation
                            was a difficult and expensive task, it followed repeatable patterns which could be defined as
                            logic blocks in a code generation engine. So, as a research project, they started working on
                            a code generation engine which dynamically generated SDKs using API description as input.
                        </p>
                        <p>
                            After a rigorous journey, this research project was selected as
                            a candidate for commercialization by Return on Science (a NZ national
                            research commercialization program focused on bringing new academic research
                            to market) and the concept was transformed into a product i.e. APIMatic.
                        </p>
                    </div>
                    <div className="container-divider"></div>
                    <div className="today-container">
                        <h3 className="text-center">
                            Flash Forward Today
                        </h3>
                        <p>
                            APIMatic has come a long way since its inception
                            3 years ago. Having started with only generating SDKs,
                            APIMatic now provides solutions in other areas of developer
                            experience as well. Presently, APIMatic is used by numerous
                            organizations around the world to:
                        </p>
                        <ul>
                            <li>Create and store definitions of their APIs</li>
                            <li>Generate SDKs for their APIs for 10 platforms</li>
                            <li>Keep these SDKs in sync with API updates</li>
                            <li>Convert API descriptions into multiple formats (Swagger, API Blueprint, RAML etc.)</li>
                            <li>Generate beautiful documentation for their APIs and SDKs</li>
                            <li>Generate complete Developer Experience API Portals</li>
                        </ul>
                    </div>
                    <div className="container-divider"></div>
                </div>
            </div>

        </>
    )
}
