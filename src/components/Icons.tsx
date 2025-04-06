import { Heart, Users, Building } from "lucide-react";
import React from "react";

interface IconProps {
  name: "heart" | "users" | "building";
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "heart":
      return <Heart className={className} />;
    case "users":
      return <Users className={className} />;
    case "building":
      return <Building className={className} />;
    default:
      return null;
  }
};
