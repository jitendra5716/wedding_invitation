import WeddingCard from '../assets/img/wedding_card.jpeg';
const WeddingCardPreview = ({ cardData }) => {

    return (
        <>
            <div style={{ backgroundColor: '#f8f0e3', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex',flexDirection:'column', alignItems:'center' }}>
                <h2>Wedding Card Preview</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px', height: '80%', width: '80%' }}>
                    <img style={{height:'100%',width:'80%'}} src={WeddingCard} />
                </div>
            </div>
        </>
    )
}

export default WeddingCardPreview;