'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Building2,
  ShieldCheck
} from 'lucide-react';
import Navbar from '@/src/Layout/Navbar';


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'property-purchase',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', interest: 'property-purchase', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <header className="relative bg-slate-950 text-white min-h-[45vh] flex flex-col justify-between overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-0" />

        <Navbar />

        {/* Hero Title Block */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-8 pb-24 text-center mt-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-[0.2em] uppercase text-white drop-shadow-md">
            CONNECT WITH US
          </h1>
          <div className="w-16 h-[3px] bg-[#F49200] mx-auto mt-4" />
        </div>

        {/* Architectural Wave Base */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </header>

      {/* 2. SPLIT INTERACTIVE CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: CORPORATE CHANNELS & HQ METRICS */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">
              Inquiry Desk
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Let's Discuss Your Future Space
            </h2>
            <div className="w-12 h-1 bg-[#F49200]" />
            <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed pt-2">
              Whether you are an individual buyer looking for your next home, a diaspora stakeholder, or an institutional investment partner seeking high-yield positions in Abuja, our client relations team is ready to assist.
            </p>
          </div>

          {/* Core Structured Channel Matrix */}
          <div className="space-y-4">
            
            {/* HQ Address */}
            <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#F49200] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Corporate Headquarters</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Calycia Smart Homes Office,<br />
                  Guzape District, Abuja, FCT, Nigeria
                </p>
              </div>
            </div>

            {/* Telephone Lines */}
            <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#F49200] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Direct Inquiries</h4>
                <p className="text-xs text-slate-600 font-bold tracking-wide">
                  +234 (0) 800 CALYCIA [225-9242] <br />
                  <span className="font-light text-gray-500">+234 (0) 901 234 5678</span>
                </p>
              </div>
            </div>

            {/* Email Channels */}
            <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#F49200] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Digital Correspondence</h4>
                <p className="text-xs text-slate-600 font-medium">
                  info@calyciasmarthomes.com<br />
                  <span className="font-light text-gray-400">invest@calyciasmarthomes.com</span>
                </p>
              </div>
            </div>

            {/* Operating Framework */}
            <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#F49200] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Availability Hours</h4>
                <p className="text-xs text-slate-600 font-light">
                  Monday – Friday: 08:00 AM – 05:00 PM (WAT)<br />
                  <span className="italic text-[#F49200] font-medium text-[11px]">Weekend walkthroughs available via appointment only.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-CONTRAST INTERACTIVE INTAKE FORM */}
        <div className="lg:col-span-7 bg-white border border-gray-200/80 p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#F49200]" />
          
          <div className="mb-8 space-y-2">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Direct Client Intake</h3>
            <p className="text-xs text-gray-400 font-light">Complete the structural registry fields below. Your assigned agent will respond within 24 processing hours.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-xl text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black uppercase text-sm tracking-wide">Transmission Complete</h4>
                <p className="text-xs text-emerald-700 font-light max-w-sm mx-auto leading-relaxed">
                  Your entry has bypassed standard logs and successfully routed to our Abuja allocation department. Thank you for connecting with Calycia Smart Homes.
                </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold uppercase tracking-wider text-emerald-600 underline hover:text-emerald-800 bg-transparent border-none mt-2 cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="e.g. Chidi Okonji"
                    className="w-full text-xs font-medium bg-slate-50 border border-gray-200 rounded-lg p-3.5 focus:outline-hidden focus:border-[#F49200] focus:bg-white transition-colors"
                  />
                </div>

                {/* Telephone */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="e.g. +234 803 123 4567"
                    className="w-full text-xs font-medium bg-slate-50 border border-gray-200 rounded-lg p-3.5 focus:outline-hidden focus:border-[#F49200] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">Email Address *</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="name@domain.com"
                  className="w-full text-xs font-medium bg-slate-50 border border-gray-200 rounded-lg p-3.5 focus:outline-hidden focus:border-[#F49200] focus:bg-white transition-colors"
                />
              </div>

              {/* Interest Selector Category */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">Primary Intent / Engagement Profile</label>
                <div className="relative">
                  <select 
                    value={formState.interest}
                    onChange={(e) => setFormState({...formState, interest: e.target.value})}
                    className="w-full text-xs font-semibold bg-slate-50 border border-gray-200 rounded-lg p-3.5 focus:outline-hidden focus:border-[#F49200] focus:bg-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="property-purchase">Property Purchase / Off-Plan Intake</option>
                    <option value="land-banking">Strategic Land Banking Inquiries</option>
                    <option value="investment-partnership">Capital / Diaspora Investment Alignment</option>
                    <option value="joint-venture">Joint Venture / Landowner Synergy</option>
                    <option value="general">General Administrative Request</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Message Payload */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">Message Details *</label>
                <textarea 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Outline the parameters of your request or structural specifications..."
                  className="w-full text-xs font-medium bg-slate-50 border border-gray-200 rounded-lg p-3.5 focus:outline-hidden focus:border-[#F49200] focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Privacy/Security Note Disclaimer */}
              <div className="flex items-start space-x-2.5 text-[10px] text-gray-400 font-light bg-gray-50 p-3 rounded-lg border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-[#F49200] flex-shrink-0 mt-0.5" />
                <span>Your identity variables are cryptographically protected. Calycia Smart Homes never exchanges database arrays with tracking or unauthorized third-party marketing entities.</span>
              </div>

              {/* Form Action Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-950 text-white px-6 py-4 rounded-lg text-xs font-black tracking-widest hover:bg-[#F49200] disabled:bg-slate-300 transition-all shadow-md group cursor-pointer"
                >
                  <span>{isSubmitting ? 'TRANSMITTING ENTRY...' : 'TRANSMIT DIRECT INQUIRY'}</span>
                  {!isSubmitting && <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* 3. FULL-WIDTH HIGH CONTRAST INTERACTIVE REGION MAP PLACEHOLDER */}
      <section className="w-full bg-slate-50 border-t border-b border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[#F49200]">
                <Building2 className="w-4 h-4" />
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">Guzape Expansion Node Matrix</h3>
              </div>
              <p className="text-xs text-gray-400 font-light">Visualizing geographical development nodes across the FCT infrastructure network.</p>
            </div>
            <div className="text-xs font-bold text-slate-500 tracking-wider uppercase bg-white px-3 py-2 rounded-lg border border-gray-200/60 shadow-2xs">
              GPS: 9.0143° N, 7.5189° E
            </div>
          </div>
          
          {/* Aesthetic Mock Map Representation Canvas Layout */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 shadow-inner flex items-center justify-center group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay transition-scale duration-10000 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            
            {/* Center Dynamic Target Overlay Marker */}
            <div className="relative z-20 text-center space-y-4 max-w-sm px-6">
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-amber-400 opacity-25 animate-ping" />
                <div className="relative w-10 h-10 rounded-full bg-[#F49200] flex items-center justify-center text-white shadow-xl">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-white">Calycia Project Hub</h4>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  Guzape Metropolitan Corridor, Abuja. Site visits interface smoothly via pre-clearance tracking slots.
                </p>
              </div>
              <div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#F49200] uppercase tracking-wider bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-md border border-slate-800 hover:bg-[#F49200] hover:text-white transition-colors"
                >
                  <span>Launch Google Navigation</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}