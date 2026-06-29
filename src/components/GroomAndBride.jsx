import Img01 from '../assets/img/img01.jpeg';
import GroomImg from '../assets/img/groom2.jpeg';
import BrideImg from '../assets/img/bride1.jpeg';
// import BrideImg from '../assets/img/img16.jpeg';

const GroomAndBride = () => {
  return (
    <section id="couple" className="groom-bride">
      <h1 className="groom-bride__title">Groom & Bride</h1>
      <div className="groom-bride__grid">
        <article className="groom-bride__card">
          <div className="groom-bride__photo-wrapper">
            <img className="groom-bride__photo" src={GroomImg} alt="Groom" />
          </div>
          <h2>Jitendra Kumar Pandit</h2>
          <h4>Groom</h4>
          <p>
            With great joy, I warmly welcome you to celebrate the beginning of a beautiful new chapter in my life. I am Jitendra Kumar Pandit, son of Shri Umesh Pandit, from Piprakoni, Giridih, Jharkhand. I work as an AI Engineer at Infosys, specializing in Java, Spring Boot, React.js, and Generative AI. As I begin this wonderful journey with my beloved bride, your love, blessings, and presence will make our wedding celebration truly unforgettable.
          </p>
        </article>

        <div className="groom-bride__hero-image">
          <img src={Img01} alt="Groom and Bride" />
        </div>

        <article className="groom-bride__card">
          <div className="groom-bride__photo-wrapper">
            <img className="groom-bride__photo" src={BrideImg} alt="Bride" />
          </div>
          <h2>Babli Kumari</h2>
          <h4>Bride</h4>
          <p>
            With heartfelt happiness, I welcome you to join us in celebrating this beautiful journey of togetherness. I am Babli Kumari, beloved daughter of Shri Balgovind Pandit, from Jagdishpur, Chaupnahdih, Koderma, Jharkhand. I completed my Bachelor of Arts (B.A.) from J.J. College, Koderma. I enjoy preparing delicious homemade meals and believe that love is best expressed through care, kindness, and togetherness. As we begin this new phase of life, your blessings, affection, and presence will fill our hearts with joy and make our wedding celebration even more special.
          </p>
        </article>
      </div>
    </section>
  );
};

export default GroomAndBride