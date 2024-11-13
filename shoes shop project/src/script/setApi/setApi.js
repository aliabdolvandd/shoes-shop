fetch("http://localhost:5173/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched from JSON file:", data);
    
  })
  .catch((error) => console.error("Error fetching data:", error));