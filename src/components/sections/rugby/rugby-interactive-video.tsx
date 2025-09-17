'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expand-media';
import { Trophy, Target, Zap, Crown } from 'lucide-react';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const rugbyMediaContent: MediaContentCollection = {
  video: {
    src: '/photos/rugby-match-action.jpg', // We'll use image for now since we don't have rugby videos
    background: '/photos/portugal-sevens-victory.jpg',
    title: 'Championship Journey',
    date: 'Elite Rugby Experience',
    scrollToExpand: 'Scroll to Explore',
    about: {
      overview:
        'Experience the journey from provincial captain to international champion. This interactive showcase highlights the key moments that defined my rugby career, from U13 Craven Week to Portugal Senior Sevens victory.',
      conclusion:
        'The path to elite rugby excellence requires dedication, leadership, and unwavering commitment. Every match, every training session, and every challenge has shaped this championship journey.',
    },
  },
  image: {
    src: '/photos/fnb-young-guns-champions-2025.jpg',
    background: '/photos/lions-training-huddle.jpg',
    title: 'Victory Moments',
    date: 'Championship Collection',
    scrollToExpand: 'Scroll to Discover',
    about: {
      overview:
        'From Young Guns champions to international glory, these moments capture the essence of elite rugby competition. Each victory represents countless hours of preparation and team dedication.',
      conclusion:
        'Championships are won through collective effort and individual excellence. These achievements showcase the power of determination and the pursuit of rugby perfection.',
    },
  },
};

const RugbyMediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = rugbyMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto glass-strong p-8 rounded-2xl'>
      <div className='text-center mb-8'>
        <div className='flex justify-center gap-6 mb-6'>
          <div className='flex items-center gap-2'>
            <Trophy className='w-6 h-6 text-primary' />
            <span className='text-sm font-semibold text-primary'>International Champion</span>
          </div>
          <div className='flex items-center gap-2'>
            <Target className='w-6 h-6 text-primary' />
            <span className='text-sm font-semibold text-primary'>Elite Performance</span>
          </div>
        </div>
        
        <h2 className='text-3xl font-bold mb-6 gradient-text'>
          Elite Rugby Excellence
        </h2>
      </div>
      
      <p className='text-lg mb-8 text-muted-foreground leading-relaxed'>
        {currentMedia.about.overview}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div className='glass p-6 rounded-xl text-center hover-lift'>
          <Trophy className='w-8 h-8 text-primary mx-auto mb-3' />
          <h3 className='font-bold text-lg mb-2'>International Success</h3>
          <p className='text-sm text-muted-foreground'>HSBC Sevens Series Winner</p>
        </div>
        <div className='glass p-6 rounded-xl text-center hover-lift'>
          <Crown className='w-8 h-8 text-primary mx-auto mb-3' />
          <h3 className='font-bold text-lg mb-2'>Leadership</h3>
          <p className='text-sm text-muted-foreground'>8+ Team Captaincies</p>
        </div>
        <div className='glass p-6 rounded-xl text-center hover-lift'>
          <Zap className='w-8 h-8 text-primary mx-auto mb-3' />
          <h3 className='font-bold text-lg mb-2'>Elite Level</h3>
          <p className='text-sm text-muted-foreground'>6+ Years Excellence</p>
        </div>
      </div>

      <p className='text-lg text-muted-foreground leading-relaxed'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const RugbyInteractiveVideo = () => {
  const mediaType = 'image'; // Using image since we don't have rugby videos yet
  const currentMedia = rugbyMediaContent[mediaType];

  useEffect(() => {
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <RugbyMediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};
