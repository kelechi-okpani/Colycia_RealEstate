'use client';

import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Coins, 
  Leaf, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  ShieldAlert,
  Globe2,
  Calendar
} from 'lucide-react';
import Navbar from '@/src/Layout/Navbar';
import InvestMentHero from '@/src/component/Investment/Investhero';
import InvestMentIntro from '@/src/component/Investment/InvestIntro';
import InvestMentWhys from '@/src/component/Investment/InvestMentWhys';
import InvestMentHousing from '@/src/component/Investment/InvestHousing';
import InvestMentAdvantage from '@/src/component/Investment/InvestAdvantage';
import InvestMentValue from '@/src/component/Investment/Investment';
import InvestWithUs from '@/src/component/Investment/InvestWithUs';
import InvestMentPartnership from '@/src/component/Investment/InvestPartnership';
import InvestMentLookup from '@/src/component/Investment/InvestLookUp';



export default function InvestmentOpportunities() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
      

    <InvestMentHero/>
    <InvestMentIntro/>
    <InvestMentWhys/>
    <InvestMentHousing/>
    <InvestMentAdvantage/>
    <InvestMentValue/>
    <InvestWithUs/>
    <InvestMentPartnership/>
    <InvestMentLookup/>



    </div>
  );
}