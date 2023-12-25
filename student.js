function enrollStudent() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var imageLink = document.getElementById('imageLink').value;

    var genderElement = document.querySelector('input[name="gender"]:checked');
    var gender = genderElement ? genderElement.value : '';

    var skills = [];
    var skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    skillsCheckboxes.forEach(function (checkbox) {
        skills.push(checkbox.value);
    });

    var output = document.getElementById('output');
    output.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Website:</strong> ${website}<br>
        <strong>Image Link:</strong> <img src="${imageLink}" alt="User Image"><br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Skills:</strong> ${skills.join(', ')}
    `;
}

function clearForm() {
    document.getElementById('registration-form').reset();
    document.getElementById('output').innerHTML = '';
}