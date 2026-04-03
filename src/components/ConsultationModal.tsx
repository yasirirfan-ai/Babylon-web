import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useConsultation } from "@/context/ConsultationContext";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  details: z.string().min(10, "Please provide some project details"),
});

type FormValues = z.infer<typeof formSchema>;

export function ConsultationModal() {
  const { isOpen, closeModal } = useConsultation();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call to bizdev@babylonllc.com
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Sending to bizdev@babylonllc.com:", data);
  };

  // Reset form when modal closes
  const handleClose = () => {
    closeModal();
    setTimeout(reset, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-full md:w-[600px] max-h-[100vh] md:max-h-[90vh] overflow-y-auto bg-navy border border-gold/20 shadow-2xl md:rounded-sm flex flex-col"
          >
            <div className="sticky top-0 bg-navy/95 backdrop-blur-sm z-10 p-6 border-b border-gold/20 flex items-center justify-between">
              <h2 className="text-2xl font-serif text-gold">Request Consultation</h2>
              <button onClick={handleClose} className="text-ivory/70 hover:text-gold transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              {isSubmitSuccessful ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border-2 border-gold text-gold flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-ivory mb-4">Request Sent Successfully</h3>
                  <p className="text-ivory/70 font-light mb-8">
                    Thank you for your interest. Our business development team will contact you shortly to discuss your project.
                  </p>
                  <Button onClick={handleClose} variant="outline">Close</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        {...register("name")}
                        type="text"
                        id="consult-name"
                        className="w-full bg-navy/50 text-ivory px-4 py-3 border border-gold/20 focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Name"
                      />
                      <label htmlFor="consult-name" className="absolute left-4 top-3 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold -top-6 bg-navy px-1">
                        Full Name *
                      </label>
                      {errors.name && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.name.message}</span>}
                    </div>
                    
                    <div className="relative">
                      <input
                        {...register("company")}
                        type="text"
                        id="consult-company"
                        className="w-full bg-navy/50 text-ivory px-4 py-3 border border-gold/20 focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Company"
                      />
                      <label htmlFor="consult-company" className="absolute left-4 top-3 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold -top-6 bg-navy px-1">
                        Company *
                      </label>
                      {errors.company && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.company.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        id="consult-email"
                        className="w-full bg-navy/50 text-ivory px-4 py-3 border border-gold/20 focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Email"
                      />
                      <label htmlFor="consult-email" className="absolute left-4 top-3 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold -top-6 bg-navy px-1">
                        Email Address *
                      </label>
                      {errors.email && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.email.message}</span>}
                    </div>
                    
                    <div className="relative">
                      <input
                        {...register("phone")}
                        type="tel"
                        id="consult-phone"
                        className="w-full bg-navy/50 text-ivory px-4 py-3 border border-gold/20 focus:border-gold outline-none transition-colors peer placeholder-transparent"
                        placeholder="Phone"
                      />
                      <label htmlFor="consult-phone" className="absolute left-4 top-3 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold -top-6 bg-navy px-1">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative pt-2">
                    <textarea
                      {...register("details")}
                      id="consult-details"
                      rows={4}
                      className="w-full bg-navy/50 text-ivory px-4 py-3 border border-gold/20 focus:border-gold outline-none transition-colors peer placeholder-transparent resize-none"
                      placeholder="Project Details"
                    ></textarea>
                    <label htmlFor="consult-details" className="absolute left-4 top-3 text-ivory/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold -top-6 bg-navy px-1">
                      Project Details *
                    </label>
                    {errors.details && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.details.message}</span>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
