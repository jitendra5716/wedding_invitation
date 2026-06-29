import HaldiImg from '../assets/img/haldi.webp';
import MehndiImg from '../assets/img/mehndi.jpg';
import MandwaImg from '../assets/img/mandwa.webp';
import BaratImg from '../assets/img/barat.jpg';
import ReceptionImg from '../assets/img/reception2.jpg';

const eventItems = [
  {
    title: 'Haldi Carnival',
    date: 'Sunday, 05th July 2026',
    time: '01:00 PM. Onwards.',
    image: HaldiImg,
  },
  {
    title: 'Mehandi',
    date: 'Monday, 06th July 2026',
    time: '04:00 PM. Onwards',
    image: MehndiImg,
  },
  {
    title: 'Devpujan, Gheedhari',
    date: 'Tuesday, 07th July 2026',
    time: '09:00 AM - 03:00 PM',
    image: MandwaImg,
  },
  {
    title: 'Barat',
    date: 'Tuesday, 07th July 2026',
    time: '07:00 PM. Onwards',
    image: BaratImg,
  },
  {
    title: 'Reception Party',
    date: 'Wednesday, 08th July 2026',
    time: '06:00 PM. Onwards',
    image: ReceptionImg,
  },
];

const Events = () => {
  return (
    <section id="events" className="events-section">
      <h2>Events</h2>
      <div className="events-grid">
        {eventItems.map((item) => (
          <article
            key={item.title}
            className="event-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${item.image})`,
            }}
          >
            <h2>{item.title}</h2>
            <h5>{item.date}</h5>
            <h5>{item.time}</h5>
            <h5 className="event-card__location">Piprakoni, Giridih, Jharkhand.</h5>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events