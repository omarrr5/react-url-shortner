import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `https://url-link-shortener.p.rapidapi.com/v1/links/new?destination=${encodeURIComponent(inputValue)}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'da5baf56damsh5a24ddf504de2a3p1c3651jsnbb3104e06c22',
          'X-RapidAPI-Host': 'url-link-shortener.p.rapidapi.com'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json(); 
      setShortenLink(result.shortened_link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :( </p>
  }


  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default LinkResult