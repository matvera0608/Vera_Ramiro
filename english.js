// I create a variable called devProfile to do a sentences about a developer profile

let developer_Profile = {
     full_Name : "Vera Ramiro Mateo",
     age : 21,
     profession : "System analyst student",
     skills : ["Python", "Java", "Prototype designer", "MySQL", "PseInt", "C#", "Access"],
     contact:
     {
          email: "veram0227@gmail.com",
          phone: "+543751358814",
          location : "Eldorado"
     }
}

function self_Presentation(Profile)
{

     profile = "Hello everyone, my name is " + Profile.full_Name + " and I am " + Profile.age + " years old. I am a " + Profile.profession + " and I have skills in " + Profile.skills.join(",") + ". Finally, I'm from " + Profile.location;

     return profile;
}

let result = self_Presentation(developer_Profile);