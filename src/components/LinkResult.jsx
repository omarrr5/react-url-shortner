import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = () => {
    
    const [shortenLink , setShortenLink] = useState("");
    const [copied, setCopied] = useState(false)

  return (
    <div className='result'>
      <p>{shortenLink}</p>
       <CopyToClipboard 
       text={shortenLink}
       onCopy= {() => setCopied(true)}
       >
       <button>Copy to clipboard</button>
       </CopyToClipboard>
    </div>
  )
}

export default LinkResult
