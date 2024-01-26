/*
I believe I got exercise 6 wrong. It returns undefined in the console.
but alas, it is time to turn in :-)
*/




//Here we have an object, a pretty simple,basic one.
//all of the values are strings
//there is something interesting called new Date
const album1 = {
  title: 'Talking Heads',
  albumDetails: {
    released: new Date('September 16, 1977'),
    label: 'Sire',
    formats: ['LP']
  }
};
/* Exercise 1:  Update the title property of album1 from 
'Talking Heads' to 'Talking Heads - 77', then assign that
 property to a variable named title*/
//title is at index 0. We are changing what's inside the string
//so we could use dot notation to target "title"
album1.title = 'Talking Heads - 77'
console.log(album1.title)



// Exercise 2: Assign the string 'Sire' from 
//album1 to a variable named label
//isn't the string'Sire' already assigned to 
//a variable named label in album2?
const album2 = {
  title: 'More Songs About Buildings and Food',
  albumDetails: {
    released: new Date('July 14, 1978'),
    label: 'Sire',
    formats: ['LP', '8-track']
  }
};
const label = album1.albumDetails.label
console.log(label)


// Exercise 3: Accessing the string 'LP' from album2's
// formats array, add it to the end of album3's formats array.
//acess album2 > formats >lP
//add it to the END of album 3 > formats
//think of what method there is to add something to the end of an array
// a -1
const album3 = {
  title: 'Fear of Music',
  albumDetails: {
    released: 'August 3, 1979',
    label: 'Sire',
    formats: ['Cassette']
  }
};
album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
console.log(album3);
//i mistakenely started this by writing
// album2.albumDetails.formats[0] = album3.albumDetails.formats.push


// Exercise 4:  Update the released property of album3 
//from a string into a Date object using that string
//it is asking(I think) to change the properties data type of
//Google something like:
/* "JavaScript convert string to Date"
"JavaScript change object property type"
"JavaScript Date object conversion" */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
//I learned about the date object and some of its methods(there are a lot)

const album4 = {
  title: 'Remain in Light',
  albumDetails: {
    released: new Date('October 8, 1980'),
    //new Date is making this a variable or an object
    //I think there is a reason we are making it an object
    //maybe we will see later
    formats: ['Cassette', 'LP']
  }
};

album3.albumDetails.released = new Date(album3.albumDetails.released);
console.log(album3.albumDetails.released.toLocaleDateString());

// Exercise 5:  Add a property named label with the
// value 'Sire' to album4's albumDetails property
//googled: how add a property value from one object to another
//this was my first attempt: const returnedTarget = Object.assign(album4, album5);
//console.log(album5.albumDetails.labels[0])
//however this is wrong because assign just merges the object I Think
//the task is to add sire from album5 to album4
//just make sure album4 has a property:value of label:'Sire'
const album5 = {
  title: 'Little Creatures',
  albumDetails: {
    released: new Date('June 10, 1985'),
    labels: ['Sire', 'emi'],
    formats: ['CD', 'cassette', 'LP']
  }
};
//album4.albumDetails.labels= 'Sire'
//console.log(album4) <---this was wrong...
album4.albumDetails.label = 'Sire';
console.log(album4); //why did this take me so long >.>
//i thought i had to shift it from album5 to album4

// Exercise 6:  Update the value 'emi' within album5's 
//labels array to 'EMI'
const album6 = {
  title: 'True Stories',
  albumDetails: {
    released: new Date('October 7, 1986'),
    labels: ['Sire, EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};
album5.albumDetails.labels[1] = album6.albumDetails.labels[1];
console.log(album5);
//it's returning undefined though..why? I'll move on for now...

// Exercise 7:  Assign album6's formats array to a variable named 
//formats
const album7 = {
  title: 'Naked',
  albumDetails: {
    released: new Date('March 15, 1988'),
    labels: ['Sire', 'EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};
//google: how to make an array into a variable
const formats = album6.albumDetails.formats
console.log(album6)
//I was confused why we were doing this
// i think that assigning format as a variable makes it
//so we don't have to type out album6.albumDetails.formats
//i should have known that earlier

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7
];

// Exercise 8:  Using the talkingHeadsAlbums array, 
//assign album5's labels property to a variable named labels

const labels = talkingHeadsAlbums[4].albumDetails.labels
console.log(labels)
//how do i fetch the labels property in an array object?
//oh you can just keep typing the dot notation after the bracket
//how do i make sure that it is assigned as a variable? It looks very much the same
//it returns in console as : Array [ "Sire", undefined ]     app.js:150:9


// Exercise 9:  Using the talkingHeadsAlbums array, 
//assign album7's released property to album6's released property
talkingHeadsAlbums[6].albumDetails.released = talkingHeadsAlbums[5].albumDetails.released
console.log(talkingHeadsAlbums[5].albumDetails.released)
//album6's released property is released: new Date('October 7, 1986'),
//album7's released property is released: new Date('March 15, 1988'),


// Exercise 10:  Using the pre-defined
// variable named albumIdx below, assign the albumDetails object
// of the album located within the talkingHeadsAlbums array at the
// index represented by the value of albumIdx to a variable
// named albumDetails

let albumIdx = 4;

const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails
console.log(albumDetails)
  //i thought this was asking to make the number value of albumIdx into an index
  //and put that in a variable named albumDetails


/********** Don't look below here **********/
console.log('=========================== Excercise console.logs =============')
console.log('Exercise 1:', title);
console.log('Exercise 2:', label);
console.log('Exercise 3:', album3.albumDetails.formats[1]);
console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());
console.log('Exercise 5:', album4.albumDetails.label);
console.log('Exercise 6:', album5.albumDetails.labels[1]);
console.log('Exercise 7:', formats);
console.log('Exercise 8:', labels);
console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());
console.log('Exercise 10:', albumDetails);
console.log('===================================================================')
