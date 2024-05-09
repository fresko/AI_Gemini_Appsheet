function callGemini(prompt, imageUrl) {
  // Replace with actual Gemini API URL
   var apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent";  //https://ai.google.dev/gemini-api/docs/function-calling
   var url = apiUrl+"?key="+apiKey; //  ApiKey = "AI######WI"  // ApiKey  generate from Google AI studio
  
    // image base64, imageUrl  with should be public for now  
    const imageBlob = UrlFetchApp.fetch(imageUrl).getBlob(); 
    console.log(imageBlob);
    const imageUrlEncoded = Utilities.base64Encode(imageBlob.getBytes());
    console.log(imageUrlEncoded);
    const headers = {
      "Content-Type": "application/json"
    };

    //  Structure Data https://ai.google.dev/gemini-api/docs/get-started/rest
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt
            },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: imageUrlEncoded
              }
            }
          ]
        }
      ]
    };

    const options = {
      method: "post",
      headers: headers,
      payload: JSON.stringify(requestBody)
    };


  // Fetch response from Gemini API
  var response = UrlFetchApp.fetch(url,options);
  var data = response.getContentText();
    // Parse the JSON response (assuming Gemini returns JSON)
  var jsonData = JSON.parse(data);
  var generatedText = jsonData.candidates[0].content.parts[0].text

  return generatedText;

}

// Example usage (assuming you have a prompt and image URL)
//const prompt = "cuantas calorias puede tener este plato,la respuesta  en formato json  con parametro titulo , descripcion y sugerencia";
//const imageUrl = "https://objectstorage.us-ashburn-1.oraclecloud.com/p/WCfJmAjB72T6LQjBsDQtAQ2seClE3vr2-qyZm9PR0RCZQGBd2FRD1MWs9FJe_2yX/n/idkfztospmsf/b/crazycoach/o/meal1M1I9cvOW.jpeg"; // Exampe with Object storage OCI oracle cloud
//const imageUrl = "https://www.appsheet.com/template/gettablefileurl?appName=Appname-24-04-21-2&tableName=tableai&fileName=tableai_Images%2QFpjQyZs4ou0iyGZfd.image.132.jpg";  //Example with Appsheet Drive "Display images, documents, and audio files"   https://support.google.com/appsheet/answer/10107317?hl=en
//var generatedText = callGemini(prompt,imageUrl);
//console.log(generatedText);