// import { useState } from "react";
// import { Phone, Download } from "lucide-react";

// const EnquiryForm = () => {
//   const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
//   const [consent, setConsent] = useState(true);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you for your interest in GODREJ RAIPUR PLOTS! Our team will contact you shortly.");
//     setFormData({ name: "", mobile: "", email: "" });
//   };

//   return (
//     <div id="enquiry" className="w-full glass-card rounded-xl p-6 space-y-4">
//       <div className="flex gap-2 mb-2">
//         <a href="#" className="flex-1 bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition">
//           Book FREE Site Visit
//         </a>
//         <a
//           href="https://api.whatsapp.com/send?phone=9399492809&text=Hi!%20I'm%20Interested%20In%20GODREJ %20RAIPUR PLOTS%20Raipur"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 bg-gradient-gold text-forest-deep text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
//         >
//           WhatsApp Us
//         </a>
//       </div>

//       {/* <p className="text-center text-muted-foreground text-xs">or Request a</p>
//       <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition">
//         <Phone className="w-4 h-4" />
//         Call Back Now
//       </button> */}

//       <div className="border-t border-border pt-4">
//         <h3 className="font-display text-lg font-bold text-foreground text-center mb-4">
//           Book a Free Consultation
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
//           <input type="tel" placeholder="Mobile No" required value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
//           <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
//           <label className="flex items-start gap-2 text-xs text-muted-foreground">
//             <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-primary" />
//             I consent to the use of my provided data in accordance with the privacy policy.
//           </label>
//           <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition">
//             Book a Free Consultation
//           </button>
//         </form>
//       </div>

//       {/* <div className="text-center pt-2 border-t border-border">
//         <p className="text-xs text-muted-foreground mb-2">For More Information:</p>
//         <button className="flex items-center justify-center gap-2 mx-auto border border-border rounded-lg px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition">
//           <Download className="w-4 h-4" />
//           Download Brochure
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default EnquiryForm;





import { useState } from "react";
import { Phone, Download } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "", 
    mobile: "", 
    email: "" 
  });
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please consent to the privacy policy to continue.' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Split full name into first and last name
    // If user enters full name in first name field, we'll split it
    let firstName = formData.firstName;
    let lastName = formData.lastName;

    // If firstName contains space and lastName is empty, split it
    if (firstName.includes(' ') && !lastName) {
      const nameParts = firstName.split(' ');
      firstName = nameParts[0];
      lastName = nameParts.slice(1).join(' ');
    }

    const payload = {
      first_name: firstName || "Not provided",
      last_name: lastName || "Not provided",
      email: formData.email,
      phone_number: formData.mobile,
      message: `Enquiry from GODREJ RAIPUR PLOTS landing page`
    };

    try {
      const response = await fetch('https://test.shrirajteam.com:85/leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your interest in GODREJ RAIPUR PLOTS! Our team will contact you shortly.' 
        });
        // Reset form
        setFormData({ 
          firstName: "", 
          lastName: "", 
          mobile: "", 
          email: "" 
        });
        setConsent(true);
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      if (submitStatus.type === 'success') {
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);
      }
    }
  };

  return (
    <div id="enquiry" className="w-full glass-card rounded-xl p-6 space-y-4">
      <div className="flex gap-2 mb-2">
        <a href="#" className="flex-1 bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition">
          Book FREE Site Visit
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9399492809&text=Hi!%20I'm%20Interested%20In%20GODREJ %20RAIPUR PLOTS%20Raipur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-gold text-forest-deep text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          WhatsApp Us
        </a>
      </div>

      <div className="border-t border-border pt-4">
        <h3 className="font-display text-lg font-bold text-foreground text-center mb-4">
          Book a Free Consultation
        </h3>
        
        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name" 
            required 
            value={formData.firstName} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <input 
            type="tel" 
            name="mobile"
            placeholder="Mobile No" 
            required 
            value={formData.mobile} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input 
              type="checkbox" 
              checked={consent} 
              onChange={(e) => setConsent(e.target.checked)} 
              disabled={isSubmitting}
              className="mt-0.5 accent-primary"
            />
            I consent to the use of my provided data in accordance with the privacy policy.
          </label>
          <button 
            type="submit" 
            disabled={isSubmitting || !consent}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;