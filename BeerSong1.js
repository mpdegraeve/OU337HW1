//the for counter is going to start at 99 and go all the way down to one
//the if statements show you what is being displayed on each line of code.
// hope these comments help
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No more bottles of beer on the wall.");
    }
}
//tested the file through codacademy and in netbeans and the build was successful and it ended up running.