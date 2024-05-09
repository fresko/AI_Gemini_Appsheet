# AI_Gemini_Appsheet
Build no-code business apps with AppSheet / AppsScript and Google Cloud AI

<img src="../main/image/gemini_logo.jpg" alt="image"  height="100px">

The call of Gemini is implemented in the CrazyCoach application to :

- Identify healthy characteristics of some dish  
- Menu recommendations based on a dish 
- According to a gym machine, what can be its replacement at home
  
    <img src="../main/image/AI_Gemini1.JPG" alt="image"  height="400px">
    <img src="../main/image/AI_Gemini3.JPG" alt="image"  height="400px">
    <img src="../main/image/AI_Gemini4.JPG" alt="image"  height="400px">
    <img src="../main/image/AI_Gemini5.JPG" alt="image"  height="400px">
    
## Topics  

### Call GEMINI API
// Replace with actual Gemini API URL
//https://ai.google.dev/gemini-api/docs/function-calling
APIkey view https://aistudio.google.com/
```
   var apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent";  
   var url = apiUrl+"?key="+apiKey; //  ApiKey = "AI######WI"  // ApiKey  generate from Google AI studio
```  
### Call Gemini with image

- Text-and-image input
If the input contains both text and image, use the gemini model. The following snippets help you build a request and send it to the REST API.
https://ai.google.dev/gemini-api/docs/get-started/rest

### REST
```
echo '{
  "contents":[
    {
      "parts":[
        {"text": "What is this picture?"},
        {
          "inline_data": {
            "mime_type":"image/jpeg",
            "data": "'$(base64 -w0 image.jpg)'"
          }
        }
      ]
    }
  ]
```

### AappsScript
```
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
```






  

