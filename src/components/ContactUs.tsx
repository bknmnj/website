import { Mail, MapPin } from "lucide-react";
import React from "react";

interface ContactUsProps {
  address: string;
  phone: string;
  email: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ address, phone, email }) => {
  return (
    <div className="mx-auto max-w-5xl border border-[#E8DDC8] bg-white p-7 shadow-sm sm:p-10 lg:p-12">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-5xl font-semibold italic text-[#10263B]">Contact Us</h2>
          <p className="mt-3 text-lg text-[#58636D]">Have a question? We're here to help!</p>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B48A45]/45 bg-[#F7F2E8]">
                <MapPin className="h-6 w-6 text-[#9A7134]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#10263B]">Address</h3>
                <p className="mt-1 text-[#58636D]">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B48A45]/45 bg-[#F7F2E8]">
                <Mail className="h-6 w-6 text-[#9A7134]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#10263B]">Email</h3>
                <a href={`mailto:${email}`} className="mt-1 inline-block text-[#713B42] underline-offset-4 hover:underline">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-72 overflow-hidden border border-[#E8DDC8] bg-[#E8DDC8]/45 p-2 sm:min-h-80">
          <img
            src="/nmnj-pin.png"
            alt="Map showing New Milford, New Jersey"
            className="h-full min-h-72 w-full object-cover sm:min-h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
