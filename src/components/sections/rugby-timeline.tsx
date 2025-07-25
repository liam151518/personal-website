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
              <h4 className="font-semibold text-primary mb-2">⚡ Elite Performance</h4>
              <p className="text-xs text-muted-foreground">Proven ability at highest level</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Championship Focus</h4>
              <p className="text-xs text-muted-foreground">Dedicated training and preparation</p>
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
            University leadership and provincial excellence - appointed Wits University Rugby Captain while 
            maintaining elite performance standards and mentoring younger players.
          </p>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Continued development with Lions U19 squad, showcasing consistent growth and leadership qualities 
            that would lead to international opportunities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">👑 Wits Captain</h4>
              <p className="text-xs text-muted-foreground">University rugby team leadership</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🦁 Lions U19</h4>
              <p className="text-xs text-muted-foreground">Provincial elite squad member</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">📚 Academic Excellence</h4>
              <p className="text-xs text-muted-foreground">Balancing studies with elite sport</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Performance Focus</h4>
              <p className="text-xs text-muted-foreground">Consistent high-level performance</p>
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
            Breakthrough year with multiple captaincies and provincial recognition
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Lions U19 Squad Selection
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Multiple Team Captaincies
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Provincial Tournament Success
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Leadership Development
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✅ Elite Training Programs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏆 Provincial Success</h4>
              <p className="text-xs text-muted-foreground">Lions U19 squad achievement</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">👑 Captain Leadership</h4>
              <p className="text-xs text-muted-foreground">Multiple team captaincies</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">💪 Elite Training</h4>
              <p className="text-xs text-muted-foreground">Advanced training programs</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Performance Growth</h4>
              <p className="text-xs text-muted-foreground">Consistent improvement</p>
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
            Established leadership foundation with first captaincy roles and continued development 
            in provincial rugby structures. Began entrepreneurial journey with OBT Christian apparel brand.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">👑 First Captaincy</h4>
              <p className="text-xs text-muted-foreground">Team leadership debut</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🏢 OBT Launch</h4>
              <p className="text-xs text-muted-foreground">Christian apparel brand</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">📈 Skill Development</h4>
              <p className="text-xs text-muted-foreground">Technical improvement</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-semibold text-primary mb-2">🎯 Goal Setting</h4>
              <p className="text-xs text-muted-foreground">Clear career objectives</p>
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