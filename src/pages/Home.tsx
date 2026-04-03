import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, FlaskConical, Beaker, Factory, Palette, Megaphone, Package, ChevronRight } from "lucide-react";

const processSteps = [
  { 
    id: "innovation",
    icon: FlaskConical, 
    title: "Innovation", 
    desc: "Concept development and trend analysis.",
    details: "Our innovation team constantly scans the global market for emerging trends, novel ingredients, and whitespace opportunities. We collaborate with you to conceptualize products that not only meet current consumer demands but anticipate future needs.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "rd",
    icon: Beaker, 
    title: "R&D Process", 
    desc: "Custom formulation and rigorous testing.",
    details: "In our state-of-the-art laboratory, our chemists develop proprietary formulations tailored to your exact specifications. We conduct extensive stability, compatibility, and microbial testing to ensure product integrity and efficacy.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "manufacturing",
    icon: Factory, 
    title: "Manufacturing", 
    desc: "cGMP certified batching and filling.",
    details: "Our cGMP-certified facility is equipped with advanced compounding vessels and automated filling lines. We maintain strict quality control protocols throughout the entire manufacturing process, from raw material receipt to final product release.",
    image: "https://images.unsplash.com/photo-1615397323758-2e2d70881180?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    id: "design",
    icon: Palette, 
    title: "Brand Design", 
    desc: "Packaging selection and visual identity.",
    details: "We offer comprehensive packaging sourcing and design services. Our team helps you select primary and secondary packaging that aligns with your brand identity, protects the formulation, and enhances the user experience.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    id: "marketing",
    icon: Megaphone, 
    title: "Marketing", 
    desc: "Positioning and go-to-market strategy.",
    details: "Beyond manufacturing, we provide strategic marketing support. We assist with product positioning, claims substantiation, and the development of compelling marketing collateral to ensure a successful launch.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop"
  },
  { 
    id: "fulfillment",
    icon: Package, 
    title: "Fulfillment", 
    desc: "Warehousing and logistics solutions.",
    details: "Our turnkey service includes comprehensive fulfillment solutions. We offer secure warehousing, inventory management, and efficient pick-pack-ship services for both B2B and direct-to-consumer channels.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop"
  },
];

export function Home() {
  const [activeStep, setActiveStep] = useState(processSteps[0].id);

  return (
    <div className="w-full">
      {/* Section 1 - Hero */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/70 z-10" />
          <img 
            src="/home_hero.png" 
            alt="Cosmetic Manufacturing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Watermark Logo */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-5 pointer-events-none">
           <div className="w-[60vh] h-[80vh] border-[20px] border-gold rounded-t-full flex items-end justify-center pb-10 relative overflow-hidden">
              <div className="w-[30vh] h-[40vh] border-[10px] border-gold rounded-t-full absolute bottom-0"></div>
           </div>
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-gold text-xs tracking-[0.3em] font-medium uppercase">
              Clean Beauty Manufacturing
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-8 leading-tight text-balance"
          >
            Let Us Formulate <br className="hidden md:block" /> For You
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mb-12"
          >
            Allow us to support you in making your vision a reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-navy">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Section 2 - About Babylon */}
      <section className="py-24 md:py-32 bg-ivory text-navy relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
            {/* Decorative Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-muted-gold/20 -translate-x-1/2"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 md:pr-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-muted-gold"></div>
                <span className="text-muted-gold text-xs tracking-[0.2em] font-medium uppercase">About Babylon</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">
                Beauty Without <br /> Compromise
              </h2>
              <p className="text-navy/70 text-lg font-light leading-relaxed mb-10">
                Founded in 2016, Babylon LLC is a premier cosmetic contract manufacturer specializing in clean beauty. We combine ancient wisdom with modern scientific precision to create luxurious, effective formulations for both indie and established brands.
              </p>
              <Link to="/about" className="group inline-flex flex-col">
                <span className="text-muted-gold text-sm tracking-[0.2em] font-medium uppercase mb-2 flex items-center gap-2">
                  Read More <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <span className="h-[1px] w-full bg-muted-gold/30 group-hover:bg-muted-gold transition-colors duration-300"></span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 md:pl-12 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-t-full border border-muted-gold/30 p-4">
                <div className="w-full h-full rounded-t-full overflow-hidden relative bg-navy/5">
                  <img 
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2000&auto=format&fit=crop" 
                    alt="Clean Beauty Products" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/10 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - CTA Banner */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1571781526291-c577efd15048?q=80&w=2070&auto=format&fit=crop" 
            alt="Laboratory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] w-24 bg-gold mx-auto mb-8 origin-center"
          ></motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-ivory mb-6"
          >
            We Can Work With You
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-ivory/80 font-light mb-10"
          >
            Whether you are an indie brand starting out or a large corporation looking to scale, our state-of-the-art facility and expert team are ready to bring your products to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Process */}
      <section className="py-24 md:py-32 bg-ivory text-navy relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-muted-gold text-xs tracking-[0.2em] font-medium uppercase">
              Our Turnkey Manufacturing Process
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Timeline Selection */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {processSteps.map((step, index) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-6 p-6 text-left transition-all duration-300 border-l-4 ${
                      isActive 
                        ? "bg-white border-gold shadow-lg" 
                        : "bg-transparent border-transparent hover:bg-white/50"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-navy text-gold" : "bg-navy/5 text-navy/50"
                    }`}>
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold tracking-wider uppercase mb-1 block ${
                        isActive ? "text-gold" : "text-navy/40"
                      }`}>
                        Step 0{index + 1}
                      </span>
                      <h3 className={`font-serif text-xl ${
                        isActive ? "text-navy" : "text-navy/70"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeIndicator" className="ml-auto text-gold">
                        <ChevronRight size={20} />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Detail Panel */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {processSteps.map((step) => {
                  if (step.id !== activeStep) return null;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white p-8 md:p-12 shadow-xl h-full flex flex-col"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <step.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                        <h3 className="text-3xl md:text-4xl font-serif text-navy">{step.title}</h3>
                      </div>
                      
                      <div className="relative w-full aspect-video mb-8 overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-navy/10 mix-blend-overlay"></div>
                      </div>
                      
                      <h4 className="text-xl font-medium text-navy mb-4">{step.desc}</h4>
                      <p className="text-navy/70 font-light leading-relaxed text-lg">
                        {step.details}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Brand Promise */}
      <section className="py-32 bg-navy relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop" 
            alt="Abstract Texture" 
            className="w-full h-full object-cover mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-gold text-xs tracking-[0.2em] font-medium uppercase">
              See How We Can Help
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory mb-16 leading-tight max-w-5xl mx-auto text-balance"
          >
            We Help Brands Move the Needle and Become Successful.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-amber">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
