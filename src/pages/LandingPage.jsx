import { Link } from "react-router-dom";
import heroBg from "../assets/hero.png";
import laptopRepairImg from "../assets/laptop_repair.png";

export default function LandingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden px-gutter">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/80 to-transparent z-10"></div>
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30 scale-110 blur-2xl"
            src={heroBg}
          />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md animate-fadeInUp">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest px-3 py-1 border border-primary/30 rounded-full bg-primary/10 inline-block animate-glow">
              Future of Living
            </span>
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface leading-tight">
              Intelligence <br />
              <span className="text-primary">Redefined</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed opacity-90">
              MDtronix Lab delivers smart home automation, embedded system
              design, water management solutions, and digital development —
              engineering hardware and software that works for you.
            </p>
            <div className="flex flex-wrap gap-stack-sm pt-4">
              <Link
                to="/services"
                className="bg-plasma-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-plasma-blue/20 hover:-translate-y-1 active:scale-95 transition-all text-center"
              >
                Explore Solutions
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass-card text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative animate-float">
            <div className="relative z-10 glass-card p-4 rounded-[2rem] transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img
                className="rounded-2xl w-full h-auto shadow-inner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Mlyehg1oxaaxXIdFJ3n3--idhpbSbtKfYTSWj8w1KtoIBhiEuuAsAWxppNhKFDdnVq4LRhBOlD6y-jfc0tSfDIFMiCAODYrQt7ou5iOWhwSxbTz1ounUZCeOt2OUB5RQS-XtztSPGMNNfMOe7QLQ-cn_6PrBwBj_VL2mEWIYdXAxcnIWAFolld_Uvaz7R_uCxE8IkXpmbUv9yJIzbsgsYIQ8gVcVbjQxg4dxeTPRr-FiEltx0SRTQgy0_n3XZu0roOQLUzR74xcPuuE"
                alt="Smart home interface"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-2xl border-primary/20 backdrop-blur-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      security
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">System Active</p>
                    <p className="text-sm text-on-surface-variant">
                      All zones secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-plasma-blue/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="py-stack-lg px-gutter max-w-container-max mx-auto"
      >
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">
            What We Do
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From smart home automation to custom embedded hardware — we engineer
            technology that solves real problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Smart Home */}
          <div className="glass-card p-8 rounded-3xl group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12">
                home_iot_device
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl mb-4">Smart Home</h3>
            <p className="text-on-surface-variant mb-6">
              Full home automation — lighting, climate, appliances, and security
              unified under one intelligent system.
            </p>
            <img
              className="w-full h-40 object-cover rounded-xl group-hover:brightness-110 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRNXquniDhmYYqLq5ebef_j-2oZWYIf6OQPwgOjkbQzB6LlYpGOgpE8NSubLcyjScBVlGBHce7BSxFll3f2i1uwTr27hfKKO-nYwErAC26ZEifbYBqpxo7kc4utH3eoAc4mjOgk1c92-p-UcVMf1MZbtTPYKuIbGVY_NpUNc__oAx6rgxjLN5ZoqX_JQFaErexOsrCwJB8JxkfypmW0j5SLbBiuqtBv5VAFTVuENsgB9MQXfpGKoSeMezxIU8BaJo16x9SdQU4EAqh"
              alt="Smart home automation"
            />
          </div>

          {/* Embedded System Design — featured tall card */}
          <div className="glass-card p-8 rounded-3xl group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300 md:row-span-2">
            <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
                developer_board
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl mb-4">
              Embedded System Design
            </h3>
            <p className="text-on-surface-variant mb-6">
              On-demand design and manufacturing of custom embedded systems —
              from PCB layout and firmware to the finished product.
            </p>
            <img
              alt="Embedded system PCB design"
              className="w-full h-64 object-cover rounded-xl mb-6 group-hover:brightness-110 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkhUlURnvWJ3nLZzdaF0rpDISYbBL860hjfIP9YpaodbLnkvkMOmstZdickzwTwVNA2ultwMHdPBottFQuASeu-oOe3HSW9ygq6-T5rCp2uyTtYI32hn4WvPEun0p4khYHrtVOr5Tafu8QoIqjY94QN-iq7E-7pa5efUsJuogpx0kYuaa0BQ91bCmgfewEDp72sMBHQw3PcOMdYQEhE9LCBR064D8_JOfXf8Q67sRld2BRsiT2DIPkXQs--QJW49hJm1yr-pmyly-h"
            />
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant transition-transform group-hover:translate-x-1">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                Schematic &amp; PCB Design
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant transition-transform group-hover:translate-x-1">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                Firmware Development
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant transition-transform group-hover:translate-x-1">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                Prototype to Production
              </li>
            </ul>
          </div>

          {/* Water Tank Level Controller */}
          <div className="glass-card p-8 rounded-3xl group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:-rotate-12">
                water_drop
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl mb-4">
              Water Tank Controller
            </h3>
            <p className="text-on-surface-variant mb-6">
              Automated level monitoring and pump control for residential and
              commercial water tanks — no overflow, no dry runs.
            </p>
            <img
              className="w-full h-40 object-cover rounded-xl group-hover:brightness-110 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsW0Fm5FfWblth2xmdEuJgCK06S9WkfflnMhpIN-lUSFk4XrBVsn4fO-sa_fqbi4OBTLSH615RQMhLj5r7Hj9JV5c8tYxn4zf0w6CgxwhHO637aeL5s-Ehzjs-e2lsIyZlgSsCEnkEyTYUad_T23cvWcoBea14NBXCSo7JSl0ocVxAeE6L-sBm3zWYohCl2U1TH9u4CBbNrtiNpGK26FrJ9FkyqBnGewsmF8euPjST418hjtNXve3q4vsz8DrzqxliyJEgovv6FNojgyo"
              alt="Water tank level controller"
            />
          </div>

          {/* CCTV Installation */}
          <div className="glass-card p-8 rounded-3xl overflow-hidden group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
                videocam
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl mb-4">
              CCTV Installation
            </h3>
            <p className="text-on-surface-variant mb-6">
              Professional surveillance setup with HD cameras, remote live
              viewing, and motion detection alerts.
            </p>
            <img
              className="w-full h-40 object-cover rounded-xl group-hover:brightness-110 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6kQ5SOnTO3DPqNiSCgUegZH7_SV7vmAKDIqYQAOS2VO-o9DUGfqtPzKZ5cPYbs_vcifyPJWUsEOPG3g_dvWRmFqSPkepMriJVQkyEMqVnK0OdC6_rilSPPVdT5cH38oBV66Ozcr14MxnicgoZ7r37m89H0HuE_nDa2eMbYO7nbNO8fnRV7JpdifTz3yAt8SNytlAvwN2AMau0aBy80oGNU_HQ33M5UuK21tOcQLQpdNikxAMrzTRFRcPOPlNKiULalkH9usWlDCmd"
              alt="CCTV security cameras"
            />
          </div>

          {/* Chip Level Laptop Service */}
          <div className="glass-card p-8 rounded-3xl overflow-hidden group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12">
                build
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl mb-4">
              Chip Level Laptop Service
            </h3>
            <p className="text-on-surface-variant mb-6">
              Deep hardware repair — motherboard diagnostics, BGA rework, and
              component-level fault resolution for all laptop brands.
            </p>
            <img
              className="w-full h-40 object-cover rounded-xl group-hover:brightness-110 transition-all"
              src={laptopRepairImg}
              alt="Laptop repair"
            />
          </div>

          {/* Web / App / Mobile Development — full width */}
          <div className="glass-card p-8 rounded-3xl group hover:bg-surface-container hover:-translate-y-2 transition-all duration-300 md:col-span-3 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full">
              <p className="text-on-surface-variant mb-6">
                End-to-end digital products — responsive websites, web apps, and
                cross-platform mobile apps tailored to your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  Website
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  Web App
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  Mobile App
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  UI/UX Design
                </span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm">
                {/* Editor title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                  <span className="ml-3 text-xs text-on-surface-variant">
                    index.html
                  </span>
                </div>
                {/* Code lines */}
                <div className="bg-surface-container px-5 py-4 space-y-1 leading-6">
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      1
                    </span>
                    <span className="text-blue-400">&lt;!DOCTYPE </span>
                    <span className="text-primary">html</span>
                    <span className="text-blue-400">&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      2
                    </span>
                    <span className="text-blue-400">&lt;html</span>{" "}
                    <span className="text-yellow-400">lang</span>
                    <span className="text-on-surface/70">=</span>
                    <span className="text-green-400">"en"</span>
                    <span className="text-blue-400">&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      3
                    </span>
                    <span className="text-blue-400 ml-4">&lt;head&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      4
                    </span>
                    <span className="ml-8 text-blue-400">&lt;title&gt;</span>
                    <span className="text-on-surface">MDtronix</span>
                    <span className="text-blue-400">&lt;/title&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      5
                    </span>
                    <span className="text-blue-400 ml-4">&lt;/head&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      6
                    </span>
                    <span className="text-blue-400 ml-4">&lt;body&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      7
                    </span>
                    <span className="ml-8 text-blue-400">&lt;section</span>{" "}
                    <span className="text-yellow-400">class</span>
                    <span className="text-on-surface/70">=</span>
                    <span className="text-green-400">"hero"</span>
                    <span className="text-blue-400">&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      8
                    </span>
                    <span className="ml-12 text-blue-400">&lt;h1&gt;</span>
                    <span className="text-primary">Intelligence Redefined</span>
                    <span className="text-blue-400">&lt;/h1&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      9
                    </span>
                    <span className="ml-8 text-blue-400">&lt;/section&gt;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      10
                    </span>
                    <span className="text-blue-400 ml-4">&lt;/body&gt;</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-on-surface-variant/50 select-none mr-4">
                      11
                    </span>
                    <span className="text-blue-400">&lt;/html&gt;</span>
                    <span className="inline-block w-2 h-4 bg-primary/80 ml-1 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
