document.addEventListener('DOMContentLoaded',function(){
    //retrieve elements
    const header = document.getElementById('header');
    const about = document.getElementById('about me');
    const experience = document.getElementById('experience');
    const skills = document.getElementById('skills');
    const contacts = document.getElementById('contacts');

    // Add event listener to the about
    about.addEventListener('click', function() {
        alert('About clicked!');
    })
        experience.addEventListener('click', function() {
        alert('experience clicked!');
    })
        skills.addEventListener('click', function() {
            alert('skills clicked!');
        })   
            contacts.addEventListener('click', function() {
                alert('contacts clicked!');
            })       
            
        }) 