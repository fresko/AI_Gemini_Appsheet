# AI_Gemini_Appsheet
Build no-code business apps with AppSheet / AppsScript and Google Cloud AI.
some topics and snippets that can help you in the development of your prompt 

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
 You can find the complete script here  : [AppsScript_callGemini.gs](https://github.com/fresko/AI_Gemini_Appsheet/blob/main/AppsScript_callGemini.gs)

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
### AppSheets (NoCode LowCode DEV Pro)
### Display images, documents  -  URL of the image in AppSheets
https://support.google.com/appsheet/answer/10107317?hl=en

Formula in AppSheet table 
 <img src="../main/image/appsheet_formula.JPG" alt="image"  height="400px">

```
CONCATENATE(
  "https://www.appsheet.com/template/gettablefileurl",
  "?appName=", ENCODEURL(CONTEXT("AppName")),
  "&tableName=", ENCODEURL(CONTEXT("Table")),
  "&fileName=", ENCODEURL([image-or-file-column])
) 
```
### Google Cloud Next24 
Here's a summary of the key points from the Great Google talk ( by Christian Schalk & Mariz Melo Interaction Designer ), along with the script and topics covered.  Since the talk was short, I've included these resources to clarify any points you may have missed.

[<img src="../main/image/next24.JPG" width="50%">](https://www.youtube.com/embed/evUy58sBCeM?si=o7OL5Vmb6DfUZP-Q "Next24")



  

