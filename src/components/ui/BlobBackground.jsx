
const BlobBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Blob 1 - Cyan/Teal */}
            <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-primary-cyan/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

            {/* Blob 2 - Purple */}
            <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-primary-purple/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Blob 3 - Pink/Accent */}
            <div className="absolute -bottom-32 left-[20%] w-[50vw] h-[50vw] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
    );
};

export default BlobBackground;
