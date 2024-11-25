import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

type Announcement = {
  title: string;
  date: string;
  url: string;
};

const announcements: Announcement[] = [
  {
    title: "Subvención de la Consellería de Innovación, Industria, Comercio y Turismo 2023",
    date: "Septiembre 6, 2023",
    url: "articles/subvencion-de-la-conselleria-de-innovacion-industria-comercio-y-turismo-2023",
  },
];

export const AnnouncementSection: React.FC = () => {
  return (
    <section className="bg-gray-200 pb-3 px-3">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Anuncios</h2>
        <div className="relative w-full">
          <Carousel className="overflow-hidden rounded-lg">
            <CarouselContent className="flex justify-center items-center">
              {announcements.map((announcement, index) => (
                <CarouselItem key={index} className="bg-neutral-900 text-white hover:bg-gray-800 max-w-80 p-3 rounded-lg shadow-lg mx-2 transition duration-300">
                  <a
                    href={announcement.url}
                    className="text-white block p-2 rounded-lg transition-colors"
                  >
                    <h3 className="text-lg font-bold">{announcement.title}</h3>
                    <p className="text-sm mt-3">{announcement.date}</p>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;