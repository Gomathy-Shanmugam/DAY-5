//DAY 06

//1. For the given JSON iterate over all for loops(for,for in, for of, forEach)

console.log("DAY - 05 TASK");
const jsonExample = {
    "name": "John",
    "age": 30,
    "city": "New York"
};


// Using for...in loop (for objects)
console.log("Using for...in loop:");
for (let key in jsonExample) {
    console.log( jsonExample[key]);
}

//Using for loop
console.log(" \n Using for loop:");
const keys = Object.keys(jsonExample);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log( ` ${key} : ${jsonExample[key]}`);
}


//Using for of loop
console.log(" \n Using for of loop:");
for (const [key,value] of Object.entries(jsonExample)) {
    console.log(`${key} : ${value}`);
}

//Using for each loop 
console.log(" \n Using for each loop:");
Object.values(jsonExample).forEach(value => {

    console.log(value);
});


//2. Create your own resume data in JSON format
console.log("RESUME");
 var myResume = {
   
    "Name" : "Gomathy",
    "Age"  : 21,
    "Qualification" : "B.E(CSE)",
    "Gender" : "Female",
    "Location" : "Tiruppur",
    "Email" : "gomathy17012002@gmail.com",
    "Experience" : "Fresher",
    "Languages Know"  :       "English ,Tamil ,Kannada(Spoken)",
    "Area of Interest" : "Developing",
    "Github ID" : "https://github.com/Gomathy-Shanmugam",
    "LinkedIn ID" : "https://www.linkedin.com/in/gomathy-s-5916a023a/",

"Education" :  [
    {
        "SSLC" : "Kumutha Matric Hr Sec School",
        "Percentage" : "95",
        "Year of Passing Out" : "2017",
    },
    {
        "HSC": "Kumutha Matric Hr Sec School",
        "Percentage" : "83",
        "Year of Passing Out" : "2019",
    },
    {
        "SSLC": "Kathir College of Engineering",
        "Percentage" : "83",
        "Year of Passing Out" : "2023",
    }],

    "Freelance Work" : [
        {
            "Junior EPUB Developer" : "Proficient Junior EPUB Developer skilled in HTML, CSS, and JavaScript. Creating converting and optimizing digital publications for high-quality eBook production.",

        },
    ],
    "Certifications& Courses" : [
        {
            " NPTEL" : "Cloud Computing Certification  ",
            " IBM" : "Introduction to Cloud ",

        },

    ],
    "Co-Curricular Activities" : [
       {
        "Paper Presentation" : "Delivered a paper presentation on 'Waste Food Management' at PPG College of Engineering, Coimbatore.",
        "Hackthon" : "Engaged in the 'Smart India Hackathon' event in 2020."
       },
    ],
    "Main Project" : [
        {
            "Domain "     :  "Internet of Things",
            "Title "      :  "Smart Water Irrigation Using IOT",
            "Objective "  :  "Developed and implemented a smart water irrigation system that revolutionized remote water management for farmers.",
        }

    ],
    "Mini Project" : [
        {
            "Domain "     :  "Cloud Computing",
            "Title "      :  "Customer Care Registry",
            "Objective "  :  "Designed and developed a web application enabling seamless live agent connectivity,and facilitating a 50% decrease in customer support wait times.",
}
    ],
    
}
//console.log(JSON.stringify(myResume))
for (var key in myResume) {
    console.log(key + ": " + myResume[key]);
}
for (var key in myResume) {
    if (Array.isArray(myResume[key])) {
        console.log(key + ":")
        for (var i = 0; i < myResume[key].length; i++) {
            for (var subKey in myResume[key][i]) {
                console.log("  " + subKey + ": " + myResume[key][i][subKey]);

    }
}
    }
}
