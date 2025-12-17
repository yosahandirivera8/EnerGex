const hamMenu = document.querySelector('.ham-menu');
const off = document.querySelector('.off-screen');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  off.classList.toggle('active');
});

function slidecolor(slider){
  const maxVal = parseInt(slider.max);
  let prog = (slider.value / maxVal) * 100;
  slider.style.background = `linear-gradient(to right, #AC9090 ${prog}%, #D9D9D9 ${prog}%)`;
}

document.querySelectorAll('.slider').forEach(slider => slidecolor(slider));

const sliders = document.querySelectorAll('.slider');
const water = document.getElementById('water');

sliders.forEach(slider => {
  slider.addEventListener('input', function() {
    const val = this.value;
    const maxtop = -200;
    const mintop = 50;
    
    const maxright = 3400;
    const minright = 0;
    
    const top = mintop - ((mintop - maxtop) * (val / 100));
    const rightpos = minright + ((maxright - minright) * (1 - val / 100));
    
    water.style.top = top + 'px';
    water.style.right = rightpos + 'px';
    
    water.style.animation = 'none';
    slidecolor(this);
  });
});


const reset = document.querySelectorAll('.but button')[1];
reset.addEventListener('click', function(){
  sliders.forEach(slider => {
    slider.value = 0;
    slidecolor(slider);
  });
  
  const val = 0;
    const maxtop = 0;
    const mintop = 300;
    const maxright = 3400;
    const minright = 0;
    
    const top = mintop - ((mintop - maxtop) * (val / 100));
    const rightpos = minright + ((maxright - minright) * (1 - val / 100));
    
    water.style.top = top + 'px';
    water.style.right = rightpos + 'px';
  
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.checked = false;
  });
  
  water.style.backgroundImage = 'url(https://www.basementpumpsltd.co.uk/wp-content/themes/basement/images/waves.png)';
  water.style.backgroundColor = '';
  
  function clear (){
    document.querySelectorAll('.texts input').forEach(t => t.value = '');
    document.getElementsByClassName('age')[0].value = '';
  }
  clear();
}); 
  
   const drinkButton = document.querySelectorAll('.but button')[0];
   drinkButton.addEventListener('click', function(){
   const berry = document.querySelector('input[name="berry"]').checked;
   const trop = document.querySelector('input[name="Tropical"]').checked;
   const sour = document.querySelector('input[name="sour"]').checked;
   const coffee = document.querySelector('input[name="coffee"]').checked;
   
   let select = [];
   if(berry) select.push('berry');
   if(trop) select.push('tropical');
   if(sour) select.push('sour');
   if(coffee) select.push('coffee');
   
   water.style.backgroundImage = 'none';  
   if(berry){
     water.style.backgroundColor = '#9933ff'
   }else if(trop){
     water.style.backgroundColor = '#ffcc99'
   }else if(sour){
     water.style.backgroundColor = '#ffff80'
   }else if(coffee){
     water.style.backgroundColor = '#bf8040'
   }
   });
     
  document.getElementById('generate').addEventListener('click', function(){   
    const randomnum = Math.floor(Math.random() * 1000);
  alert('Your drink has been generated! Your code is: ' + randomnum + ' Please head to the nearest vending machine to enjoy     :)');  
 });
 
/*
Used https://www.youtube.com/watch?v=E8YT3cU9OOI for water effect

Used https://www.youtube.com/watch?v=EYyWzE1DWuY for the sliders

Used https://www.youtube.com/watch?v=aNDqzlAKmZc for hamburger menu

Asked Google how to generate an alert with random number generator: function showAlertWithRandomNumber() {
  // Generate a random number between 1 and 100 (inclusive)
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Display the random number in an alert box
  alert("Your random number is: " + randomNumber);
}

// Call the function to trigger the alert
showAlertWithRandomNumber();

Asked Claude Sonnet 4.5 how to reset all inputs: / Reset checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.checked = false;
});
 
Needed help with resetting the other features so I asked ChatGPT how I could do this in js because I couldn't find any videos: 
document.addEventListener('DOMContentLoaded', function () {
  
  const resetBtn = document.querySelector('.but button:nth-child(2)');
  const water = document.getElementById('water');

  resetBtn.addEventListener('click', function () {
    // Reset all text inputs
    document.querySelectorAll("input[type='text']").forEach(input => {
      input.value = "";
    });

    // Reset sliders to default (50)
    document.querySelectorAll("input[type='range']").forEach(slider => {
      slider.value = 50;
    });

    // Uncheck all checkboxes
    document.querySelectorAll("input[type='checkbox']").forEach(box => {
      box.checked = false;
    });

    // Reset water level (if you animate height)
    water.style.height = "0%";

    // Optional: reset drink preview text
    const title = document.querySelector('.drink-title');
    if (title) title.textContent = "Your Drink Preview";

    alert("Everything has been reset!");
  });
});


Asked ChatGPT how i could change the color of the drink based on the flavor since I couldn't find any relevant videos: const water = document.getElementById('water');

// Map each flavor to a color
const flavorColors = {
  berry: "#8a2be2",       // purple
  tropical: "#ffcc00",    // yellow
  sour: "#32cd32",        // lime green
  coffee: "#6f4e37"       // coffee brown
};

// Add event listeners to each flavor checkbox
Object.keys(flavorColors).forEach(flavor => {
  const box = document.getElementById(flavor);

  box.addEventListener('change', () => {
    updateWaterColor();
  });
});

function updateWaterColor() {
  const checkedFlavors = Object.keys(flavorColors).filter(f => {
    return document.getElementById(f).checked;
  });

  if (checkedFlavors.length === 0) {
    water.style.backgroundColor = "#76c7f0"; // default water color
    return;
  }

  // If multiple flavors checked, blend or choose first
  const firstFlavor = checkedFlavors[0];

  water.style.backgroundColor = flavorColors[firstFlavor];
}

*/