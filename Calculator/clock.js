const currentTime = new Date();
const currentHour = currentTime.getHours();

let greetingMessage;

if (currentHour<12){
    greetingMessage = "!! GOOD MORNING !!"
}
else if (currentHour>=12 && currentHour<17){
    greetingMessage = "!! GOOD AFTERNOON !!";
}
else if (currentHour >=18 && currentHour < 20){
    greetingMessage = "!! GOOD EVENING !!";
}
else {
    greetingMessage = "!! GOOD NIGHT !!";
}

greetingBox.innerHTML = greetingMessage;
greetingBox.classlist.remove("hidden");

