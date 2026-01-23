import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const ElevenLabsWidget = () => {
  useEffect(() => {
    // Load ElevenLabs script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
    >
      {/* @ts-ignore - ElevenLabs custom element */}
      <elevenlabs-convai agent-id="agent_5001kax1zp55fm0bzxn7s77rtrdr"></elevenlabs-convai>
    </motion.div>
  );
};
