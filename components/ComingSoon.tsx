import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Coming Soon</h1>
            <p style={styles.subtitle}>We are working hard to bring you something amazing!</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center' as 'center',
    },
    title: {
        fontSize: '4rem',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.5rem',
    },
};

export default ComingSoon;