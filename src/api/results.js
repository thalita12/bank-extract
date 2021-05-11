const FETCH_TIMEOUT = 2000;

export const fetchResults = async () =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:3002/results')
      .then((resultsResponse) => {
        setTimeout(() => {
          resolve(resultsResponse.json());
        }, FETCH_TIMEOUT);
      })
      .catch((error) => {
        reject(error);
      });
  });