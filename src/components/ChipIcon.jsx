const ChipIcon = ({ className }) => {
    return (
        <div className={className} style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#8ABF9E', /* Sage green color from reference */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            flexShrink: 0
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="4" width="14" height="16" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M12 2V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 20V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 12H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 9C13.5 9 14.5 9.5 14.5 11C14.5 12.5 13.5 13 12 13C10.5 13 9.5 13.5 9.5 15C9.5 16.5 10.5 17 12 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </div>
    );
};

export default ChipIcon;
