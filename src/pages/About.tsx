import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, CheckCircle, DollarSign, Clock } from "lucide-react";

export function About() {
  return (
    <div className="w-full pt-28">
      {/* Section 1 - Page Hero */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-navy">
        {/* Subtle animated background grid */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#C9952A 1px, transparent 1px), linear-gradient(90deg, #C9952A 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-ivory/50 text-xs tracking-[0.2em] uppercase">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link> / About
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-ivory mb-8"
          >
            About Babylon
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[1px] w-32 bg-gold mx-auto origin-center"
          ></motion.div>
        </div>
      </section>

      {/* Section 2 - Our Story */}
      <section className="py-24 bg-ivory text-navy relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-full border border-muted-gold/30 p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/about_story.png" 
                    alt="Our Story" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-muted-gold"></div>
                <span className="text-muted-gold text-xs tracking-[0.2em] font-medium uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                Established in 2016
              </h2>
              <p className="text-navy/70 text-lg font-light leading-relaxed">
                Babylon LLC was founded with a singular vision: to bridge the gap between ancient beauty rituals and cutting-edge cosmetic science. Based in the heart of Silicon Valley, we bring a tech-forward approach to clean beauty manufacturing. Our facility was built from the ground up to support brands that refuse to compromise on quality, safety, or efficacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Mission */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/3] border border-gold/30 p-4">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop" 
                    alt="Our Mission" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/30 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-gold text-xs tracking-[0.2em] font-medium uppercase">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-8">
                Redefining the <br /> Beauty Industry
              </h2>
              <p className="text-ivory/70 text-lg font-light leading-relaxed">
                We are on a mission to elevate the standard of contract manufacturing. By providing transparent processes, ethically sourced ingredients, and unparalleled customer support, we empower brands to create products that truly make a difference in their customers' lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3.5 - Brand DNA Animation */}
      <section className="py-32 bg-navy relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-gold text-xs tracking-[0.2em] font-medium uppercase">
              Our Brand DNA
            </span>
          </motion.div>

          <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
            {/* Ancient Pattern (Mesopotamian Star/Geometry) */}
            <motion.div
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              whileInView={{ opacity: 0.15, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="400" height="400" viewBox="0 0 100 100" className="text-gold fill-current">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </motion.div>

            {/* Modern Science Graphic (Hexagon/Molecule) */}
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="300" height="300" viewBox="0 0 100 100" className="text-ivory stroke-current" fill="none" strokeWidth="0.5">
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" strokeDasharray="1 2" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
                <circle cx="50" cy="5" r="3" fill="currentColor" />
                <circle cx="90" cy="25" r="3" fill="currentColor" />
                <circle cx="90" cy="75" r="3" fill="currentColor" />
                <circle cx="50" cy="95" r="3" fill="currentColor" />
                <circle cx="10" cy="75" r="3" fill="currentColor" />
                <circle cx="10" cy="25" r="3" fill="currentColor" />
                <line x1="50" y1="50" x2="50" y2="5" />
                <line x1="50" y1="50" x2="90" y2="25" />
                <line x1="50" y1="50" x2="10" y2="75" />
              </svg>
            </motion.div>

            {/* Central Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative z-20 bg-navy/60 backdrop-blur-sm p-8 rounded-full border border-gold/20"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-ivory text-center leading-snug">
                Ancient Legacy <br />
                <span className="text-gold italic text-xl md:text-2xl">meets</span> <br />
                Cutting-Edge Science
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Core Values Grid */}
      <section className="py-24 bg-ivory text-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-muted-gold text-xs tracking-[0.2em] font-medium uppercase">
              Core Values
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Constantly exploring new ingredients and delivery systems." },
              { icon: ShieldCheck, title: "Safety", desc: "Rigorous testing protocols to ensure product integrity." },
              { icon: CheckCircle, title: "GMP Certified", desc: "Adhering to the highest manufacturing standards." },
              { icon: DollarSign, title: "Affordable Prices", desc: "Competitive pricing without sacrificing quality." },
              { icon: Clock, title: "Low MOQ & Lead Times", desc: "Flexible solutions for brands of all sizes." },
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-navy text-ivory p-8 border-t-2 border-gold hover:-translate-y-2 transition-transform duration-300 shadow-lg ${index === 3 ? 'lg:col-start-1 lg:col-end-2' : ''} ${index === 4 ? 'lg:col-start-2 lg:col-end-3' : ''}`}
              >
                <value.icon className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-ivory/70 font-light text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Banner */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop" 
            alt="Join Us" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-ivory mb-6"
          >
            Join Us in Redefining Beauty
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-ivory/80 font-light mb-10"
          >
            Partner with a manufacturer that cares about your brand's success as much as you do. Let's create something extraordinary together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Closing Statement */}
      <section className="py-32 bg-navy relative flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 opacity-10">
           {/* Ambient background placeholder */}
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[1px] w-24 bg-gold mb-12"
        ></motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-4xl font-serif italic text-ivory/90 max-w-4xl leading-relaxed"
        >
          "Welcome to Our Babylon — where clean beauty meets innovation."
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[1px] w-24 bg-gold mt-12"
        ></motion.div>
      </section>
    </div>
  );
}
