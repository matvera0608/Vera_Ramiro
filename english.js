// I create a variable called devProfile to do a sentences about a developer profile

let developerProfile = {
     full_Name : "Vera Ramiro Mateo",
     age : 21,
     profession : "System analyst student",
     skills : ["Python", "Java", "Prototype designer", "MySQL", "PseInt", "C#", "Access"],
     contact:
     {
          email: "",
          phone: "",
          location : ""
     }
}

function self_Presentation(developerProfile)
{
     this.full_Name = full_Name;
     this.age = age;
     this.profession = profession;
     this.skills = skills;
     this.contact = contact;
     this.email = email;
     this.phone = phone;
     this.location = location;

     return "Hello everyone, my name is " + this.full_Name + " and I am " + this.age + " years old. I am a " + this.profession + " and I have skills in " + this.skills.join(",");
}

console.log(self_Presentation())