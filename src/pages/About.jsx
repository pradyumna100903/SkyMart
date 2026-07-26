import React from "react";
import {
  ShoppingBag,
  Users,
  ShieldCheck,
  Truck,
  Star,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";
import AboutSection from "../components/About/AboutSection";
import AboutUs from "../components/About/AboutUs";
import MeetTeam from "../components/About/MeetTeam";
import CallToActionBanner from "../components/About/CallToActionBanner";

const About = () => {
  return (
    <div>
      <AboutSection />
      <AboutUs />
      <MeetTeam />
      <CallToActionBanner />
    </div>
  );
};

export default About;
