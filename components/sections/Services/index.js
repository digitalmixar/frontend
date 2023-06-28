import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./styles.module.css";

/**
 *
 * @param {{data: {heading: string, subHeading: string}}} param0
 * @returns {JSX.Element} JSX.Element
 */
const Services = ({ data }) => {
  return (
    <div className="bg-primary-100-d py-20">
      <div className="space-y-4 text-center text-primary-925">
        <h3 className="text-4xl font-bold">{data.heading}</h3>
        <p className="text-base">{data.subHeading}</p>
      </div>
      <div className="relative mx-auto mt-12 max-w-[1900px] 2xl:mt-24">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <Image
            src="/svg/rocket.svg"
            width={1440}
            height={584}
            layout="responsive"
          />
        </div>
        <InView triggerOnce={true} threshold={0} rootMargin="0px 0px -50% 0px">
          {({ inView, ref }) => (
            <div ref={ref} className={`${styles["grid"]}`}>
              <>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "200%", y: "100%" },
                  }}
                  transition={{ delay: 0, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-1"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">
                      Consultancy
                    </h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>User Persona Approach</li>
                      <li>Competitor and clients Analysis</li>
                      <li>Conversion analysis</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "-100%", y: "100%" },
                  }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-4"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">Data</h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>OKRs Definition</li>
                      <li>Dashboards for decision making</li>
                      <li>Analytics</li>
                      <li>3rd party conversion tools (some listed)</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "-200%", y: "100%" },
                  }}
                  transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-5"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">
                      Coding
                    </h4>
                    <div className="flex space-x-4">
                      <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                        <li>React</li>
                        <li>Node.Js</li>
                        <li>Next.Js</li>
                        <li>Tailwind</li>
                        <li>Strapi</li>
                        <li>Typescript</li>
                      </ul>
                      <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                        <li>PHP</li>
                        <li>Cake PHP</li>
                        <li>Laravel PHP</li>
                        <li>Wordpress</li>
                        <li>Prestashop</li>
                        <li>Shopify</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: "-10%", y: "-25%" },
                    hidden: { opacity: 0, x: "100%", y: "0%" },
                  }}
                  transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-2 lg:row-start-2"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">SEO</h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>Site optimization</li>
                      <li>Holistic Content Plan</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "200%", y: "-100%" },
                  }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-1 lg:row-start-3"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">
                      Marketing (SEM)
                    </h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>Email marketing Flows</li>
                      <li>Meta Flows</li>
                      <li>Google Flows</li>
                      <li>Linkedin Flows</li>
                      <li>TikTok Flows</li>
                      <li>Other platforms</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "-100%", y: "-100%" },
                  }}
                  transition={{ delay: 1, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-4 lg:row-start-3"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">
                      Digital products <br /> development
                    </h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>Web Sites</li>
                      <li>CRM integration</li>
                      <li>Custom made Sofware</li>
                      <li>Apps</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, x: "-200%", y: "-100%" },
                  }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  className="flex items-center justify-center lg:col-start-5 lg:row-start-3"
                >
                  <div className="rounded-4xl bg-primary-200-d py-8 px-6 lg:w-max">
                    <h4 className="text-xl font-bold text-primary-925">UX</h4>
                    <ul className="text-700 text-sm leading-relaxed text-butterfly-bush-700">
                      <li>User Research</li>
                      <li>Prototyping</li>
                      <li>Design</li>
                    </ul>
                  </div>
                </motion.div>
              </>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Services;
