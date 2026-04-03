import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { Logo } from "@/components/Logo";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { openModal } = useConsultation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <div className="w-full pt-28">
      {/* Section 1 - Page Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden bg-navy">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <Logo className="h-16 w-auto opacity-80" showText={false} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-ivory mb-4"
          >
            Contact Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-ivory/70 font-light italic mb-8"
          >
            "We'd love to hear from you."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Button onClick={openModal} size="lg" className="bg-gold text-navy hover:bg-amber">
              Request a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Contact Layout */}
      <section className="py-24 bg-ivory text-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left - Contact Form (60%) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[60%]"
            >
              <h2 className="text-4xl font-serif mb-10">Send Us a Message</h2>
              
              {isSubmitSuccessful ? (
                <div className="bg-navy text-ivory p-8 border-l-4 border-gold">
                  <h3 className="text-2xl font-serif mb-2 text-gold">Thank You</h3>
                  <p className="font-light">Your message has been received. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        {...register("fullName")}
                        type="text"
                        id="fullName"
                        className="w-full bg-navy text-ivory px-4 py-4 border-b-2 border-transparent focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Full Name"
                      />
                      <label htmlFor="fullName" className="absolute left-4 top-4 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-navy -top-6">
                        Full Name *
                      </label>
                      {errors.fullName && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.fullName.message}</span>}
                    </div>
                    
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full bg-navy text-ivory px-4 py-4 border-b-2 border-transparent focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Email Address"
                      />
                      <label htmlFor="email" className="absolute left-4 top-4 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-navy -top-6">
                        Email Address *
                      </label>
                      {errors.email && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full bg-navy text-ivory px-4 py-4 border-b-2 border-transparent focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Phone Number"
                      />
                      <label htmlFor="phone" className="absolute left-4 top-4 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-navy -top-6">
                        Phone Number (Optional)
                      </label>
                    </div>
                    
                    <div className="relative">
                      <select
                        {...register("subject")}
                        id="subject"
                        defaultValue=""
                        className="w-full bg-navy text-ivory px-4 py-4 border-b-2 border-transparent focus:border-gold outline-none transition-colors appearance-none"
                      >
                        <option value="" disabled hidden>Select Subject *</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Business Development">Business Development</option>
                        <option value="Support">Support</option>
                      </select>
                      {errors.subject && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.subject.message}</span>}
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className="w-full bg-navy text-ivory px-4 py-4 border-b-2 border-transparent focus:border-gold outline-none transition-colors peer placeholder-transparent resize-none"
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-4 top-4 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-navy -top-6">
                      Message *
                    </label>
                    {errors.message && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.message.message}</span>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right - Contact Info Panel (40%) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[40%]"
            >
              <div className="bg-navy text-ivory p-10 border-l-4 border-gold h-full flex flex-col">
                <h3 className="text-2xl font-serif mb-8 text-gold">Contact Information</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="flex items-start gap-4 pb-6 border-b border-gold/20">
                    <Mail className="w-6 h-6 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Email</span>
                      <a href="mailto:info@babylonllc.com" className="hover:text-gold transition-colors">info@babylonllc.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-6 border-b border-gold/20">
                    <MapPin className="w-6 h-6 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Address</span>
                      <span>2221 Oakland Rd<br />San Jose, CA 95131</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-6 border-b border-gold/20">
                    <Phone className="w-6 h-6 text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Phone</span>
                      <span>415 814 9788 ext. 408</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-6 border-b border-gold/20">
                    <div className="w-6 h-6 flex items-center justify-center text-gold shrink-0">
                      <span className="text-lg font-serif">🕐</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Office Hours</span>
                      <span>Mon–Fri: 9AM–5PM<br /><span className="text-ivory/50 text-sm">(Appointment Required)</span></span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-6 border-b border-gold/20">
                    <div className="w-6 h-6 flex items-center justify-center text-gold shrink-0">
                      <span className="text-lg font-serif">💼</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Business Dev</span>
                      <a href="mailto:bizdev@babylonllc.com" className="hover:text-gold transition-colors">bizdev@babylonllc.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center text-gold shrink-0">
                      <span className="text-lg font-serif">🛠</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gold uppercase tracking-widest mb-1">Support</span>
                      <a href="mailto:support@babylonllc.com" className="hover:text-gold transition-colors">support@babylonllc.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-10 pt-6 border-t border-gold/20">
                  <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-all">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Section 3 - Map */}
      <section className="w-full h-[50vh] bg-navy relative grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x808fcc0b27b686d1%3A0x6295c5c16b9b3e1!2s2221%20Oakland%20Rd%2C%20San%20Jose%2C%20CA%2095131!5e0!3m2!1sen!2sus!4v1709665200000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        {/* Overlay to ensure it matches brand colors when not hovered */}
        <div className="absolute inset-0 bg-navy/40 pointer-events-none mix-blend-multiply"></div>
      </section>

      {/* Section 4 - Closing Statement */}
      <section className="py-24 bg-navy relative flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[1px] w-24 bg-gold/30 mb-10"
        ></motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-serif text-ivory mb-6"
        >
          We're Here For You
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-ivory/70 font-light max-w-2xl"
        >
          At Babylon LLC, we value your feedback and are committed to providing excellent service.
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[1px] w-24 bg-gold/30 mt-10"
        ></motion.div>
      </section>
    </div>
  );
}
