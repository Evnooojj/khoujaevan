import { motion } from 'framer-motion';

const LandoBackground = () => {
    // Colors from palette
    const colorTurquoise = '#07A3B2';
    const colorPastelGreen = '#D9ECC7';

    // FASTER animation variants (6-9s range) - Reverting to faster speed as requested
    const createBlobVariant = (duration, xRange, yRange) => ({
        animate: {
            x: xRange,
            y: yRange,
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    });

    const blob1 = createBlobVariant(7, [0, 100, -100, 0], [0, -50, 50, 0]);
    const blob2 = createBlobVariant(8, [0, -150, 150, 0], [0, 100, -100, 0]);
    const blob3 = createBlobVariant(6, [0, 200, -200, 0], [0, -150, 150, 0]);
    const blob4 = createBlobVariant(9, [0, -100, 100, 0], [0, 80, -80, 0]);
    const blob5 = createBlobVariant(10, [0, 120, -120, 0], [0, -120, 120, 0]);
    const blob6 = createBlobVariant(8.5, [0, -80, 80, 0], [0, 150, -150, 0]);

    return (
        <div className="fixed inset-0 z-0 bg-[#D9ECC7] overflow-hidden pointer-events-none">
            {/* 
                Gradient Base 
                Using the lighter pastel green as the base.
            */}

            {/* GOOEY FILTER CONTAINER */}
            <div className="absolute inset-0 w-full h-full filter blur-[60px] contrast-[120%] opacity-90">

                {/* 
                   Multiple Blobs with FASTER motion
                   Using the darker Turquoise (#07A3B2).
                */}

                {/* Top Left */}
                <motion.div variants={blob1} animate="animate" className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-80" style={{ backgroundColor: colorTurquoise }} />

                {/* Top Right */}
                <motion.div variants={blob2} animate="animate" className="absolute top-[-5%] right-[-10%] w-[55vw] h-[55vw] rounded-full mix-blend-multiply opacity-80" style={{ backgroundColor: colorTurquoise }} />

                {/* Bottom Left */}
                <motion.div variants={blob3} animate="animate" className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply opacity-80" style={{ backgroundColor: colorTurquoise }} />

                {/* Bottom Right */}
                <motion.div variants={blob4} animate="animate" className="absolute bottom-[-15%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-80" style={{ backgroundColor: colorTurquoise }} />

            </div>

            {/* GRAIN REMOVED as requested */}
        </div>
    );
};

export default LandoBackground;
