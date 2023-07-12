import React, { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const url =
          "https://api.api-ninjas.com/v1/quotes?category=intelligence";
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": "26cTkE83PIO43lDAytQOnA==cF1QVP0FKktXURwi",
          },
        });
        if (!response) {
          throw new Error("Quote failed");
        }
        const quoteData = await response.json();
        const newQuote = quoteData[0].quote;
        setQuotes(newQuote);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getQuote();
  }, []);

  if (loading) {
    return (
      <div className="quoteDiv" data-testid="quoteStatus">
        <div className="">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quoteDiv" data-testid="quoteStatus">
        <div className="loadingP">Error</div>
      </div>
    );
  }

  return (
    <div className="quoteDiv" data-testid="quoteStatus">
      <div className="loadingP">
        <code>{quotes}</code>
      </div>
    </div>
  );
}

export default Quotes;
