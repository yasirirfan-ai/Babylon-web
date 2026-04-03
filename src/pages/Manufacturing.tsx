import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskConical, Droplet, Crown, ShieldCheck, Activity } from "lucide-react";

export function Manufacturing() {
  return (
    <div className="w-full pt-28">
      {/* Section 1 - Page Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/80 z-10" />
          <img 
            src="/manufacturing.png" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gold text-xs tracking-[0.3em] font-medium uppercase">
              Contract Manufacturing
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-ivory mb-6"
          >
            Batching & Filling Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto"
          >
            Catering to <span className="font-medium text-ivory relative inline-block">
              Cosmetic, Skincare & Personal Care Brands
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold origin-left"
              />
            </span>
          </motion.p>
        </div>
      </section>

      {/* Section 2 - Capacity Overview */}
      <section className="bg-navy border-y border-gold/20 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gold/20">
            {[
              { stat: "2,500-3,500", label: "MOQ Units" },
              { stat: "500,000+", label: "Unit Capacity" },
              { stat: "5", label: "Filling Lines" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center justify-center text-center py-4 md:py-0"
              >
                <span className="text-4xl md:text-5xl font-serif text-gold mb-2">{item.stat}</span>
                <span className="text-ivory/70 text-sm tracking-widest uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Product Photography Feature */}
      <section className="relative py-32 overflow-hidden bg-ivory">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="bg-navy p-10 md:p-12 border-l-4 border-gold shadow-2xl">
                <p className="text-ivory/90 text-lg font-light leading-relaxed mb-6">
                  "We cater to both large and small (indie) brands looking for a reliable manufacturing partner."
                </p>
                <p className="text-ivory/70 text-base font-light leading-relaxed">
                  Our cGMP facility has five filling lines and scheduling capacity to accommodate rush orders, ensuring your products get to market when you need them.
                </p>
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <img 
                  src="/home_hero.png" 
                  alt="Products" 
                  className="w-full h-full object-cover rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Service Tiers */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.2em] font-medium uppercase">
              What We Offer
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FlaskConical, title: "Bulk", desc: "We make the bulk, you do the rest. Perfect for brands with their own filling capabilities." },
              { icon: Droplet, title: "Fill + Assembly", desc: "Your bulk and packaging — with our help. We handle the precise filling and final assembly." },
              { icon: Crown, title: "Full Turnkey", desc: "From concept to finished product. We handle everything including formulation, packaging, and fulfillment." },
            ].map((tier, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-navy border border-gold/20 p-8 hover:border-gold hover:shadow-[0_0_30px_rgba(201,149,42,0.1)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <tier.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-serif text-ivory mb-4">{tier.title}</h3>
                <p className="text-ivory/70 font-light leading-relaxed">{tier.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Regulatory & Compliance */}
      <section className="py-24 bg-ivory text-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
                alt="GMP Compliance" 
                className="w-full h-auto object-cover rounded-sm shadow-lg grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-4xl font-serif mb-6">GMP Certified Excellence</h2>
              <p className="text-navy/70 text-lg font-light leading-relaxed mb-6">
                Our facility operates strictly under Good Manufacturing Practices (GMP) in accordance with 21 CFR parts 211. 
              </p>
              <p className="text-navy/70 text-lg font-light leading-relaxed">
                Our formulators and regulatory specialists work hand-in-hand to ensure that every product not only meets your brand's standards but also complies with all global regulatory requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Testing Services */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6 p-8 border border-gold/10 bg-navy/50"
            >
              <Activity className="w-8 h-8 text-gold shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-serif text-ivory mb-3">Stability & Microbial Testing</h3>
                <p className="text-ivory/70 font-light text-sm leading-relaxed">
                  We utilize both our in-house laboratory and partner analytical facilities to conduct rigorous stability and microbial testing, ensuring your product remains safe and effective throughout its shelf life.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 p-8 border border-gold/10 bg-navy/50"
            >
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-serif text-ivory mb-3">Third Party Testing</h3>
                <p className="text-ivory/70 font-light text-sm leading-relaxed">
                  We coordinate comprehensive third-party testing including USP 61/62, MSDS generation, PET (Preservative Efficacy Testing), and RIPT (Repeat Insult Patch Testing) for hypoallergenic claims.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Formula Programs */}
      <section className="py-24 bg-ivory text-navy relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="text-muted-gold text-xs tracking-[0.2em] font-medium uppercase">
              Our Formulation Programs
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-4 py-1 tracking-wider uppercase">
                4-6 Months
              </div>
              <h3 className="text-3xl font-serif mb-4">Ready to Go</h3>
              <p className="text-navy/70 text-lg font-light italic mb-6">"We've got the keys — let's roll."</p>
              <p className="text-navy/70 font-light leading-relaxed">
                Choose from our library of proven, stable, and highly effective base formulas. We can customize these with your signature scent or hero ingredients for a faster path to market.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy text-ivory p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-4 py-1 tracking-wider uppercase">
                6-12 Months
              </div>
              <h3 className="text-3xl font-serif mb-4">Co-Development</h3>
              <p className="text-gold text-lg font-light italic mb-6">"When it comes to partnering, we're in it to win it."</p>
              <p className="text-ivory/70 font-light leading-relaxed">
                Start from scratch. Our chemists will work closely with you to develop a completely unique, proprietary formula tailored to your exact specifications, texture preferences, and performance goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 - Source Integrity */}
      <section className="py-32 bg-navy relative flex flex-col items-center justify-center text-center px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-serif text-ivory leading-relaxed mb-16"
          >
            "Committed to staying ahead of the curve — bringing you the best resources in the beauty industry."
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] w-32 bg-gold mx-auto mb-16"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif text-ivory leading-relaxed"
          >
            "Only lab-certified ingredients. No mysterious fillers. Just ingredients that show off your client's best features."
          </motion.p>
        </div>
      </section>

      {/* Section 9 - CTA Close */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop" 
            alt="Start Formulating" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-ivory mb-10"
          >
            Let's Make It Happen
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link to="/contact-us">Start Formulating</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
