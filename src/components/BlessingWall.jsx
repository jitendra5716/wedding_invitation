import CorouselMini2 from "./CorouselMini2";

const BlessingWall = () => {
  return (
    <section className="blessing-wall">
      <h1 className="blessing-wall__title">Blessings Wall</h1>
      <p className="blessing-wall__description">
        Share your warm wishes and heartfelt blessings with the happy couple.
        Scroll through the messages below to see the love from family and friends.
      </p>
      <CorouselMini2 />
    </section>
  );
};

export default BlessingWall;