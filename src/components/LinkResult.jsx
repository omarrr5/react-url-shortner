import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = () => {
    
    const [shortenLink , setShortenLink] = useState("");
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const timer = setTimeout(()=> {
            setCopied(false);
        }, 1000)
   

    return () => clearTimeout(timer);
        }, [copied]);

        
  return (
    <div className='result'>
      <p>{shortenLink}</p>
       <CopyToClipboard 
       text={shortenLink}
       onCopy= {() => setCopied(true)}
       >
       <button className={copied ? "copied" : ""}>Copy to clipboard</button>
       </CopyToClipboard>
    </div>
  )
}

export default LinkResult
