import { useState,useEffect } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoittieWithFallBack = ({primaryLottieUrl,fallbackPath,alt}) => {
    // state for fallback status
    const [fallback,setFallback] = useState(null)
    const [isLoading,setIsLoading] = useState(null)

    useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log(`Remote animation took too long for ${alt}, using local fallback`);
        setFallback(true);
        setIsLoading(false);
      }
    }, 3000);



    return () => clearTimeout(timer);
  }, [isLoading, alt]);

  return (
     <>
      {fallback ? (
        // Local fallback - always reliable
        <DotLottieReact 
          src={fallbackPath} // This is a local path like '/assets/animations/fallback.lottie'
          loop
          autoplay
          className="w-[300px] h-[300px] mx-auto"
        />
      ) : (
        // Try remote URL first
        <DotLottieReact 
          src={primaryLottieUrl} // This is the remote URL that might fail
          loop
          autoplay
          className="w-[300px] h-[300px] mx-auto"
          dotLottieRefCallback={(dotLottie) => {
            if (dotLottie) {
              dotLottie.addEventListener('ready', ()=>{
                    setIsLoading(false);
                    setFallback(false);
              });
              dotLottie.addEventListener('error',()=>{
                setFallback(true);
                setIsLoading(false);
              });
            }
          }}
        />
      )}
    </>
  )
}

export default LoittieWithFallBack
