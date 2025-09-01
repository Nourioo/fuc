function displayPoem(response){
  console.log("Poem generated");
  new Typewriter("#poem", {
  strings: [response.data.answer],
  autoStart: true,
  delay: 50,
  cursor: "",
});
}
 
function generatePoem(event){
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey ="540f410t39afca518e877dc5abodd75b";
  let prompt = `Under instructions: Generate a French poem about ${instructionInput.value}`;
  let context= "You are a romantic Poem expert and you love to write short poems, your mission is to generate a 4 line poem in HTML format. make sure to follow the user instructions";
  let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log (`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);

}
let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
