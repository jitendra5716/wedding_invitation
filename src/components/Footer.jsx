
import Img01 from '../assets/img/img01.jpeg'

const Footer = () => {
    const sectionStyle = {
        backgroundColor: '#34455a',
        color: '#f2f2f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        flexWrap: 'wrap',
        gap: '30px',
    }

    const contentStyle = {
        maxWidth: '640px',
        flex: '1 1 420px',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
    }

    const headingStyle = {
        margin: 0,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontFamily: 'cursive, serif',
        letterSpacing: '0.08em',
        color: '#f7f0e6',
    }

    const quoteStyle = {
        margin: 0,
        lineHeight: 1.9,
        fontSize: '1rem',
        maxWidth: '560px',
        color: 'rgba(242, 242, 242, 0.92)',
    }

    const socialsStyle = {
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
    }

    const socialButtonStyle = {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'grid',
        placeItems: 'center',
        color: '#fff',
        fontSize: '0.95rem',
        textDecoration: 'none',
    }

    const footerNoteStyle = {
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontSize: '0.85rem',
        opacity: 0.84,
    }

    const namesStyle = {
        margin: 0,
        fontSize: '1.6rem',
        fontFamily: 'cursive, serif',
        color: '#f9f4ec',
    }

    const imageWrapperStyle = {
        flex: '0 0 420px',
        minWidth: '320px',
        maxWidth: '420px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 28px 70px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.12)',
    }

    const imageStyle = {
        width: '100%',
        display: 'block',
        objectFit: 'cover',
    }

    return (
        <footer id="contact" style={sectionStyle}>
            <div style={contentStyle}>
                <h1 style={headingStyle}>With Love, We Invite You</h1>
                <p style={quoteStyle}>
                    Your presence will make our special day even more meaningful. We sincerely invite you and your family to join us as we celebrate the union of our hearts. Your blessings, love, and good wishes are the greatest gifts we could ask for. </p>
                <p>
                    We look forward to celebrating this beautiful occasion with you.
                </p>
                {/* <div style={socialsStyle}>
                    <a style={socialButtonStyle} href="#" aria-label="Facebook">f</a>
                    <a style={socialButtonStyle} href="#" aria-label="Twitter">t</a>
                    <a style={socialButtonStyle} href="#" aria-label="Instagram">i</a>
                    <a style={socialButtonStyle} href="#" aria-label="YouTube">y</a>
                </div> */}
                <div>
                    <p style={footerNoteStyle}>With Love</p>
                    <p style={namesStyle}>Jitendra Kumar Pandit ❤️ Babli Kumari</p>
                </div>
                <div>
                    <p style={footerNoteStyle}>Hosted By</p>
                    <p style={namesStyle}>Shri Ramchandra Pandit & Shri Umesh Pandit</p>
                </div>
                <div>
                    <p style={footerNoteStyle}>Residence Address</p>
                    <p style={namesStyle}>Village: Piprakoni
                        Post: Arkhango
                        District: Giridih, Jharkhand – 825418
</p>
<p>
                        We look forward to celebrating this joyous occasion with you.</p>
                </div>
            </div>
            <div style={imageWrapperStyle}>
                <img style={imageStyle} src={Img01} alt="Couple" />
            </div>
        </footer>
    )
}

export default Footer