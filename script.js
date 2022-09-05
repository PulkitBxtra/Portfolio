$(document).ready(function(){

    //init scroll magic
    var controller=new ScrollMagic.Controller();


    var scene = new ScrollMagic.Scene({triggerElement: "#hero", duration: 500})
								.setPin("#pin0")
								// .addIndicators({name: "0 (duration: 500)"}) // add indicators (requires plugin)
                                .setClassToggle('#hero','fade-in')//adds class to project
								.addTo(controller);
   

    var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 500})
								.setPin("#pin1")
								// .addIndicators({name: "1 (duration: 500)"}) // add indicators (requires plugin)
                                .setClassToggle('#about','fade-in')//adds class to project
								.addTo(controller);


    var scene = new ScrollMagic.Scene({triggerElement: "#about2", duration: 500})
								.setPin("#pin2")
								// .addIndicators({name: "2 (duration: 500)"}) // add indicators (requires plugin)
                                .setClassToggle('#about2','fade-in')//adds class to project
								.addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#hobbies", duration: 500})
								.setPin("#pin3")
								// .addIndicators({name: "3 (duration: 500)"}) // add indicators (requires plugin)
                                .setClassToggle('#hobbies','fade-in')//adds class to project
								.addTo(controller);                                
                            
    var scene = new ScrollMagic.Scene({triggerElement: "#skills", duration: 500})
								.setPin("#pin4")
								// .addIndicators({name: "4 (duration: 500)"}) // add indicators (requires plugin)
                                .setClassToggle('#skills','fade-in')//adds class to project
								.addTo(controller);                                     


    var scene = new ScrollMagic.Scene({triggerElement: "#project1", duration: 300})
								.setPin("#count")
								// .addIndicators({name: "5 (duration: 300)"}) // add indicators (requires plugin)
                                .setClassToggle('#temp1','fade-in')//adds class to project
								.addTo(controller);     
                                
    var scene = new ScrollMagic.Scene({triggerElement: "#project2", duration: 300})
								.setPin("#count2")
								// .addIndicators({name: "6 (duration: 300)"}) // add indicators (requires plugin)
                                .setClassToggle('#temp2','fade-in')//adds class to project
								.addTo(controller); 


    var scene = new ScrollMagic.Scene({triggerElement: "#project3", duration: 300})
								.setPin("#count3")
								// .addIndicators({name: "7 (duration: 300)"}) // add indicators (requires plugin)
                                .setClassToggle('#temp3','fade-in')//adds class to project
								.addTo(controller); 

    var scene = new ScrollMagic.Scene({triggerElement: "#project-end", duration: 300})
								.setPin("#pin6")
								// .addIndicators({name: "8 (duration: 300)"}) // add indicators (requires plugin)
                                .setClassToggle('#project3','fade-in')//adds class to project
                                .setClassToggle('#about-content-top','fade-in')//adds class to project
								.addTo(controller); 

   
});




const Git1 = () =>{
    window.open("https://github.com/PulkitBxtra/LightWeb");
}

const Dep1 = () =>{
    window.open("https://pulkitbxtra.github.io/LightWeb/");
}



const Git2 = () =>{
    window.open("https://github.com/PulkitBxtra/SuperheroSearch");
}

const Dep2 = () =>{
    window.open("https://pulkitbxtra.github.io/SuperheroSearch/");
}

const Git3 = () =>{
    window.open("https://github.com/PulkitBxtra/Yummy.io");
}

const Dep3 = () =>{
	alert("OnGoing Project.....Not Deployed Yet.");
//     window.open("https://pulkitbxtra.github.io/Yummy.io/");
}


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('SmfdSxlZE-q5n5a1t');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_rtx10be', 'template_j4mb7at', this)
            .then(function() {
                success();
            }, function(error) {
                console.log('FAILED...', error);
                
            });
    });
}

const Submit = () =>{
   document.getElementById('contact-form').Submit();
}

const success = () =>{
    console.log('sent');
    document.getElementById('submit-form').innerHTML='<input type="submit" value="Sent✔️" id="send">';
}

const failed = () => {
    document.getElementById('submit-form').innerHTML='<input type="submit" value="Failed❌" id="send">';
}
