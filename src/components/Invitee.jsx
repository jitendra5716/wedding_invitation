
const Invitee = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #fff8f0 0%, #f9ece2 100%)',
    }

    const cardStyle = {
        maxWidth: '680px',
        width: '100%',
        padding: '32px',
        borderRadius: '24px',
        backgroundColor: '#fffdf8',
        border: '1px solid rgba(148, 91, 71, 0.16)',
        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
    }

    const titleStyle = {
        margin: 0,
        marginBottom: '18px',
        fontSize: '2rem',
        letterSpacing: '0.08em',
        color: '#7d3a2f',
    }

    const nameStyle = {
        margin: '0 auto',
        maxWidth: '520px',
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: '#5a302b',
        fontWeight: '600',
    }

    const textStyle = {
        margin: '18px auto 0',
        maxWidth: '520px',
        fontSize: '1rem',
        lineHeight: '1.75',
        color: '#5a4337',
    }

    return (
        <section style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>Invitee</h1>
                <div>
                    <h4 style={nameStyle}>Jagmohan Sharma and Kamla Sharma</h4>
                    <p style={textStyle}>Your presence will make our day even more memorable.</p>
                </div>
            </div>
        </section>
    )
}

export default Invitee