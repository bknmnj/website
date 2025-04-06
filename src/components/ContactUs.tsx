import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactUsProps {
  address: string;
  phone: string;
  email: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ address, phone, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">Have a question? We're here to help!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FDF4EA] p-3 rounded-full">
              <MapPin className="w-6 h-6 text-[#D4A373]" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Address</h3>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>

          {/* <div className="flex items-start space-x-4">
            <div className="bg-[#FDF4EA] p-3 rounded-full">
              <Phone className="w-6 h-6 text-[#D4A373]" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Phone</h3>
              <p className="text-gray-600">{phone}</p>
            </div>
          </div> */}

          <div className="flex items-start space-x-4">
            <div className="bg-[#FDF4EA] p-3 rounded-full">
              <Mail className="w-6 h-6 text-[#D4A373]" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-[#D4A373] hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg h-full min-h-[300px] flex items-center justify-center">
          <img
            src="/nmnj-pin.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
