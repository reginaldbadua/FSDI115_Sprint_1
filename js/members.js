// dummyArray = [
//     {
//         firstName: 'Jim',
//         lastName: 'Smith',
//         age: 18,
//         student: true,
//         standard: false
//     },
//     {
//         firstName: 'Bill',
//         lastName: 'Jones',
//         age: 40,
//         student: false,
//         standard: true
//     }

// ];

function buildUserList(members) {

    console.log('members: ', members);

    var fullListOfUsers = document.getElementById("userList");
    console.log(fullListOfUsers);
    fullListOfUsers.innerHTML = '' ;
    var userTxt = '';

    for (i = 0; i < members.length; i++) {
        var member = '';

        if (members[i].student) {
            member = 'student';

        } else {
            member = 'standard';
        }

        userTxt +=` 
         <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${members[i].firstName} ${members[i].lastName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Age: ${members[i].age}</h6>
                <p class="card-text">Membership Status <strong>${members[i].membership}</strong></p>
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link">Check In</a>
            </div>
            </div>`;
    }

    fullListOfUsers.innerHTML += userTxt ;

}

// buildUserList();