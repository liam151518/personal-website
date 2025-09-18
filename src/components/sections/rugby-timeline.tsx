import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function RugbyTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            International breakthrough year - crowned HSBC Sevens Challenger Series Champion with Portugal Sevens. 
            Represented the elite level of international rugby sevens competition.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 HSBC Sevens Champion</h4>
              <p className="text-xs text-muted-foreground">International victory with Portugal Sevens team</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🌍 International Debut</h4>
              <p className="text-xs text-muted-foreground">First international tournament appearance</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🦁 U19 Lions Team</h4>
              <p className="text-xs text-muted-foreground">Lions team selection</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">📚 Academic Focus</h4>
              <p className="text-xs text-muted-foreground">First year student at Wits University</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Final year at Grey College - sport-oriented year with First Team rugby selection as starting number 8. 
            Successfully matriculated from Grey College Bloemfontein while maintaining elite rugby performance.
          </p>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Selected and played in Craven Week U18 for Free State Cheetahs as starting number 8, representing 
            provincial rugby excellence and showcasing consistent high-level performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏫 Grey College First Team</h4>
              <p className="text-xs text-muted-foreground">Starting number 8 selection</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎓 Matriculation</h4>
              <p className="text-xs text-muted-foreground">Graduated from Grey College Bloemfontein</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 Craven Week U18</h4>
              <p className="text-xs text-muted-foreground">Free State Cheetahs starting number 8</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">⚡ Elite Performance</h4>
              <p className="text-xs text-muted-foreground">Provincial rugby excellence</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-4">
            Breakthrough year with First Team selections at Grey College and provincial rugby success
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Grey College First Team Selection
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Cherries Starting Flank (Number 6)
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ 4 Distinctions in Grade 11
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ U17 Rhino Week Champions
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Free State Cheetahs Victory
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏫 Grey First Team</h4>
              <p className="text-xs text-muted-foreground">First Team selection & bench</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🍒 Cherries Flank</h4>
              <p className="text-xs text-muted-foreground">Starting number 6 position</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">📚 Academic Excellence</h4>
              <p className="text-xs text-muted-foreground">4 distinctions in Grade 11</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 U17 Rhino Week</h4>
              <p className="text-xs text-muted-foreground">Free State Cheetahs champions</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Breakthrough leadership year - Captain of U16A at Grey College and U16 Rugby Player of the Year. 
            Led Grant Khomo U16 team to national league victory for Free State Cheetahs.
          </p>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            U17 IPT 7s selection and championship victory with Free State Cheetahs, showcasing versatility 
            in both 15s and 7s rugby formats.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">👑 U16A Captain</h4>
              <p className="text-xs text-muted-foreground">Grey College leadership</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 Player of the Year</h4>
              <p className="text-xs text-muted-foreground">U16 rugby excellence</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🥇 Grant Khomo U16</h4>
              <p className="text-xs text-muted-foreground">National league champions</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 U17 IPT 7s</h4>
              <p className="text-xs text-muted-foreground">Free State Cheetahs victory</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Emerged as a promising talent with consistent performance and team captain potential. 
            Developed strong foundation in both rugby skills and leadership qualities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🌟 Talent Recognition</h4>
              <p className="text-xs text-muted-foreground">Coaching staff recognition</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">📊 Performance Stats</h4>
              <p className="text-xs text-muted-foreground">Consistent match statistics</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Skill Refinement</h4>
              <p className="text-xs text-muted-foreground">Technical development</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">👥 Team Integration</h4>
              <p className="text-xs text-muted-foreground">Strong team relationships</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Rugby foundation year - established core skills and understanding of the game. 
            Developed passion for rugby and began setting long-term goals for the sport.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏉 Rugby Foundation</h4>
              <p className="text-xs text-muted-foreground">Core skills development</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Goal Setting</h4>
              <p className="text-xs text-muted-foreground">Long-term career planning</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">💪 Physical Development</h4>
              <p className="text-xs text-muted-foreground">Strength and conditioning</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🔥 Passion Ignited</h4>
              <p className="text-xs text-muted-foreground">Love for the game</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            U13 Craven Week debut - the beginning of an extraordinary journey. First taste of 
            competitive rugby at provincial level, setting the foundation for future success.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 U13 Craven Week</h4>
              <p className="text-xs text-muted-foreground">Provincial debut</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🌟 Natural Talent</h4>
              <p className="text-xs text-muted-foreground">Innate rugby ability</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Competitive Spirit</h4>
              <p className="text-xs text-muted-foreground">Drive for excellence</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🚀 Journey Begins</h4>
              <p className="text-xs text-muted-foreground">Path to greatness starts</p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full relative">
      <Timeline data={data} />
    </div>
  );
} 