
export async function getUserIpAddress() { // 1500 calls limit
    const ipDataApiKey = '77e850f03fcb75f90f90e7d292de5d76bf6cd0ba333448b2d3d9fdde';
    const url =`https://api.ipdata.co?api-key=${ipDataApiKey}`
    const res = await fetch(url);
    return await res.json().then(data => data)
  }



// Other option though it takes as parameter an IP address
  
//   const ipAddress = '102.222.234.136'

//   fetch(`https://ipapi.co/${ipAddress}/json/`) // 30,000 calls/month
//   .then(function(response) {
//     response.json().then(jsonData => {
//       console.log(jsonData);
//     });
//   })
//   .catch(function(error) {
//     console.log(error)
//   });